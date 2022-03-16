import React, { useState, useEffect } from "react";
import "bootstrap";
import { Table, FormGroup, Form, Col, Row } from "react-bootstrap";
import ReactNotification from "react-notifications-component";
import { store } from "react-notifications-component";
import "./Admin.scss";
import axios from "axios";
import { API_HOST, create_training, delete_training } from "../../api_utils";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";

const Admin = () => {
  const [name, setName] = useState("");
  const [body, setBody] = useState({
    category_id: null,
    title: null,
    price: null,
    training_language: null,
    capacity: null,
  });
  const [image, setImage] = useState();
  const [isValid, setIsValid] = useState(true);
  const [pages, setPages] = useState([]);
  const [error, setError] = useState("");
  const [category, setCategory] = useState([]);
  const [modal, setModal] = useState(false);
  const [modaldata, setModaldata] = useState([]);
  const [validated, setValidated] = useState(false);
  const upload = async (body) => {
    const newPage = await create_training(body);
  };
  const handldeSubmit = async () => {
    if (!name) {
      setIsValid(false);
      return;
    }
    console.log(body);
    // const newPage = await create_training(body);
    // body.forEach((item, index) => {
    //   upload(item);
    // });
    //  body.map((el) => upload(el));
    // const newPage = await create_page(body);
    //   setName("");
    //  setPages([...pages, newPage]);
  };

  const handle = (e) => {
    const newbody = { ...body };

    if (e.target.id === "image") {
      const image = e.target.files[0];

      setImage(image);
      console.log("kkk", image);
    } else {
      newbody[e.target.id] = e.target.value;
      setBody(newbody);
    }
  };
  const getimage = (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    console.log(e.target.files);
  };
  const deleteTraining = (e) => {
    if (window.confirm(`${e[1]} \nУстгахдаа итгэлтэй байна уу?`)) {
      delete_training(e[0], e[1]);
      const newPage = pages.filter((item) => item.id !== e[0]);
      setPages(newPage);
    }
  };
  const submit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    const createTraining = async (body) => {
      const token = { token: localStorage.getItem("token") };
      try {
        const response = await axios
          .post(`${API_HOST}/training`, body)
          .then((res) => {
            if (res.data === "success") {
              window.location.reload();
            } else console.log("error on response");
          });
        return response.data;
      } catch (error) {
        console.log("error :>>", error);
      }
    };
    setValidated(true);

    if (form.checkValidity() === true) {
      e.preventDefault();

      const data = new FormData();
      data.append("file", image);
      data.append("category_id", body.category_id);
      data.append("title", body.title);
      data.append("price", body.price);
      data.append("training_language", body.training_language);
      data.append("capacity", body.capacity);
      data.append("form_id", body.form_id);
      data.append("token", localStorage.getItem("token"));

      const res = createTraining(data);
    }
  };

  const alertMessage = () => {
    store.addNotification({
      title: "Амжилттай нэмлээ.",
      message: "Амжилттай нэмлээ.",
      type: "success",
      container: "top-right",
      insert: "top",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeout"],

      dismiss: {
        duration: 1000,
        showIcon: true,
      },
      width: 600,
    });
  };
  useEffect(() => {
    async function getAllPages() {
      try {
        const response = await axios.get(`${API_HOST}/training`);
        const category = await axios.get(`${API_HOST}/training_category`);
        setPages(response.data);
        setCategory(category.data);
        console.log(response.data);
      } catch (error) {
        console.log("error :>>", error);
        setError(error.message);
      }
    }
    getAllPages();
  }, []);
  return (
    <div className="container">
      {modal && (
        <Modal closeModal={setModal} data={modaldata} category={category} />
      )}
      <div className="col-12 mt-5">
        <div className="modal-header">
          <h5 className="modal-tittle" id="addPageModalLabel" Create Page>
            Create page
          </h5>
        </div>
        <Form noValidate validated={validated} onSubmit={submit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Title of Page"
                onChange={(e) => handle(e)}
                id="title"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Category сонгох</Form.Label>
              <Form.Select
                onChange={(e) => handle(e)}
                id="category_id"
                required
              >
                <option value={0}>Сонгох</option>
                {category
                  ? category.map((item) => (
                      <option value={item.id}>{item.title}</option>
                    ))
                  : "No category"}
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Price</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Price"
                onChange={(e) => handle(e)}
                id="price"
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Хэл</Form.Label>
              <Form.Select
                onChange={(e) => handle(e)}
                required
                id="training_language"
              >
                <option>Сонгох</option>
                <option>Англи</option>
                <option>Монгол</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Хүний тоо</Form.Label>
              <Form.Control
                onChange={(e) => handle(e)}
                id="capacity"
                type="number"
                required
                placeholder="Хүний тоо"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Зураг</Form.Label>
              <Form.Control
                required
                type="file"
                onChange={(e) => handle(e)}
                id="image"
              />
              <Form.Control.Feedback type="invalid">
                Зураг оруулна уу
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Form link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Хийхгүй байж болно"
                onChange={(e) => handle(e)}
                id="form_id"
              />
            </Form.Group>
          </Row>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick="clearForm()"
            >
              Clear
            </button>
            <button type="submit" className="btn btn-primary btn-sm">
              Submit
            </button>
          </div>
        </Form>
      </div>

      <div className="col-12 my-2">
        {error && (
          <div role="alert" className="alert alert-primary">
            {error}
          </div>
        )}
        <Table striped bordered hover>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Category</td>
              <td>Price</td>
              <td colSpan="3">Action</td>
            </tr>
          </thead>

          <tbody>
            {pages
              ? pages.map((page) => (
                  <tr key={page.id}>
                    <td>{page.id}</td>
                    <td>{page.title}</td>
                    <td>
                      {category.map((item) =>
                        page.category_id === item.id
                          ? item.title.toLowerCase()
                          : ""
                      )}
                    </td>
                    <td>{page.price}</td>
                    <td>
                      <Link
                        to={{ pathname: `/editor/${page.id}`, state: { page } }}
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        style={{ background: "transparent" }}
                        onClick={() => deleteTraining([page.id, page.title])}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        style={{ background: "transparent" }}
                        onClick={() => {
                          setModal(true);
                          setModaldata(page);
                        }}
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))
              : "No page"}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Admin;

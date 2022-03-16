import React, { useState, useEffect } from "react";
import "bootstrap";
import { Table, FormGroup, Form, Col, Row } from "react-bootstrap";
import style from "./homeEdit.scss";
import { Link } from "react-router-dom";
import { Modal } from "bootstrap";
import { API_HOST, banner_upload, delete_Banner } from "../../api_utils";
import axios from "axios";

const HomeEdit = () => {
  const [image, setImage] = useState();
  const [isValid, setIsValid] = useState(true);
  const [banner, setBanner] = useState([]);
  const [error, setError] = useState("");
  const [category, setCategory] = useState([]);
  const [body, setBody] = useState(false);
  const [modaldata, setModaldata] = useState([]);
  const [validated, setValidated] = useState(false);
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
  const deleteBanner = (e) => {
    if (window.confirm(`${e[1]} \nУстгахдаа итгэлтэй байна уу?`)) {
      delete_Banner(e[0]);
      const newBanner = banner.filter((item) => item.id !== e[0]);
      setBanner(newBanner);
    }
  };
  const submit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    const banner_upload = async (body) => {
      try {
        const response = await axios
          .post(`${API_HOST}/banner`, body)
          .then((res) => {
            if (res.data === "success") {
              window.location.reload();
            } else console.log("error on response");
          });
      } catch (error) {
        console.log("error :>>", error);
      }
    };

    setValidated(true);

    if (form.checkValidity() === true) {
      e.preventDefault();
      const data = new FormData();
      console.log(body);
      data.append("file", image);
      data.append("body", body.body);
      data.append("link", body.link);
      data.append("title", body.title);
      data.append("page", body.page);
      data.append("token", localStorage.getItem("token"));
      banner_upload(data);
    }
  };

  useEffect(() => {
    async function getAllPages() {
      try {
        const response = await axios.get(`${API_HOST}/banner`);
        setBanner(response.data);
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
      <div className="col-12 mt-5">
        <div className="modal-header">
          <h5 className="modal-tittle" id="addPageModalLabel" Create Page>
            Баннэр
          </h5>
        </div>
        <Form noValidate validated={validated} onSubmit={submit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Гарчиг"
                onChange={(e) => handle(e)}
                id="title"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Хуудас</Form.Label>
              <Form.Select onChange={(e) => handle(e)} id="page" required>
                <option value={0}>Сонгох</option>
                <option value={"home"}>Нүүр</option>
                <option value={"training"}>Сургалт</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12">
              <Form.Label>Body</Form.Label>
              <Form.Control
                type="text"
                placeholder="Text"
                onChange={(e) => handle(e)}
                id="body"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Link</Form.Label>
              <Form.Control
                onChange={(e) => handle(e)}
                id="link"
                type="text"
                placeholder="Banner линк"
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
              <td>Page</td>
              <td>Name</td>
              <td>Body</td>
              <td>image</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody>
            {banner
              ? banner.map((item) => (
                  <tr key={item.id}>
                    <td>{item.page}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>
                      <Link to={{ pathname: item.imgurl }} target="_blank">
                        link
                      </Link>
                    </td>

                    <td>
                      <button
                        style={{ background: "transparent" }}
                        onClick={() => deleteBanner([item.id, item.title])}
                      >
                        Delete
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

export default HomeEdit;

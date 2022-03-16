import React, { useState, useEffect } from "react";
import "bootstrap";
import { Table, FormGroup, Form, Col, Row } from "react-bootstrap";
import style from "./NewsEdit.scss";
import { Link } from "react-router-dom";
import NewsModal from "../../components/NewsModal";
import {
  API_HOST,
  banner_upload,
  delete_Banner,
  delete_news,
  news_upload,
} from "../../api_utils";
import axios from "axios";

const NewsEdit = () => {
  const [image, setImage] = useState();
  const [isValid, setIsValid] = useState(true);
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  const [category, setCategory] = useState([]);
  const [body, setBody] = useState(false);
  const [modaldata, setModaldata] = useState([]);
  const [validated, setValidated] = useState(false);
  const date = new Date();
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
  const deleteNews = (e) => {
    console.log(e);
    if (window.confirm(`${e[1]} \nУстгахдаа итгэлтэй байна уу?`)) {
      const body = new FormData();

      body.append("title", e[1]);
      body.append("brief", localStorage.getItem("token"));
      delete_news(e[0]);

      const newNews = news.filter((item) => item.id !== e[0]);
      setNews(newNews);
    }
  };
  const newsUpload = async (body) => {
    try {
      const response = await axios
        .post(`${API_HOST}/news`, body)
        .then((res) => {
          if (res.data === "success") {
            window.location.reload();
          } else console.log("error on response");
        });
    } catch (error) {
      console.log("error :>>", error);
    }
  };
  const submit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
      e.preventDefault();
      const data = new FormData();

      data.append("file", image);
      data.append("brief", body.brief);
      data.append("date", body.date);
      data.append("title", body.title);
      data.append("type", body.type);
      data.append("token", localStorage.getItem("token"));
      newsUpload(data);
    }
  };

  useEffect(() => {
    async function getAllPages() {
      try {
        const response = await axios.get(`${API_HOST}/news`);
        setNews(response.data);
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
      {modal && <NewsModal closeModal={setModal} data={modaldata} />}
      <div className="col-12 mt-5">
        <div className="modal-header">
          <h5 className="modal-tittle" id="addPageModalLabel" Create Page>
            Мэдээ нэмэх
          </h5>
        </div>
        <Form noValidate validated={validated} onSubmit={submit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Гарчиг</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Мэдээний гарчиг"
                onChange={(e) => handle(e)}
                id="title"
              />
              <Form.Control.Feedback type="invalid">
                Мэдээний гарчиг оруулна уу!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Төрөл сонгох</Form.Label>
              <Form.Select
                onChange={(e) => handle(e)}
                id="type"
                required
                aria-label="Сонгох"
              >
                <option value={"Хувь хүний хөгжил"}>Сонгох</option>
                <option value={"Хувь хүний хөгжил"}>Хувь хүний хөгжил</option>
                <option value={"Сургалт"}>Сургалт</option>
                <option value={"Ярилцлага"}>Ярилцлага</option>
                <option value={"Бүтээгдэхүүн"}>Бүтээгдэхүүн</option>
                <option value={"Арга хэмжээ"}>Арга хэмжээ</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Төрөлөө сонгоно уу
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12">
              <Form.Label>Товч тайлбар</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Товч тайлбар"
                onChange={(e) => handle(e)}
                id="brief"
              />
              <Form.Control.Feedback type="invalid">
                Товч тайлбар оруулна уу!
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Он сар</Form.Label>
              <Form.Control
                onChange={(e) => handle(e)}
                id="date"
                type="date"
                required
              />
              <Form.Control.Feedback type="invalid">
                Он сараа оруулна уу!
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
              <td>Гарчиг</td>
              <td>Төрөл</td>
              <td>Огноо</td>
              <td colSpan="3">Action</td>
            </tr>
          </thead>

          <tbody>
            {news
              ? news.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.type}</td>
                    <td>{item.date}</td>
                    <td>
                      <Link
                        to={{
                          pathname: `/newsEdit/${item.id}`,
                          state: { item },
                        }}
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        style={{ background: "transparent" }}
                        onClick={() => deleteNews([item.id, item.title])}
                      >
                        Delete
                      </button>
                    </td>
                    {/* <td>
                      <button
                        style={{ background: "transparent" }}
                        onClick={() => {
                          setModal(true);
                          setModaldata(item);
                        }}
                      >
                        Details
                      </button>
                    </td> */}
                  </tr>
                ))
              : "No news"}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default NewsEdit;

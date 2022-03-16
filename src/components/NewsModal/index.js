import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import {
  API_HOST,
  create_training,
  delete_training,
  update_news,
  update_training,
} from "../../api_utils";

import { Form, Col, Row, InputGroup } from "react-bootstrap";
const Modal = (props) => {
  const [validated, setValidated] = useState(false);
  const [image, setImage] = useState();
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      id: props.data.id,
      title: props.data.title,
      brief: props.data.brief,
      date: props.data.date,
      type: props.data.type,
    });
  }, []);

  const handle = (e) => {
    const newbody = { ...data };

    if (e.target.id === "image") {
      const image = e.target.files[0];

      setImage(image);
      console.log("kkk", image);
    } else {
      newbody[e.target.id] = e.target.value;
      setData(newbody);
    }

    console.log(data);
  };
  const submit = (e) => {
    const body = new FormData();
    body.append("file", image);
    body.append("id", data.id);
    body.append("brief", body.brief);
    body.append("date", body.date);
    body.append("title", body.title);
    body.append("type", body.type);
    body.append("token", localStorage.getItem("token"));
    update_news(body);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className={style.modalBackground}>
      <div className={style.modalContainer}>
        <div className={style.titleCloseBtn}>
          {console.log(data.training_language)}
          <button
            onClick={() => {
              props.closeModal();
            }}
          >
            X
          </button>
        </div>
        <div className={style.title}>
          <h1>Мэдээлэл шинэчлэх </h1>
        </div>
        <Form noValidate validated={validated} onSubmit={submit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Гарчиг</Form.Label>
              <Form.Control
                required
                defaultValue={data.title}
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
                defaultValue={data.brief}
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
        <div className={style.footer}>
          <button
            onClick={() => {
              props.closeModal();
            }}
            id={style.cancelBtn}
          >
            Болих
          </button>
          <button
            onClick={() => {
              submit();
              props.closeModal();
            }}
          >
            Зөвшөөрөх
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

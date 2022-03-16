import React, { useEffect, useState } from "react";
import style from "./Modal.module.scss";
import {
  API_HOST,
  create_training,
  delete_training,
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
      category_id: props.data.category_id,
      title: props.data.title,
      price: props.data.price,
      training_language: props.data.training_language,
      capacity: props.data.capacity,
      form_id: props.data.form_id,
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
  };
  const submit = (e) => {
    const body = new FormData();
    body.append("file", image);
    body.append("id", data.id);
    body.append("category_id", data.category_id);
    body.append("title", data.title);
    body.append("price", data.price);
    body.append("training_language", data.training_language);
    body.append("capacity", data.capacity);
    body.append("form_id", data.form_id);
    body.append("token", localStorage.getItem("token"));
    update_training(body);
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
        <Form noValidate>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Title of Page"
                defaultValue={data.title}
                onChange={(e) => handle(e)}
                id="title"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Category сонгох</Form.Label>
              <Form.Select
                defaultValue=""
                onChange={(e) => handle(e)}
                id="category_id"
              >
                <option>Сонгох</option>
                {props.category
                  ? props.category.map((item) => (
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
                defaultValue={data.price}
                onChange={(e) => handle(e)}
                id="price"
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Хэл</Form.Label>
              <Form.Select
                defaultValue={data.training_language}
                onChange={(e) => handle(e)}
                id="training_language"
              >
                <option>Сонгох</option>
                <option value="Англи">Англи</option>
                <option value="Монгол">Монгол</option>
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
                placeholder="Хүний тоо"
                defaultValue={data.capacity}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Зураг</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => handle(e)}
                id="image"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Form link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Хийхгүй байж болно"
                onChange={(e) => handle(e)}
                defaultValue={data.form_id}
                id="form_id"
              />
            </Form.Group>
          </Row>
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

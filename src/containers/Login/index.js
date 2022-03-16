import React, { useContext, useEffect, useState } from "react";

import style from "./style.module.scss";
import {
  API_HOST,
  create_training,
  delete_training,
  update_training,
} from "../../api_utils";

import { Form, Col, Row, InputGroup, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../UserContext";
const Modal = (props) => {
  const [validated, setValidated] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [data, setData] = useState({});
  const history = useHistory();

  const hey = useContext(UserContext);
  useEffect(() => {}, []);

  const handle = (e) => {
    const newbody = { ...data };

    newbody[e.target.id] = e.target.value;
    setData(newbody);
  };
  const submit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    e.preventDefault();
    if (form.checkValidity() === true) {
      axios
        .post(`${API_HOST}/account/login`, data)
        .then((res) => {
          const data = { islogin: true };
          localStorage.setItem("token", res.data.token);
          setLoginError(false);
          props.setLogin(data);
          history.push("/");
        })
        .catch((error) => {
          console.log(error);
          setLoginError(true);
        });
    }
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
            onClick={(e) => {
              history.push("/");
            }}
          >
            Х
          </button>
        </div>
        <div className={style.title}>
          <h1>Нэвтрэх </h1>
        </div>
        <Form noValidate validated={validated} onSubmit={submit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="0">
              <Form.Control
                required
                type="text"
                placeholder="Username"
                defaultValue={data.title}
                onChange={(e) => handle(e)}
                id="username"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="0">
              <Form.Control
                required
                type="Password"
                placeholder="Password"
                defaultValue={data.price}
                onChange={(e) => handle(e)}
                id="password"
              />
            </Form.Group>
          </Row>
          <div className={style.footer}>
            <button type="submit">Зөвшөөрөх</button>
          </div>
          {loginError ? (
            <Alert bsStyle="warning">
              <strong>Алдаа!</strong> Нэвртэх нэр болон нууц үгээ шалгана уу.
            </Alert>
          ) : (
            ""
          )}
          ;
        </Form>
      </div>
    </div>
  );
};

export default Modal;

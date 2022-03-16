import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";
import axios from "axios";
import { API_HOST } from "../../api_utils";
import { useParams } from "react-router";
import { css } from "styled-components";
import classes from "./style.module.scss";

export class newsPage extends Component {
  state = {
    data: {},
    html: "",
    css: "",
  };
  async componentDidMount() {
    const id = this.props.match.params.pageId;
    try {
      const response = await axios.get(`${API_HOST}/newsEdit/${id}/content`);

      this.setState({
        data: response.data,
        html: response.data[`${id}html`],
        css: response.data[`${id}css`],
      });

      console.log(this.state.html);
      console.log(this.state.css);
    } catch (error) {
      console.log("error :>>", error);
    }
  }

  render() {
    let formData = {
      title: "Бүртгүүлэх",
      inputs: [
        {
          label: "Багцын сонголт",
        },
        {
          label: "Таны нэр",
        },
        {
          label: "Имэйл хаяг",
        },
        {
          label: "Утасны дугаар",
        },
        {
          label: "Байгууллагын нэр",
        },
        {
          label: "Имэйл хэрэглэгчийн тоо",
        },
      ],
    };
    return (
      <div className="cont">
        <div
          className={classes.body}
          dangerouslySetInnerHTML={{ __html: this.state.html }}
        ></div>

        {/* <Form title={formData.title} inputs={formData.inputs} /> */}
        <style>{this.state.css}</style>
      </div>
    );
  }
}

export default newsPage;

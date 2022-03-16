import axios from "axios";

export const API_HOST = "http://13.76.216.31:5000";

export const create_training = async (body) => {
  const token = { token: localStorage.getItem("token") };
  try {
    const response = await axios
      .post(`${API_HOST}/training`, body)
      .then((res) => console.log(res));
    return response.data;
  } catch (error) {
    console.log("error :>>", error);
  }
};

export const update_training = async (body) => {
  try {
    const response = await axios
      .put(`${API_HOST}/training`, body)
      .then((res) => console.log(res));
    return response.data;
  } catch (error) {
    console.log("error :>>", error);
  }
};
export const update_news = async (body) => {
  try {
    const response = await axios
      .put(`${API_HOST}/news`, body)
      .then((res) => console.log(res));
    return response.data;
  } catch (error) {
    console.log("error :>>", error);
  }
};
export const get_edit = async (pageId) => {
  try {
    const response = await axios.get(`${API_HOST}/edit/${pageId}/content`);
    return response.data;
  } catch (error) {
    console.log("error :>>", error);
  }
};

export const get_page = async (pageId) => {
  try {
    const response = await axios.get(`${API_HOST}/pages/${pageId}/content`);
    return response.data;
  } catch (error) {
    console.log("error :>>", error);
  }
};
export const delete_training = async (id, title) => {
  try {
    const deleteData = await axios
      .delete(`${API_HOST}/training/${id}/${title}`)
      .then((res) => console.log(res.data));
  } catch (error) {
    console.log("error :>>", error);
  }
};

export const assest_upload = async (body) => {
  try {
    const response = await axios.post(`${API_HOST}/asset`, body);
    return response;
  } catch (error) {
    console.log("error :>>", error);
  }
};
export const banner_upload = async (body) => {
  try {
    const response = await axios.post(`${API_HOST}/banner`, body);
    return response;
  } catch (error) {
    console.log("error :>>", error);
  }
};
export const delete_Banner = async (id) => {
  try {
    const dBanner = await axios
      .delete(`${API_HOST}/banner/${id}`)
      .then((res) => console.log(res.data));
  } catch (error) {
    console.log("error :>>", error);
  }
};
export const news_upload = async (body) => {
  try {
    const response = await axios.post(`${API_HOST}/news`, body);
    return response;
  } catch (error) {
    console.log("error :>>", error);
  }
};
export const delete_news = async (id) => {
  try {
    const dNews = await axios.delete(`${API_HOST}/news/${id}`);
    return dNews;
  } catch (error) {
    console.log("error :>>", error);
  }
};

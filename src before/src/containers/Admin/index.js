import React, { useState, useEffect } from "react";
import "bootstrap";
import "./Admin.scss";
import axios from "axios";
import { API_HOST, create_page } from "../../api_utils";
import { Link } from "react-router-dom";
const Admin = () => {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [pages, setPages] = useState([]);
  const [error, setError] = useState("");
  const handldeSubmit = async () => {
    if (!name) {
      setIsValid(false);
      return;
    }
    const newPage = await create_page(name);
    setName("");
    setPages([...pages, newPage]);
  };

  useEffect(() => {
    async function getAllPages() {
      try {
        const response = await axios.get(`${API_HOST}/`);
        setPages(response.data);
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
        <form
          id="create-page"
          onsubmit="return validationForm()event"
          novalidate
        >
          <div className="modal-header">
            <h5
              className="modal-tittle"
              id="addPageModalLabel"
              Create
              Page
            ></h5>
          </div>
          <div className="modal-body">
            <div className="col-auto">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className={`form-control form-control-sm ${
                  isValid ? "" : "is-invalid"
                }`}
                id="name"
                name="name"
                placeholder="Name of Page"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {!isValid && (
                <div className="invalid-feedback">
                  Please provide a valid name
                </div>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              data-bs-dismiss="modal"
            >
              Clear
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={handldeSubmit}
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <div className="col-12 my-2">
        {error && (
          <div role="alert" className="alert alert-primary">
            {error}
          </div>
        )}
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Slug</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody>
            {pages
              ? pages.map((page) => (
                  <tr key={page._id}>
                    <td>{page._id}</td>
                    <td>{page.name}</td>
                    <td>{page.slug}</td>
                    <td>
                      <Link to={`/page/${page._id}`}>Edit</Link>
                    </td>
                  </tr>
                ))
              : "No page"}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;

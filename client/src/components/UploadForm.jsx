import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URI } from "../config/constants";

const UploadForm = ({ getAllFiles }) => {
  const [name, setName] = useState("");
  const [files, setFiles] = useState([]);

  const hadleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    for (let key in files) {
      formdata.append("files", files[key]);
    }

    formdata.append("name", name);

    axios
      .post(`${BACKEND_URI}/api/v1/file/create`, formdata)
      .then((success) => {
        getAllFiles();
        alert("Submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error happened!");
      });
  };

  return (
    <>
      <form onSubmit={hadleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="files">Upload Files</label>
          <input
            type="file"
            name="files"
            id="files"
            multiple
            className="form-control"
            onChange={(e) => {
              setFiles(e.target.files);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default UploadForm;

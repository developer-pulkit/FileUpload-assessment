import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import UploadForm from "./components/UploadForm";
import UploadsList from "./components/UploadsList";
import { BACKEND_URI } from "./config/constants";

const App = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    getAllFiles();
  }, []);

  const getAllFiles = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/file/all`)
      .then((result) => {
        setFiles(result.data);
      })
      .catch((error) => {
        setFiles([]);
        console.log(error);
        alert("Error happened!");
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadForm getAllFiles={getAllFiles} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadsList files={files} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

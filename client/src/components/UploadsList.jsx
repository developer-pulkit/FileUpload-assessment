import React from "react";
import { BACKEND_URI } from "../config/constants";

const UploadsList = ({ files }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th width="200">Name</th>
              <th>Files</th>
            </tr>
          </thead>
          <tbody>
            {files &&
              files.map((data) => {
                return (
                  <tr>
                    <td>{data.name}</td>
                    <td>
                      {data.files.map((file) => {
                        return (
                          <video
                            preload="auto"
                            width="320"
                            height="240"
                            controls
                          >
                            <source src={`${BACKEND_URI}${file}`} />
                            ;Your browser does not support the file tag.
                          </video>
                        );
                      })}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadsList;

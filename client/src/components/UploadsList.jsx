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
                        return <td>{file}</td>;
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

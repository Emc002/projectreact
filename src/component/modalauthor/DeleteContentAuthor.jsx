import React from "react";
import { Col } from "antd";
import "../../assets/css/App.css";

const DeleteContentAuthor = (data) => {
  return (
    <div className="deleteBook">
      <h3>NAME AUTHOR : {data.dataAuthor.label}</h3>
    </div>
  );
};

export default DeleteContentAuthor;

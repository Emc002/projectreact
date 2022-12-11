import React from "react";
import { Col } from "antd";
import "../../assets/css/App.css";

const DeleteContent = ({ dataBook }) => {
  return (
    <div className="deleteBook">
      <img className="imgDelete" src={dataBook.cover} />
      <h3>Title :{dataBook.title}</h3>
      <h4>Author :{dataBook.author}</h4>
    </div>
  );
};

export default DeleteContent;

import axios from "axios";
import React, { useState } from "react";
import { Col, Input, notification } from "antd";
import "../../assets/css/App.css";

const FormAddAuthor = ({ action, type, name, dataSource }) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.open({
      className: "successNotif",
      description:
        name === "UPDATE" ? "UPDATE AUTHOR SUCCESS" : "ADDING AUTHOR SUCCESS",
      placement,
      closable: false,
    });
  };

  const openNotificationE = (placement) => {
    api.open({
      className: "successNotif",
      description: "EDIT AUTHOR SUCCESS",
      placement,
      closable: false,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    openNotification("topLeft");
  };
  return (
    <div className="boxform">
      {contextHolder}
      <form
        className="form-container"
        onSubmit={(e, data) => {
          action(e, data);
          handleSubmit(e);
        }}
      >
        <Col className="formData">
          <label>AUTHOR NAME</label>
          <input
            required={!dataSource ? true : false}
            className="inputdata"
            type="text"
            placeholder={!dataSource ? "label" : dataSource.placehold.label}
            name="label"
          />
          <label>BIOGRAFI</label>
          <textarea
            required={!dataSource ? true : false}
            className="areainput"
            type="text"
            placeholder={
              !dataSource
                ? "biografi"
                : `${dataSource.placehold.biografi.substring(0, 30)}...`
            }
            name="desc"
          />
          <button className="btnadd" type="submit">
            {name}
          </button>
        </Col>
      </form>
    </div>
  );
};

export default FormAddAuthor;

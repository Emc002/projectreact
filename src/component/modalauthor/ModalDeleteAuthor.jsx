import React, { useState, useEffect, useReducer } from "react";
import { deleteAuthor } from "../../service";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import "../../assets/css/App.css";
import DeleteContentAuthor from "./DeleteContentAuthor";

const ModalDeleteAuthor = (data) => {
  const addRender1 = data.addRender;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { confirm } = Modal;
  const showDeleteConfirmAuthor = () => {
    confirm({
      title: "Are you sure delete this Author?",
      icon: <ExclamationCircleFilled />,
      content: <DeleteContentAuthor dataAuthor={data.data2} />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteAuthor(data.id);
        addRender1();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <div>
      <Button className="deletebtn" onClick={showDeleteConfirmAuthor} danger>
        Delete
      </Button>
    </div>
  );
};

export default ModalDeleteAuthor;

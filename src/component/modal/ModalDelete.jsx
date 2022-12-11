import React, { useState, useEffect, useReducer } from "react";
import { deleteBook } from "../../service";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import "../../assets/css/App.css";
import DeleteContent from "./DeleteContent";

const ModalDelete = (data) => {
  const addRender1 = data.addRender;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { confirm } = Modal;
  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this Book?",
      icon: <ExclamationCircleFilled />,
      content: <DeleteContent dataBook={data.data2} />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteBook(data.id);
        addRender1();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <div>
      <Button className="deletebtn" onClick={showDeleteConfirm} danger>
        Delete
      </Button>
    </div>
  );
};

export default ModalDelete;

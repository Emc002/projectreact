import React, { useState, useEffect, useReducer, useContext } from "react";
import { patchBook, postAuthor } from "../../service";
import { Button } from "antd";
import "../../assets/css/App.css";
import { Modal } from "antd";
import FormAddAuthor from "../formauth/FormAddAuthor";

const ModalInputAuthor = ({ addRender }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button type="primary" className="addBook" onClick={showModal}>
        Add Author
      </Button>
      <Modal
        title="Input Data Author"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormAddAuthor
          name="POST"
          action={(e) => {
            postAuthor(e);
            addRender(e);
          }}
        />
      </Modal>
    </div>
  );
};

export default ModalInputAuthor;

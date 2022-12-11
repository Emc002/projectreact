import React, { useState, useEffect, useReducer, useContext } from "react";
import { patchBook, postBook } from "../../service";
import FormAdd from "../../component/form/FormAdd";
import { Button } from "antd";
import "../../assets/css/App.css";
import { Modal } from "antd";

const ModalInput = ({ addRender }) => {
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
        Add Book
      </Button>
      <Modal
        title="Input Data Book"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormAdd
          name="POST"
          action={(e) => {
            postBook(e);
            addRender(e);
          }}
        />
      </Modal>
    </div>
  );
};

export default ModalInput;

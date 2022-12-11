import React, { useState, useEffect, useReducer } from "react";
import { patchAuthor, postBook } from "../../service";
import { Button } from "antd";
import "../../assets/css/App.css";
import { Modal } from "antd";
import FormAddAuthor from "../formauth/FormAddAuthor";

const ModalEditAuthor = (data) => {
  const addRender1 = data.addRender;
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
      <Button type="primary" className="editBook" onClick={showModal}>
        EDIT
      </Button>
      <Modal
        title="Edit Data Author"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormAddAuthor
          dataSource={data}
          type="UPDATE"
          name="UPDATE"
          action={(e) => {
            patchAuthor(e, data.id);
            addRender1(e);
          }}
        />
      </Modal>
    </div>
  );
};

export default ModalEditAuthor;

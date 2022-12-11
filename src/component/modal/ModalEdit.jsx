import React, { useState, useEffect, useReducer } from "react";
import { patchBook, postBook } from "../../service";
import FormAdd from "../form/FormAdd";
import { Button } from "antd";
import "../../assets/css/App.css";
import { Modal } from "antd";

const ModalEdit = (data) => {
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
        title="Edit Data Book"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormAdd
          dataSource={data}
          type="UPDATE"
          name="UPDATE"
          action={(e) => {
            patchBook(e, data.id);
            addRender1(e);
          }}
        />
      </Modal>
    </div>
  );
};

export default ModalEdit;

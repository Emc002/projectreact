import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { deleteBook, patchBook } from "../service";
import { useNavigate } from "react-router-dom";
import { Row, Table, notification } from "antd";
import ModalDeleteAuthor from "../component/modalauthor/ModalDeleteAuthor";
import ModalInputAuthor from "../component/modalauthor/ModalInputAuthor";
import ModalEditAuthor from "../component/modalauthor/ModalEditAuthor";

const AuthorData = () => {
  const navigate = useNavigate();
  const [rendering, forceUpdate] = useReducer((x) => x + 1, 0);
  const [dataSource, setDataSource] = useState([]);
  const [page, setPages] = useState(1);
  const [api, contextHolder] = notification.useNotification();

  function addRender() {
    forceUpdate();
  }
  const [coloumns, setColoumns] = useState([
    {
      title: "NO",
      dataIndex: "id",
    },
    {
      title: "AUTHOR NAME",
      dataIndex: "label",
    },
    {
      title: "BIOGRAFI  ",
      dataIndex: "biografi",
      render: (biografi) => <p>{biografi.substring(0, 30)}...</p>,
    },
    {
      title: "ACTION  ",
      dataIndex: "id",
      render: (data, dataSource) => (
        <div className="actionbtn">
          <ModalEditAuthor
            addRender={addRender}
            id={data}
            placehold={dataSource}
          />
          <ModalDeleteAuthor
            addRender={addRender}
            id={data}
            data2={dataSource}
          />
        </div>
      ),
    },
  ]);

  const openNotification = (placement) => {
    api.open({
      className: "ALertNotif",
      description: "MAXIMUM PAGES",
      placement,
      closable: false,
    });
  };

  const getAuthor = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3004/author?_page=${page}&_limit=5`
      );
      console.log(`http://localhost:3004/author?_page=${page}&_limit=5`);
      if (response.status === 200) {
        setDataSource(response.data);
      }
      if (response.data.length === 0) {
        setPages(page - 1);
        openNotification("top");
        forceUpdate();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const BACK = () => {
    if (page > 1) {
      setPages(page - 1);
      forceUpdate();
    }
  };
  const NEXT = () => {
    if (dataSource.length !== 0) {
      setPages(page + 1);
      forceUpdate();
    }
  };

  useEffect(() => {
    getAuthor();
  }, [rendering]);

  const navigateAddress = (content) => {
    navigate("/deskripsi", {
      replace: true,
      state: { form: content },
    });
  };
  return (
    <div>
      <ModalInputAuthor addRender={addRender} />
      {contextHolder}
      <Table
        className="tablemaster"
        columns={coloumns}
        dataSource={dataSource}
        scroll={{ y: 350 }}
        pagination={{ hideOnSinglePage: true }}
      />
      <div className="paginationdata">
        <h3 className="pagessdata">{page}</h3>
        <button className="tombPdata" onClick={BACK}>
          PREV
        </button>
        <button className="tombPdata" onClick={NEXT}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default AuthorData;

import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { deleteBook, patchBook } from "../service";
import { useNavigate } from "react-router-dom";
import { Row, Table, Button, notification } from "antd";
import ModalInput from "../component/modal/ModalInput";
import ModalDelete from "../component/modal/ModalDelete";
import ModalEdit from "../component/modal/ModalEdit";

const MasterData = () => {
  const navigate = useNavigate();
  const [rendering, forceUpdate] = useReducer((x) => x + 1, 0);
  const [dataSource, setDataSource] = useState([]);
  const [page, setPages] = useState(1);
  const [api, contextHolder] = notification.useNotification();

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
  function addRender() {
    forceUpdate();
  }
  const [coloumns, setColoumns] = useState([
    {
      title: "NO",
      dataIndex: "id",
    },
    {
      title: "TITLE",
      dataIndex: "title",
    },
    {
      title: "GENRE",
      dataIndex: "genre",
    },
    {
      title: "AUTHOR",
      dataIndex: "author",
    },
    {
      title: "DESC  ",
      dataIndex: "desc",
      render: (desc) => <p>{desc.substring(0, 30)}...</p>,
    },
    {
      title: "ACTION  ",
      dataIndex: "id",
      render: (data, dataSource) => (
        <div className="actionbtn">
          <ModalEdit addRender={addRender} id={data} placehold={dataSource} />
          <ModalDelete addRender={addRender} id={data} data2={dataSource} />
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
  const getBook = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3004/books?_page=${page}&_limit=5`
      );
      if (response.status === 200) {
        setDataSource(response.data);
      }
      if (response.data.length == 0) {
        setPages(page - 1);
        openNotification("top");
        forceUpdate();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBook();
  }, [rendering]);

  const navigateAddress = (content) => {
    navigate("/deskripsi", {
      replace: true,
      state: { form: content },
    });
  };
  return (
    <div>
      <ModalInput addRender={addRender} />
      {contextHolder}
      <Table
        className="tablemaster"
        columns={coloumns}
        dataSource={dataSource}
        scroll={{ y: 350 }}
        pagination={{ hideOnSinglePage: true }}
      ></Table>

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

export default MasterData;

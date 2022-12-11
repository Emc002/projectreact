import axios from "axios";
import { Row, Col } from "antd";
import { deleteBook } from "../../service";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useReducer } from "react";
import "../../assets/css/App.css";
import { BorderTopOutlined } from "@ant-design/icons";
import { notification } from "antd";

const ListBook = () => {
  const navigate = useNavigate();
  const [book, setBooks] = useState(null);
  const [rendering, forceUpdate] = useReducer((x) => x + 1, 0);
  const [page, setPages] = useState(1);
  const baseURL = `http://localhost:3004/books?_page=${page}&_limit=3&_sort=id&_order=desc`;
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.open({
      className: "ALertNotif",
      description: "MAXIMUM PAGES",
      placement,
      closable: false,
    });
  };

  const getBooks = async () => {
    try {
      const response = await axios.get(baseURL);

      if (response.status === 200) {
        setBooks(response.data);
        if (response.data.length == 0) {
          setPages(page - 1);
          openNotification("top");
          forceUpdate();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigateAddress = (content) => {
    navigate(`/detailbook/${content.id}`);
  };

  const BACK = () => {
    if (page > 1) {
      setPages(page - 1);
      forceUpdate();
    }
  };
  const NEXT = () => {
    console.log(book.length, "hxhxhxh ");
    if (book.length !== 0) {
      setPages(page + 1);
      forceUpdate();
    }
  };

  useEffect(() => {
    getBooks();
  }, [rendering]);

  return (
    <Row className="boxRow" gutter={[16, 24]}>
      <div class="drop drop1"></div>
      <div class="drop drop2"></div>

      {contextHolder}
      {book?.map((book) => (
        <div className="boxBook">
          <div className="divimg">
            <img className="imgBookHome" src={book.cover} />
          </div>

          <div className="descript">
            <div className="titleBox">
              <h2 key={book.index}>{book.title}</h2>
              <p key={book.index}>{book.desc.substring(0, 50)}...</p>
            </div>
            <button
              onClick={() => {
                navigateAddress(book);
              }}
              className="btn-submit btnlist"
              type="button"
            >
              See More
            </button>
          </div>
        </div>
      ))}

      <div className="pagination">
        <h3 className="pagess">{page}</h3>
        <button className="tombP" onClick={BACK}>
          PREV
        </button>
        <button className="tombP" onClick={NEXT}>
          NEXT
        </button>
      </div>
    </Row>
  );
};

export default ListBook;

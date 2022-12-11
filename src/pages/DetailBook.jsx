import axios from "axios";
import "../assets/css/App.css";
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function DetailBook() {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  const getBook = async () => {
    try {
      const response = await axios.get(`http://localhost:3004/books/${id}`);
      if (response.status === 200) {
        setBook(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <Row className="rowDetail">
      <div className="boxDetail">
        <div className="detailBookImg">
          <img className="imgBookDetail" src={book.cover} />
        </div>
        <div className="detailBookDesc">
          <h2>{book.title}</h2>
          <p>
            <b>Description</b>
          </p>
          <p>{book.desc}</p>
          <p>
            <b>Author</b> : {book.author}
          </p>
          <p>
            <b>Genre</b> : {book.genre}
          </p>
        </div>
      </div>
    </Row>
  );
}

export default DetailBook;

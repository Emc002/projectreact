import axios from "axios";
import React, { useState, useEffect, useReducer } from "react";
import { Col, Input, notification } from "antd";
import "../../assets/css/App.css";

const FormAdd = ({ action, type, name, dataSource }) => {
  const [realtime, setRealTime] = useState("");
  const [realtimegenre, setRealTimeGenre] = useState("");
  const [authors, setAuthors] = useState([]);
  const [genre, setGenre] = useState([]);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.open({
      className: "successNotif",
      description:
        name === "UPDATE" ? "UPDATE BOOK SUCCESS" : "ADDING BOOKS SUCCESS",
      placement,
      closable: false,
    });
  };
  const [notfound, setNotFound] = useState("Author Not Found");
  const getAuthors = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3004/author?label_like=${realtime}`
      );
      if (response.status === 200) {
        setAuthors(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getGenre = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3004/genre?genre_like=${realtimegenre}`
      );
      if (response.status === 200) {
        console.log("zehahaha", response.data);
        setGenre(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const search = (event) => {
    setRealTime(event.target.value);
  };

  const searchGenre = (event) => {
    setRealTimeGenre(event.target.value);
  };

  const selectionGenre = (event) => {
    setRealTimeGenre(event.target.value);
  };

  const selection = (event) => {
    setRealTime(event.target.value);
  };

  useEffect(() => {
    getAuthors();
    getGenre();
  }, [realtime, realtimegenre]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    openNotification("topLeft");
  };
  const [show, setShow] = useState(false);
  const change = () => {
    setShow(!show);
  };

  const [showgenre, setShowGenre] = useState(false);
  const changeGenre = () => {
    setShowGenre(!showgenre);
  };
  return (
    <div className="boxform">
      {contextHolder}
      <form
        className="form-container"
        onSubmit={(e, data) => {
          action(e, data);
          handleSubmit(e);
        }}
      >
        <Col className="formData">
          <label>TITLE</label>
          <input
            required={!dataSource ? true : false}
            className="inputdata"
            type="text"
            placeholder={!dataSource ? "title" : dataSource.placehold.title}
            name="title"
          />
          <label>AUTHOR</label>
          <div>
            <input
              required={!dataSource ? true : false}
              name="author"
              onChange={search}
              onClick={change}
              value={realtime}
              className="inputdata1"
              placeholder="Search Author"
            />
            {show === true ? (
              <div className="searchResult">
                {authors.length !== 0 ? (
                  authors.slice(0, 2).map((authors) => (
                    <option
                      className="pointO"
                      onClick={(e) => {
                        selection(e);
                        change(e);
                      }}
                      value={authors.value}
                    >
                      {authors.label} {authors.id}
                    </option>
                  ))
                ) : (
                  <option className="pointO">{notfound}</option>
                )}
              </div>
            ) : null}
          </div>
          <label>COVER</label>
          <input
            required={!dataSource ? true : false}
            className="inputdata"
            type="text"
            placeholder={!dataSource ? "cover" : dataSource.placehold.cover}
            name="cover"
          />
          <label>GENRE</label>
          <div>
            <input
              required={!dataSource ? true : false}
              name="author"
              onChange={searchGenre}
              onClick={changeGenre}
              value={realtimegenre}
              className="inputdata1"
              placeholder="Search Genre"
            />
            {showgenre === true ? (
              <div className="searchResult">
                {genre.length !== 0 ? (
                  genre.slice(0, 2).map((genre) => (
                    <option
                      className="pointO"
                      onClick={(e) => {
                        selectionGenre(e);
                        changeGenre(e);
                      }}
                      value={genre.genre}
                    >
                      {genre.genre}
                    </option>
                  ))
                ) : (
                  <option className="pointO">{notfound}</option>
                )}
              </div>
            ) : null}
          </div>
          <label>DESC</label>
          <textarea
            required={!dataSource ? true : false}
            className="areainput"
            type="text"
            placeholder={
              !dataSource
                ? "desc"
                : `${dataSource.placehold.desc.substring(0, 30)}...`
            }
            name="desc"
          />
          {authors.map((authors) => (
            <input name="authorId" value={authors.id} hidden />
          ))}

          <button className="btnadd" type="submit">
            {name}
          </button>
        </Col>
      </form>
    </div>
  );
};

export default FormAdd;

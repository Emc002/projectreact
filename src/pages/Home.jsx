import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import ListBook from "../component/listbook/ListBook";

const Home = () => {
  const navigate = useNavigate();
  const navigateAddress = (content) => {
    navigate("/deskripsi", {
      replace: true,
      state: { form: content },
    });
  };
  return <ListBook />;
};

export default Home;

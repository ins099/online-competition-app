import React from "react";
import { Button, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import "../Container/style.css";
import { Link } from "react-router-dom";

const TaskItem = (props) => {
  const { title } = props;
  return (
    <div style={style}>
      <h3>{title}</h3>
      <p>
        Today we’ll show you how to create login form in ReactJS using secure
        REST API with example. It’s the last part of the login application where
        we will create the login form in ReactJS and integrate the Node.js
        secure REST API
      </p>
      <div style={{display:'flex',justifyContent:'space-around',marginLeft:'auto' ,width:'30%',alignItems:'center' }} >
        <Link to="/article">
          <Button variant="secondary">Read More</Button>
        </Link>
        <Link to="/form">
          <Button variant="success">Submit Entry</Button>
        </Link>
      </div>
    </div>
  );
};

const style = {
  backgroundColor: "rgba(200,200,200,0.2)",
  padding: 15,
  borderRadius: 10,
  width: "80%",
  margin: 10,
};

export default TaskItem;

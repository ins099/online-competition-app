import React from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import NavbarComponent from "../Components/NavbarComponent";
const Article = (props) => {
  const id = window.location.href?.split("id=")[1] || "";
  console.log(id);
  const { TaskReducer } = useSelector((store) => {
    return {
      TaskReducer: store.TaskReducer,
    };
  });
  const navigate = useNavigate()
  console.log("TaskReducer", TaskReducer);
  const element = TaskReducer.find((item) => item._id === id);
  useEffect(()=>{
    if(!element.name){
      navigate("./dashboard")
    }
  },[TaskReducer])
  
  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <div className="article-container">
          <h3>{element?.name}</h3>
          <div className="text-container">
            <h5>Description</h5>
            <p>{element?.description}</p>
          </div>
          <div className="button-grp">
            <Link to={`/form?id=${id}`}>
              <Button variant="success">Submit Entry</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;

import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarComponent from "../Components/NavbarComponent";
const Article = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <div className="article-container">
          <h3>Competition 1</h3>
          <div className="text-container">
            <h5>
              Competition 1 Complete details which is provided by the user
            </h5>
            <p>
              Provide contextual feedback messages for typical user actions with
              the handful of available and flexible alert messages. Provide
              contextual feedback messages for typical user actions with the
              handful of available and flexible alert messages. Provide
              contextual feedback messages for typical user actions with the
              handful of available and flexible alert messages. Provide
              contextual feedback messages for typical user actions with the
              handful of available and flexible alert messages. Provide
              contextual feedback messages for typical user actions with the
              handful of available and flexible alert messages. Provide
              contextual feedback messages for typical user actions with the
              handful of available and flexible alert messages.
            </p>
          </div>
          <div className="button-grp">
            <Link to="/form">
              <Button variant="success">Submit Entry</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;

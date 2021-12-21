import React from "react";
import NavbarComponent from "../Components/NavbarComponent";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SubmitForm = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <br />
        <br />
        <br />
        <div className="submit-form">
          <h4>Submit Form</h4>

          <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Title" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Upload Zip File</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Link to="/dashboard">
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;

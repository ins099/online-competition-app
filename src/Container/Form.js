import React, { useState } from "react";
import NavbarComponent from "../Components/NavbarComponent";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Alert } from "bootstrap";
import { useDispatch } from "react-redux";
import { ActionWithPayload } from "../Redux/actions";
import { SUBMIT_ENTRY } from "../Redux/actionTypes";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const SubmitForm = () => {
  // const onSubmitHandler = (event) => {
  //   event.preventDefault();
  // };

  const {UserProfileReducer} = useSelector(store=>{
    return{
      UserProfileReducer:store.UserProfileReducer
    }
  })
  const navigate = useNavigate();
  const id = window.location.href?.split("id=")[1] || "";
  const [state, setState] = useState({
    user_id: UserProfileReducer._id,
    competition_id: id,
    name: "",
    description: "",
    file: {},
    navigate:navigate
  });
  
  const handleChange = (key, value) => setState({ ...state, [key]: value })
  const dispatch =  useDispatch()
const handleSubmit = ()=>{
  if(!state.name){
    alert("Title is required")
    return false 
  }
  if(!state.description){
    alert("Description is required")
    return false
  }
  if(!Object.keys(state.file)){
    alert("File is required")
    return false
  }
  dispatch(ActionWithPayload(SUBMIT_ENTRY,state))
}

  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <br />
        <br />
        <br />
        <div className="submit-form">
          <h4>Submit Form</h4>

          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                name="Name"
                value={state.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} 
              
              name="description"
              value={state.description}
              onChange={(e) => handleChange("description", e.target.value)}
              
              />
            </Form.Group>

            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Upload Zip File</Form.Label>
              <Form.Control  type="file" 
              accept=".zip,.rar,.7zip"
                onChange={(e) => handleChange("file",  e.target.files[0])}/>
            </Form.Group>
            <div className="d-grid gap-2">
                <Button onClick={handleSubmit} variant="primary">
                  Submit
                </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;

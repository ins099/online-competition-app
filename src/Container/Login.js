import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActionWithPayload } from "../Redux/actions";
import { SIGN_IN } from "../Redux/actionTypes";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [state, setState] = useState({ username: "", password: "" });
  const { UserProfileReducer } = useSelector((store) => {
    return {
      UserProfileReducer: store.UserProfileReducer,
    };
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (UserProfileReducer.token) {
      navigate("/dashboard");
    }
  }, [UserProfileReducer]);
  function validateForm() {
    return state.username.length > 0 && state.password.length > 0;
  }

  const handleChange = (key, value) => setState({ ...state, [key]: value });
  const dispatch = useDispatch();
  function handleSubmit(event) {
    dispatch(ActionWithPayload(SIGN_IN, state));
    // event.preventDefault();
  }

  return (
    <div className="Login">
      <h3 style={{ textAlign: "center" }}>Welcome!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          size="lg"
          controlId="email"
        >
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={state.username}
            onChange={(e) => handleChange("username", e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={state.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </Form.Group>
        <div
          className="d-grid gap-2"
          style={{ textAlign: "center", padding: 5 }}
        >
          {/* <Link to="/dashboard"> */}
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={!validateForm()}
          >
            Submit
          </Button>
          {/* </Link> */}
        </div>
      </Form>
      <Link
        to={"/register"}
        style={{
          display: "flex",
          flexDirection: "row",
          alignSelf: "center",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 style={{fontSize:16}}>Click To Create an account</h3>
      </Link>
    </div>
  );
}

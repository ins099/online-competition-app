import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ActionWithPayload } from "../Redux/actions";
import { SIGN_UP } from "../Redux/actionTypes";
import { useNavigate } from "react-router-dom";

export default function Register() {
const navigate = useNavigate()
    const [state, setState] = useState({
        username: "",
        password: "",
        confirm_password: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        navigate:navigate
    })
    const handleChange = (key, value) => setState({ ...state, [key]: value })
    function validateForm() {
        // return state.username.length > 0 && password.length > 0;
        return true
    }
const dispatch = useDispatch()
const onSubmit = ()=>{
    let flag = false
    Object.keys(state).map(e=>{
        if(!state[e] && !flag){
            alert(`${e} is required`)
            flag = true
            return false
        }
    })
    if(state.password!==state.confirm_password){
        flag = true
        alert("Password doesnt match")
    }
    if(!flag){
        dispatch(ActionWithPayload(SIGN_UP,state))
    }

}

    return (
        <div className="Login">
            <h3 style={{ textAlign: "center" }}>Create an Account</h3>
            <Form>
                <Form.Group
                    className="mb-3"
                    size="lg"
                >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={state.first_name}
                        onChange={(e) => handleChange("first_name", e.target.value)}
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    size="lg"
                >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={state.last_name}
                        onChange={(e) => handleChange("last_name", e.target.value)}
                    />
                </Form.Group>



                <Form.Group
                    className="mb-3"
                    size="lg"
                >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={state.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    size="lg"
                >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={state.phone_number}
                        onChange={(e) => handleChange("phone_number", e.target.value)}
                    />
                </Form.Group>



                <Form.Group
                    className="mb-3"
                    size="lg"
                >
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={state.username}
                        onChange={(e) => handleChange("username", e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={state.password}
                        onChange={(e) => handleChange("password", e.target.value)}

                    />
                </Form.Group>
                <Form.Group size="lg" >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={state.confirm_password}
                        onChange={(e) => handleChange("confirm_password", e.target.value)}

                    />
                </Form.Group>
                <div
                    className="d-grid gap-2"
                    style={{ textAlign: "center", padding: 5 }}
                >
                        <Button variant="primary" onClick={onSubmit}>
                            Submit
                        </Button>
                </div>
            </Form>
            <Link
        to={"/"}
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 style={{fontSize:16}}>Already have an account?</h3>
        <h3 style={{fontSize:16}}>Login</h3>
      </Link>
        </div>
    );
}

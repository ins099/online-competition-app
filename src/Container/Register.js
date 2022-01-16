import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Register() {

    const [state, setState] = useState({
        username: "",
        password: "",
        confirm_password: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
    })
    const handleChange = (key, value) => setState({ ...state, [key]: value })
    function validateForm() {
        // return state.username.length > 0 && password.length > 0;
        return true
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <h3 style={{ textAlign: "center" }}>Welcome!</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
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
                    controlId="formBasicEmail"
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
                    controlId="formBasicEmail"
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
                    controlId="formBasicEmail"
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
                <Form.Group size="lg" controlId="password">
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
                    <Link to="/dashboard">
                        <Button variant="primary" type="submit" disabled={!validateForm()}>
                            Submit
                        </Button>
                    </Link>
                </div>
            </Form>
        </div>
    );
}

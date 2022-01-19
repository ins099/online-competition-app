import React, { useEffect } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { ActionWithoutPayload } from '../Redux/actions'
import { SIGN_OUT, SIGN_OUT_SUCCESS } from '../Redux/actionTypes'

const NavbarComponent = () => {


    const {
        UserProfileReducer,
        TaskReducer
    } = useSelector(store=>{
    return{
        UserProfileReducer:store.UserProfileReducer,
        TaskReducer:store.TaskReducer
    }
    })
    
    const navigate = useNavigate();
    useEffect(()=>{
        if(!UserProfileReducer.token){
            navigate("/")
        }
    },[UserProfileReducer])
 const    dispatch = useDispatch()
 const onLogout = props =>{
     dispatch(ActionWithoutPayload(SIGN_OUT_SUCCESS))
   
 }
    return (
        <Navbar bg="dark" variant="dark" expand = 'lg' >
        <Container>
        <Navbar.Brand href="#home">Online Competition</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="justify-content-end">
                <NavDropdown title={`${UserProfileReducer.first_name} ${UserProfileReducer.last_name}`} id="basic-nav-dropdown">
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={onLogout}>Log Out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavbarComponent

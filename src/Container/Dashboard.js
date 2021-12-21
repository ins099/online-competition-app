import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import NavbarComponent from '../Components/NavbarComponent'
import TaskItem from '../Components/TaskItem'
import './style.css'

const Dashboard = () => {

    const CompetitionList = [
        {
            id:1,
            title:'Competition 1'
        },
        {
            id:2,
            title:'Competition 2'
        },
        {
            id:3,
            title:'Competition 3'
        },
        {
            id:4,
            title:'Competition 4'
        },
        {
            id:5,
            title:'Competition 5'
        },
    ]


    return (
        <div>
            <NavbarComponent />
            <div>
                <div>
                    <div style = {{margin:'auto'}} className="center-desktop">
                        <h3 className="padding-20"> Active Competition/Task</h3>
                        {
                            CompetitionList.map((item)=>(
                                // <div style = {{margin:'auto'}} key = {item.id}>
                                    <TaskItem title = {item.title} />
                                // {/* </div> */}
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Dashboard

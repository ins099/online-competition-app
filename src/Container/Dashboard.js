import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import NavbarComponent from '../Components/NavbarComponent'
import TaskItem from '../Components/TaskItem'

const Dashboard = () => {

    const CompetitionList = [
        {
            id:1,
            title:'Comp 1'
        },
        {
            id:2,
            title:'Comp 2'
        },
        {
            id:3,
            title:'Comp 3'
        },
        {
            id:4,
            title:'Comp 4'
        },
        {
            id:5,
            title:'Comp 5'
        },
    ]


    return (
        <div>
            <NavbarComponent />
            <div>
                <div>
                    <div style = {{margin:'auto'}}>
                        <h3> Today's Pick</h3>
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

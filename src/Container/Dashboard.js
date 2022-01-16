import React from 'react'
import { useEffect } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
// useEffect(()=>{
//     if(!UserProfileReducer.token){
//         navigate("/")
//     }
// },[UserProfileReducer])

    return (
        <div>
            <NavbarComponent />
            <div>
                <div>
                    <div style = {{margin:'auto'}} className="center-desktop">
                        <h3 className="padding-20"> Active Competition/Task</h3>
                        {
                            TaskReducer.reverse()?.map((item)=>(
                                // <div style = {{margin:'auto'}} key = {item.id}>
                                    <TaskItem title = {item.name}description={item.description} id={item._id}/>
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

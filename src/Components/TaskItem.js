import React from 'react'
import { Button, Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

const TaskItem = (props) => {
    const {title} = props;
    return (
        <div style={style}>
            <h3>{title}</h3>
            <p>Today we’ll show you how to create login form in ReactJS using secure REST API with example. It’s the last part of the login application where we will create the login form in ReactJS and integrate the Node.js secure REST API. </p>        
            <div style = {{ textAlign:'right'}}>
                <Button variant="secondary">Read More</Button>{' '}
                <Button variant="success">Submit Entry</Button>{' '}
            </div>
        </div>
    )
}



const style = {
    backgroundColor:'beige',
    padding:15,
    borderRadius:10,
    width:"30%",
    margin:10
}

export default TaskItem

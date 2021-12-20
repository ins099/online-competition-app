import React from 'react'
import { Button } from 'react-bootstrap'
import NavbarComponent from '../Components/NavbarComponent'
const Article = () => {
    return (
        <div>
            <NavbarComponent/>
            <div className='container'>
                <div className='article-container'>
                    <h3>Article</h3>
                    <div className='text-container'>
                        <p>
                        Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
                        Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
                        Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
                        Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
                        Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
                        Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
                        </p>
                    </div>
                    <div className='button-grp'> 
                        <Button variant="success">Submit Entry</Button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Article
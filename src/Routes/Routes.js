import React from 'react'
import { Route, Routes,Switch } from 'react-router-dom'
import SubmitForm from '../Container/Form';
import Article from '../Container/Article';
import Dashboard from '../Container/Dashboard';
import Login from '../Container/Login';
import Register from '../Container/Register';

const AppRoutes = () => {
    return (
    <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="article" element={<Article />} />
        <Route path="form" element={<SubmitForm />} />
    
    </Routes>
    )
}

export default AppRoutes

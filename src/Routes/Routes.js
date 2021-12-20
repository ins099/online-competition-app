import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SubmitForm from '../Container/Form';
import Article from '../Container/Article';
import Dashboard from '../Container/Dashboard';
import Login from '../Container/Login';

const AppRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="article" element={<Article />} />
        <Route path="form" element={<SubmitForm />} />
    </Routes>
    )
}

export default AppRoutes

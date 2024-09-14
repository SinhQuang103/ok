import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Category from './components/Category';
import DetailInfo from './components/DetailInfo';
import ExamplePage from './components/ExamplePage';
import Filter from './components/Filter';
import Login from './components/Login';
import AdminPage from './components/AdminPage';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Category />} />
                <Route path="/example" element={<ExamplePage />} />
                <Route path="/detail" element={<DetailInfo />} />
                <Route path="/filter" element={<Filter />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </Router>
    );
};

export default App;

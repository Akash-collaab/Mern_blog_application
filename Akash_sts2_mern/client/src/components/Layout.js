import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => (
    <>
        <Navbar />
        <div className="container mt-3 mb-3">
            <Outlet />
        </div>
        <Footer />
    </>
);

export default Layout;

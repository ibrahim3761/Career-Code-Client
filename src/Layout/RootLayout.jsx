import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Pages/Shared/NavBAr';
import Footer from '../Pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <NavBar></NavBar>
            <main className='flex-grow px-10 py-6'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;
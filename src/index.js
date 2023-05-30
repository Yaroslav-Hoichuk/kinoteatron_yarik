import ReactDOM from 'react-dom/client';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './pages/Layout';
import Login from './pages/Log_in';
import Home from "./pages/Home"
import AllMovies from './pages/AllMovies';
import Registration from './pages/Registration';
import OrderTickets from './pages/OrderTickets';
import ContactUs from './pages/ContactUs';

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='registartion' element={<Registration />} />
                    <Route path='all_movies' element={<AllMovies />}></Route>
                    <Route path='order_tickets' element={<OrderTickets />}/>
                    <Route path='contact_us' element={<ContactUs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
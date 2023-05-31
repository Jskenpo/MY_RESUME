import React from 'react';
import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './about/about.js';
import Contact from './contact/contact.js';
import Home from './home/home.js';

import Nav from './navbar/navbar.js';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Nav />}>
                            <Route index element={<Home />} />
                            <Route path='about' element={<About />} />
                            <Route path='contact' element={<Contact />} />
                            <Route path='*' element={<Navigate replace to="/" />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
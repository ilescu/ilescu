import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Portfolio from "../../pages/Portfolio";
import Resume from "../../pages/Resume";
import Contacts from "../../pages/Contacts";

const RoutesList = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contacts" element={<Contacts />} />
        </Routes>
    );
};

export default RoutesList;
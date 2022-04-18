import React from 'react';
import {Link} from "react-router-dom";
import {Nav,Navbar} from "react-bootstrap";
import style from './Navigation.module.scss';
import ButtonDefault from "@/components/ui/buttons/ButtonDefault";
import logo from '../../images/ilescu.png'

const Navigation: React.FC = () => {

    const menuLinks = [
        { id: 1, title: 'Home', url: '/'},
        { id: 2, title: 'About', url: '/about'},
        { id: 3, title: 'Portfolio', url: '/portfolio'},
        { id: 4, title: 'Resume', url: '/resume'},
        { id: 5, title: 'Contacts', url: '/contacts'},
    ]

    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="/">
                <img src={logo} alt="Ilescu logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className={style.customResponsive} id="navbarScroll">
                <Nav className="my-2 my-lg-0">
                    {
                        menuLinks.map((label, index) =>
                            <Link
                                key={index}
                                className="nav-link ms-3 me-3"
                                to={label.url}
                            >{label.title}</Link>
                        )
                    }

                </Nav>
            </Navbar.Collapse>
            <ButtonDefault title="CONTACT NOW"/>
        </Navbar>
    );
};

export default Navigation;
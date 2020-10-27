import React from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    backround-color: #222;
}

.navbar-brand, .navbar-nav .nav-link {
    color: #242424;
    &:hover {
        color: white;
    }
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
           <Navbar.Brand href="/">Mountbirch</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ml-auto">
                   <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/table">Table</Nav.Link></Nav.Item>
               </Nav>
           </Navbar.Collapse>
        </Navbar> 
    </Styles>
)
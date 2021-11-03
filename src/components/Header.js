import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './App.css';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="p-3">
        <NavLink to="/" className="h2 text-decoration-none text-light">Book Store</NavLink>
        <Nav className="ms-auto">
          <NavLink to="/" className="h5 me-4 link" activeClassName="link-active">Books</NavLink>
          <NavLink to="categories" className="h5 me-4 link" activeClassName="link-active">Categories</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

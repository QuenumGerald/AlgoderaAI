'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Impact', href: '#impact' },
  { name: 'Roadmap', href: '#roadmap' },
];

export default function Header() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} href="/">AssetHive</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navigation.map((item) => (
              <Nav.Link as={Link} key={item.name} href={item.href}>{item.name}</Nav.Link>
            ))}
          </Nav>
          <Link href="#contact" className="btn btn-primary">Get Started</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
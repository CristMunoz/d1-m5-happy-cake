import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
        <Navbar className='bg-danger text-white'>
            <Container className='justify-content-arround'>
                <Link to='/' className='text-white ms-3 p-2 text-decoration-none justify-content-start'>
                    Home
                </Link>
                <Link to='/contacto' className='text-white ms-3 p-2 text-decoration-none justify-content-start'>
                    Contacto
                </Link>
                <Navbar.Brand className='text-white ms-auto'>🍰Happy Cake</Navbar.Brand>
            </Container>
        </Navbar>
    </>
  )
}

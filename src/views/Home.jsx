import React from 'react'
import { Container } from 'react-bootstrap';
import '../App.css';

export default function Home() {
  return (
    <>
        <Container className='mt-5'>
            <h1>Bienvenido a <strong>Happy Cake</strong></h1>
            <p>El lugar de los pasteles felices</p>
            <p className="emoji-text">🎂</p>    
        </Container>
        
    </>
  )
}

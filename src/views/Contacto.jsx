import React from 'react'
import { Button, Container } from 'react-bootstrap';

export default function Contacto() {
  return (
    <>
      <h2 className="text-align-center mt-5">Cuentanos, ¿en que te podemos ayudar?</h2>
      <Container>
        <form className="form-control-lg mx-5">
            <div className="m-3 px-5">
                <label forHtml="exampleFormControlInput1" className="form-label">Correo:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mx-3 px-5">
                <label forHtml="exampleFormControlTextarea1" className="form-label">Descripción:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <Button className='btn btn-danger mt-3' type='submit'>Enviar</Button>
        </form>
      </Container>  
    </>
  )
}

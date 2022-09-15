import React from 'react'
import JerryMeme from '../img/jerry-llorando-meme.png'

export default function NotFound() {
  return (
    <>
        <h2 className="text-align-center fs-1 mt-5"><strong>Error 404</strong></h2>
        <h3 className="fs-4">Page not found</h3>
        <p>El sitio que estas buscando no existe, leru leru 😜</p>
        <img src={JerryMeme} alt="meme" style={{width:"400px"}}/>
    </>
  )
}

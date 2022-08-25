import React, { useContext } from 'react'
import '../hojas-de-estilo/Paginas.css'
import { Contexto } from './contexto/Contexto.jsx'

function Pagina1() {
  const {color} = useContext(Contexto)
  return (
    <div className='hijo' style={{background:color}}>
      Pagina1
      <h1>{color}</h1>
    </div>
  )
}

export default Pagina1
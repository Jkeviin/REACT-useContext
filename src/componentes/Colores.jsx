import React, {useContext} from 'react'
import '../hojas-de-estilo/Colores.css'
import {Contexto} from "./contexto/Contexto.jsx"

function Colores() {
  const {setColor} = useContext(Contexto)
  return (
    <div className='colores'>
      <div className='color' onClick={()=>{
        setColor("#4285f4")}}></div>
      <div className='color' onClick={()=>{
        setColor("#ea4335")}}></div>
      <div className='color' onClick={()=>{
        setColor("#fbbc05")}}></div>
      <div className='color' onClick={()=>{
        setColor("#34a853")}}></div>
    </div>
  )
}

export default Colores
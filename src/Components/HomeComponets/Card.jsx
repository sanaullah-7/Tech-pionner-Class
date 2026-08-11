import React from 'react'
import img from "../../assets/image.png"
export default function Card() {
  return (
    <div className='bg-amber-300 p-2 w-60 rounded-2xl font-bold m-5 items-center flex flex-col'>
      <img className='h-50 w-50 ' src={img} alt="erro" />
      <div>
        <h1>Name: Jawad</h1>
        <h1>Job: Web</h1>
        <h1>age: 19</h1>
      </div>
    </div>
  )
}

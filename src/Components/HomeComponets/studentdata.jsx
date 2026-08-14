import React from 'react'


export default function studentdata({img,RollNo,name,age,address}) {
  return (
    <div className=' '>
      
      <div className='bg-blue-400 p-10 rounded-2xl font-bold text-2xl'>
      <img src={img} alt="" />
      <h1>{RollNo}</h1>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{address}</h1>
      </div>
    </div>
  )
}

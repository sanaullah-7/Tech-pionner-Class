import React from 'react'

export default function Student(props) {
  return (
    <div>
       <div>

            <h2>{props.name}</h2>

            <p>Age: {props.age}</p>

            <p>City: {props.city}</p>

        </div>
    </div>
  )
}

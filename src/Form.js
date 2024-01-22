import React from 'react'
import {name,email} from "./HomePage";

export default function Form() {
  return (
    <>
     <h3>Login Form</h3>
     <input type="text" placeholder='Name' value={name}/>
     <input type="email" placeholder='Email' value={email}/>
     <input type="button" value="Submit" />
    </>
  )
}

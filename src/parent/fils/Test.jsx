import React from 'react'
import { useSelector } from 'react-redux'

export default function Test() {

    const state = useSelector((state)=>state.user.value)

  return (
    <div>
        <h1>ici on est dans le test component </h1>
        {state.email}
    </div>
  )
}

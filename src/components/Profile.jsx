import React from 'react'
import { useSelector } from 'react-redux'
import { Oval, RotatingLines } from 'react-loader-spinner'

export default function Profile() {
  const state = useSelector((state)=>state.user.value)
  if (!state) {
    return    <RotatingLines
      visible={true}
      height="96"
      width="96"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />
    
    
  }
  return (
    <div>
        <p>email:{state.email}</p>
        <p>nom:{state.nom} </p>
        <p>prenom:{state.prenom}</p>
        <p>adress:{state.adress}</p>

    </div>
  )
}

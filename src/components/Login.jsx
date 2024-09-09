import React from 'react'
import { useDispatch } from "react-redux";
import { login,logout } from '../features/user';


export default function Login() {

  const dispatch =useDispatch();
  return (
    <div>
        <button 
        onClick={()=>
          dispatch(login({
          email: "test@email.fr",
           nom: "test",
            prenom: "test",
             adress: "testt"
        }))
      }
        
        >
            se connecter
            
        </button>

      <button
      onClick={()=>{
        dispatch(logout())
      }}
      
      >
      se deconnecter
      </button>

    </div>
  )
}

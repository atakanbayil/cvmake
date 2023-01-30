import React from 'react'

export default function ProfileImage(props:any) {
    
  return (<img style={{width:"30vh"}}
        src={props.n.foto} 
        alt="Avatar"
        />
      
  )
}

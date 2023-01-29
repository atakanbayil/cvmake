import React, { useState } from 'react'

export default function Nitelikler(props:any) {

    return (
      <div>
        <label htmlFor="Ad">Nitelikler</label>
        <input type="text" onChange={e => { props.setNitelik(e.target.value) }}></input>
        
      </div>
    )
}

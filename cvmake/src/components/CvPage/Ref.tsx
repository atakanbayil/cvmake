import React, { useState } from 'react'

export default function Ref(props:any) {

    return (
      <div>
        <label htmlFor="Ad">Referanslar</label>
        <input type="text" onChange={e => { props.setRef(e.target.value) }}></input>
        
      </div>
    )
}

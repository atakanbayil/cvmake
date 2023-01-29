import React, { useState } from 'react'

export default function İlgi(props:any) {

    return (
      <div>
        <label htmlFor="Ad">İlgi Alanları</label>
        <input type="text" onChange={e => { props.setİlgi(e.target.value) }}></input>
        
      </div>
    )
}

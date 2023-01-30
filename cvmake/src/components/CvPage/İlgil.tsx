import { Input } from 'antd'
import React, { useState } from 'react'

export default function İlgi(props:any) {

    return (
      <div>
        <label htmlFor="Ad">İlgi Alanları</label>
        <Input value={props.n.ilgi} type="text" onChange={e => { props.setİlgi(e.target.value) }}></Input>
        
      </div>
    )
}

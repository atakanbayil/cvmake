import { Input } from 'antd'
import React, { useState } from 'react'

export default function Nitelikler(props:any) {

    return (
      <div>
        <label htmlFor="Ad">Nitelikler</label>
        <Input value={props.n.nitelik} type="text" onChange={e => { props.setNitelik(e.target.value) }}></Input>
        
      </div>
    )
}

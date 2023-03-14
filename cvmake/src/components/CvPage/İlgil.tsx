import { Input } from 'antd'
import React, { useEffect, useState } from 'react'

export default function İlgi(props:any) {
  
  useEffect(()=>{
    props.setActiveStep(4)

  },[props.activeStep])
  
    return (
      <div>
        <label htmlFor="Ad">İlgi Alanları</label>
        <Input value={props.n.ilgi} type="text" onChange={e => { props.setİlgi(e.target.value) }}></Input>
        
      </div>
    )
}

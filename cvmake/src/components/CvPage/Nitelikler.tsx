import { Input } from 'antd'
import React, { useEffect, useState } from 'react'

export default function Nitelikler(props: any) {

  useEffect(() => {
    props.setActiveStep(3)

  }, [props.activeStep])

  return (
    <div>
      <label htmlFor="Ad">Nitelikler</label>
      <Input value={props.n.nitelik} type="text" onChange={e => { props.setNitelik(e.target.value) }}></Input>

    </div>
  )
}

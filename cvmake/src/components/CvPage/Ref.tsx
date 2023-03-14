import { Input } from 'antd'
import { useEffect } from 'react'

export default function Ref(props:any) {

  useEffect(()=>{
    props.setActiveStep(5)
    
  },[props.activeStep])
  
    return (
      <div>
        <label htmlFor="Ad">Referanslar</label>
        <Input value={props.n.ref} type="text" onChange={e => { props.setRef(e.target.value) }}></Input>
        
      </div>
    )
}

import { Input } from 'antd'

export default function Ref(props:any) {

    return (
      <div>
        <label htmlFor="Ad">Referanslar</label>
        <Input value={props.n.ref} type="text" onChange={e => { props.setRef(e.target.value) }}></Input>
        
      </div>
    )
}

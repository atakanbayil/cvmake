import { Button, Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'

export default function Çalışma(props: any) {
  
  

  return (<div>
    <Form >
      <Form.Item>Ünvan
        <Input value= {props?.n?.iş.ünvan} name='ünvan' onChange={props.handleİş}></Input>
      </Form.Item>
      <Form.Item>Kurum
        <Input value= {props?.n?.iş.kurum} name="kurum" onChange={props.handleİş}></Input>
      </Form.Item>
      <Form.Item>Başlangıç
        <Input value= {props?.n?.iş.baş} type="date" name='baş' onChange={props.handleİş}></Input>
      </Form.Item>
      <Form.Item>Bitiş
        <Input value= {props?.n?.iş.bitiş} type="date" name='bitiş' onChange={props.handleİş}></Input>
      </Form.Item>
      <Form.Item>Yaptığınız işi açıklayınız...
        <Input value= {props?.n?.iş.ünvan} type="text" name='desc' onChange={props.handleİş}></Input>
      </Form.Item>

      <Form.Item>
        <Button onClick={props.handleSubmitI}>Kaydet</Button>
      </Form.Item>
    </Form>

  </div>)
}

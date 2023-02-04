import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'

export default function Egitim(props: any) {


  return (
    <div>
      <Form >
        <Form.Item>Okul
          <Input value={props.n.eğitim.okul} name='okul' onChange={props.handleEğitim}></Input>
        </Form.Item>
        <Form.Item>Bölüm
          <Input value={props.n.eğitim.bölüm} name="bölüm" onChange={props.handleEğitim}></Input>
        </Form.Item>
        <Form.Item>Başlangıç
          <Input value={props.n.eğitim.baş} type="date" name='baş' onChange={props.handleEğitim}></Input>
        </Form.Item>
        <Form.Item>Bitiş
          <Input value={props.n.eğitim.bitiş} type="date" name='bitiş' onChange={props.handleEğitim}></Input>
        </Form.Item>
        <Form.Item>
          <Button onClick={props.handleSubmitE}>Ekle</Button>
        </Form.Item>
      </Form>

    </div>
  )
}

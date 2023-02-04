import { Button, Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'

export default function CvPage(props: any) {

  //console.log("as")


  return (
    <div>
      <Form>
        <Form.Item htmlFor="Ad">Ad
          <Input value={props.n.temel.name} type="text" name='name' onChange={props.handleTemel}></Input>
        </Form.Item>
        <Form.Item htmlFor="Soyad">Soyad
          <Input value={props.n.temel.surname} type="text" name="surname" onChange={props.handleTemel}></Input>
        </Form.Item>
        <Form.Item htmlFor="Telefon">Telefon

          <Input value={props.n.temel.tel} type="text" name='tel' onChange={props.handleTemel}></Input>
        </Form.Item>
        <Form.Item htmlFor="Mail">Mail
          <Input value={props.n.temel.mail} type="text" name='mail' onChange={props.handleTemel}></Input>
        </Form.Item>
        <Form.Item htmlFor="Adres">Adres
          <Input value={props.n.temel.adres} type="text" name="adres" onChange={props.handleTemel}></Input>
        </Form.Item>

        <Form.Item htmlFor='foto'>Foto
          <Input type="file" onChange={(e:any) => {
            props.handleFoto(e)
            props.handleFile(e)
          }} />
          <Button onClick={(e:any)=>props.handleApi(e)}>Ekle</Button>
        </Form.Item>
      </Form>

    </div>
  )
}

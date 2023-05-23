import { Button, Form, Input, Upload } from 'antd'
import React, { useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';

import { AlertFillIcon } from '@primer/octicons-react'
import { notification } from 'antd';
export default function CvPage(props: any) {

  //console.log("as")


  useEffect(() => {
    props.setActiveStep(0)

  }, [props.activeStep])
  return (
    <>
      {props.contextHolder}
      <div>
        <Form style={{ marginTop: 40, padding: 10, backgroundColor: "white", flexDirection: "column", display: "flex", justifyContent: "space-between" }} layout={"inline"}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            
              <div style={{display:"flex",flexDirection:"column",marginRight:"20%",width:"25%"}}><div style={{marginLeft:"10%"}}>FOTO</div>
                <Form.Item rules={[{ required: true }]} style={{ margin: 10, }} htmlFor='foto'>
                  {!props.n.foto && <img style={{ width: "100%" }} src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'></img>}
                  {props.n.foto && <img style={{ width: "152px",height:"152px" }} src={props.n.foto}></img>}
                  
                  <input type="file" onChange={props.handleFoto} />

                  
                </Form.Item>

              </div>
            
            <div style={{ width: '100%', display: "flex", flexDirection: "column" }}>
              <Form.Item rules={[{ required: true }]} style={{ margin: 10 }} htmlFor="Ad">Ad
                <Input style={{ padding: 10 }} value={props.n.temel.name} type="text" name='name' onChange={props.handleTemel}></Input>
              </Form.Item>
              <Form.Item rules={[{ required: true }]} style={{ margin: 10 }} htmlFor="Soyad">Soyad
                <Input style={{ padding: 10 }} value={props.n.temel.surname} type="text" name="surname" onChange={props.handleTemel}></Input>
              </Form.Item>
            </div>

          </div>
          <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <div style={{ width: "100%" }}>

              <Form.Item rules={[{ required: true }]} style={{ margin: 10 }} htmlFor="Telefon">Telefon

                <Input style={{ padding: 10 }} value={props.n.temel.tel} type="text" name='tel' onChange={props.handleTemel}></Input>
              </Form.Item>
            </div>
            <div style={{ width: "100%" }}>
              <Form.Item rules={[{ required: true }]} style={{ margin: 10 }} htmlFor="Mail">Mail
                <Input style={{ padding: 10 }} value={props.n.temel.mail} type="text" name='mail' onChange={props.handleTemel}></Input>
              </Form.Item>

            </div>
          </div>
          <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <div style={{ width: "100%" }}>
              <Form.Item rules={[{ required: true }]} style={{ margin: 10 }} htmlFor="Şehir">Şehir
                <Input style={{ padding: 10 }} value={props.n.temel.il} type="text" name="il" onChange={props.handleTemel}></Input>
              </Form.Item>

            </div>
            <div style={{ width: "100%" }}>
              <Form.Item rules={[{ required: true }]} style={{ margin: 10 }} htmlFor="ilçe">İlçe
                <Input style={{ padding: 10 }} value={props.n.temel.ilçe} type="text" name="ilçe" onChange={props.handleTemel}></Input>
              </Form.Item>

            </div>

          </div>
        </Form>

      </div>
    </>

  )
}

/*<Form.Item rules={[{ required: true }]} style={{ margin: 10,  }} htmlFor='foto'>Foto
                <Upload  maxCount={1} onChange={props.handleFoto}  listType="picture-card">
                  <div >
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item> */
import { Button, Form, Input, Upload } from 'antd'
import React, { useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';

export default function CvPage(props: any) {

  //console.log("as")

  useEffect(() => {
    props.setActiveStep(0)

  }, [props.activeStep])
  return (
    <>
      {props.contextHolder}
      <div>
        <Form style={{ padding: 10, backgroundColor: "white", flexDirection: "column", display: "flex", justifyContent: "space-between" }} layout={"inline"}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div >
              <Form.Item rules={[{ required: true }]} style={{ margin: 10, height: "120px" }} htmlFor='foto'>Foto
                <Upload style={{ height: "120px" }} maxCount={1} onChange={(e: any) => props.handleFoto(e)} action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card">
                  <div >
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
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

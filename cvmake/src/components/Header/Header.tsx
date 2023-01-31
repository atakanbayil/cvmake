import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Headers(props: any) {
  return (
    <div style={{ height: "13vh", backgroundColor: "#001529", color: "white", }}>
      <div style={{ textAlign: "center" }}>HEADER</div>
      <Button style={{position:"fixed",right:"8vh"}}>Download</Button>
    </div>
  )
}

import React, { useEffect, useState } from 'react'

export default function CvPage(props:any) {
  
  

  return (
    <div>
      <label htmlFor="Ad">Tam Adınız</label> 
      <input type="text" onChange={e => { props.setName(e.target.value) }}></input>
      <label htmlFor="Soyad">Soyad</label>
      <input type="text" onChange={e => { props.setSurname(e.target.value) }}></input>
      <label htmlFor="Telefon">Telefon</label>
      <input type="text" onChange={e => { props.setTel(e.target.value) }}></input>
      <label htmlFor="Mail">Mail</label>
      <input type="text" onChange={e => { props.setMail(e.target.value) }}></input>
    </div>
  )
}

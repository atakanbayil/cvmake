import React, { useState } from 'react'

export default function Çalışma(props:any) {
    
    return (
      <div>
        <label htmlFor="Ad">Unvan</label>
        <input type="text" onChange={e => { props.setUnvan(e.target.value) }}></input>
        <label htmlFor="Soyad">Soyad</label>
        <input type="text" onChange={e => {  props.setŞirket(e.target.value) }}></input>
        <label htmlFor="Telefon">Telefon</label>
        <input type="text" onChange={e => {  props.setBaş(e.target.value) }}></input>
        <label htmlFor="Mail">Mail</label>
        <input type="text" onChange={e => {  props.setBitiş(e.target.value) }}></input>
      </div>
    )
}

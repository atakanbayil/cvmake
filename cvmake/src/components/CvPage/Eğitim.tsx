import React, { useState } from 'react'

export default function Egitim(props:any) {
    
  
    return (
      <div>
        <label htmlFor="Ad">Bölüm İsmi</label>
        <input type="text" onChange={e => { props.setBölüm(e.target.value) }}></input>
        <label htmlFor="Soyad">Kurum ismi</label>
        <input type="text" onChange={e => { props.setKurum(e.target.value) }}></input>
        <label htmlFor="Telefon">Başlangıç Tarihi</label>
        <input type="text" onChange={e => { props.setBaş(e.target.value) }}></input>
        <label htmlFor="Mail">Bitiş Tarihi</label>
        <input type="text" onChange={e => { props.setBitiş(e.target.value) }}></input>
      </div>
    )
}

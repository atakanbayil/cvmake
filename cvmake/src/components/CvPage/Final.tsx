import { json } from 'body-parser';
import React from 'react'
export default function Final(props: any) {
  console.log(props.n);

  return (
    
    <div>{JSON.stringify(props.n)}</div>
  )
}

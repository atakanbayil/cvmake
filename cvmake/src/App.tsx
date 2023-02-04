import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"
import { Button, Card, Layout, Row } from "antd";
import SidePage from "./components/SidePage/SidePage";
import Content from "./components/Content/Content";
import { Footer } from "antd/es/layout/layout";
import SidePage2 from "./components/SidePage/SidePage2";
import { Fragment, useState } from "react";
import Content2 from "./components/Content/Content2";
import Headers from "./components/Header/Header";
import axios from "axios";
import socket from "./utils/socket";
import { Stack } from "@mui/material";
import { type } from "os";
import { log } from "console";

function App(props: any) {


  //console.log("app");

  const [page, setPage] = useState(0)

  const [temel, setTemel] = useState({
    name: "",
    surname: "",
    tel: "",
    mail: "",
    adres: "",
  })
  const [iş, setİş] = useState({
    ünvan: "",
    kurum: "",
    baş: "",
    bitiş: "",
    desc: "",

  })
  const [eğitim, setEğitim] = useState({
    okul: "",
    bölüm: "",
    baş: "",
    bitiş: "",


  })
  const [işlist, setİşlist] = useState<object[] | []>([])
  const [eğlist, setEğlist] = useState<object[] | []>([])
  const [nitelik, setNitelik] = useState("")
  const [ref, setRef] = useState("")
  const [ilgi, setİlgi] = useState("")
  const [foto, setFoto] = useState("")
  const [file, setFile] = useState("")
  const handleTemel = (e: any) => {
    setTemel((old) => {
      return {
        ...old,
        [e.target.name]: e.target.type = e.target.value
      }
    })

  }
  const handleİş = (e: any) => {
    setİş((old) => {
      return {
        ...old,
        [e.target.name]: e.target.type = e.target.value
      }
    })


  }
  const handleEğitim = (e: any) => {
    setEğitim((old) => {
      return {
        ...old,
        [e.target.name]: e.target.type = e.target.value
      }
    })


  }

  const handleSubmitE = (e: any) => {
    setEğlist(prev => [...prev, eğitim])


  }
  const handleSubmitI = (e: any) => {
    setİşlist(prev => [...prev, iş])

  }
  function handleFile(e: any) {
    setFile(e.target.files[0])
    //console.log(file)
  }
  function handleFoto(e: any) {

    setFoto(URL.createObjectURL(e.target.files[0]));
    // setFile(URL.createObjectURL(e.target.files[0]));
  }
  function handleApi(e:any){
    const url = "http://localhost:5000/api/image"
    const formdata = new FormData()
    formdata.append("image",file)
    axios.post(url,formdata).then((res)=>{
    })
  }
  const user = {
    temel: {
      name: temel.name,
      surname: temel.surname,
      tel: temel.tel,
      mail: temel.mail,
      adres: temel.adres,
    },
    iş: {
      ünvan: iş.ünvan,
      kurum: iş.kurum,
      baş: iş.baş,
      bitiş: iş.bitiş,
      desc: iş.desc
    },
    eğitim: eğitim,
    işlist: işlist,
    eğlist: eğlist,
    nitelik: nitelik,
    ref: ref,
    ilgi: ilgi,
    foto: foto,
    page: page,
    file: file
  }

  return (
    <BrowserRouter>



      <Layout style={{ height: "100vh", overflow: "hidden " }}>
        <Headers
          user={user}
        >
        </Headers>
        <Layout>

          <SidePage ></SidePage>
          <Content
            handleEğitim={handleEğitim}
            handleFoto={handleFoto}
            handleİş={handleİş}
            handleSubmitE={handleSubmitE}
            handleSubmitI={handleSubmitI}
            handleTemel={handleTemel}
            user={user}
            setİlgi={setİlgi}
            setNitelik={setNitelik}
            setRef={setRef}
            handleFile ={handleFile}
            handleApi={handleApi}
          >

          </Content>
          <Content2
            user={user}
            page={page}>

          </Content2>


          <SidePage2
            page={page}
            setPage={setPage}>

          </SidePage2>
        </Layout>

      </Layout>
    </BrowserRouter >

  );
}

export default App;

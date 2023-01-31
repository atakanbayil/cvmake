import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"
import { Card, Layout } from "antd";
import SidePage from "./components/SidePage/SidePage";
import Content from "./components/Content/Content";
import { Footer } from "antd/es/layout/layout";
import SidePage2 from "./components/SidePage/SidePage2";
import { useState } from "react";
import Content2 from "./components/Content/Content2";
import Header from "./components/Header/Header";
import { setSourceMapRange } from "typescript";

function App(props: any) {
  const [page, setPage] = useState(0)
  const [user, setUser] = useState({
    temel: {
      name: "",
      surname: "",
      tel: "",
      mail: "",
      adres: "",
    },
    iş: {
      ünvan: "",
      kurum: "",
      baş: "",
      bitiş: "",
      desc: "",
    },
    eğitim: {
      okul: "",
      bölüm: "",
      baş: "",
      bitiş: "",
    },
    işlist: [],
    eğlist: [],
    nitelik: "",
    ref: "",
    ilgi: "",
    foto: "",
  })
  const pull_data = (e:any) => {
    setUser(e);
  }
  return (
    <BrowserRouter>



      <Layout style={{ height: "100vh", overflow: "hidden" }}>
        <Header >
          <Link style={{ right: "8vh", position: "fixed" }} to='/final'>Download</Link>
        </Header>
        <Layout>
          <SidePage ></SidePage>
          <Content pull_data={pull_data}></Content>
          <Content2 user = {user} page={page}></Content2>


          <SidePage2 page={page} setPage={setPage}></SidePage2>
        </Layout>

      </Layout>
    </BrowserRouter >

  );
}

export default App;

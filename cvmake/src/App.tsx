import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"
import {  Layout } from "antd";
import SidePage from "./components/SidePage/SidePage";
import Content from "./components/Content/Content";
import { Footer, Header } from "antd/es/layout/layout";

function App(props:any) {

  return (
    <BrowserRouter>



      <Layout>
        <Header >
          <Link to='/final'>Click Me</Link>
        </Header>
        <Layout >
          <SidePage ></SidePage>
          <Content ></Content>

        </Layout>
       
      </Layout>
    </BrowserRouter >

  );
}

export default App;

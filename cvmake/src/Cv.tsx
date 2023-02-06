import { Layout } from "antd";
import Content from "./components/Content/Content";
import Content2 from "./components/Content/Content2";
import SidePage from "./components/SidePage/SidePage";
import SidePage2 from "./components/SidePage/SidePage2";
import Headers from "./components/Header/Header";
export default function Cv(props:any){
    return(
        <Layout style={{ height: "100vh", overflow: "hidden " }}>
          <Headers
            user={props.user}
          >
          </Headers>
          <Layout>

            <SidePage ></SidePage>
            <Content
              handleEğitim={props.handleEğitim}
              handleFoto={props.handleFoto}
              handleİş={props.handleİş}
              handleSubmitE={props.handleSubmitE}
              handleSubmitI={props.handleSubmitI}
              handleTemel={props.handleTemel}
              user={props.user}
              setİlgi={props.setİlgi}
              setNitelik={props.setNitelik}
              setRef={props.setRef}
              handleFile={props.handleFile}
              handleApi={props.handleApi}
            >

            </Content>
            <Content2
              user={props.user}
              page={props.page}>

            </Content2>


            <SidePage2
              page={props.page}
              setPage={props.setPage}>

            </SidePage2>
          </Layout>

        </Layout>

    )

}
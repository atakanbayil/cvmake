import { Layout } from "antd";
import Content from "./components/Content/Content";
import Content2 from "./components/Content/Content2";
import SidePage from "./components/SidePage/SidePage";
import SidePage2 from "./components/SidePage/SidePage2";
import Headers from "./components/Header/Header";
import { useState } from "react";
import { AlertFillIcon } from '@primer/octicons-react'
import { notification  } from 'antd';

export default function Cv(props: any) {
  notification.config({maxCount:1})
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement: any, msj: any) => {
    
    api.info({
      message: msj,
      icon: <AlertFillIcon verticalAlign="text-top" size={28} />,
      placement,
      key:1,
    }); 
    
  }

  const [activeStep, setActiveStep] = useState(0);
  const handleNext = (e: any) => {
    if (activeStep === 0) {
      if (!props.user.temel.name) {
        console.log("user ", props.user.temel);
        
        openNotification("top", "İsim yeri boş bırakılamaz.")

        e.stopPropagation();
        e.preventDefault();
      }
      else if (!props.user.temel.surname) {

        console.log("user ", props.user.temel);
        openNotification("top", "Soyad yeri boş bırakılamaz.")
        e.stopPropagation();
        e.preventDefault();

      }
      else if (!props.user.temel.mail) {

        console.log("user ", props.user.temel);
        openNotification("top", "Mail yeri boş bırakılamaz.")
        e.stopPropagation();
        e.preventDefault();
      }
      else if (!props.user.temel.tel) {

        console.log("user ", props.user.temel);
        openNotification("top", "Telefon yeri boş bırakılamaz.")
        e.stopPropagation();
        e.preventDefault();
      }
      else if (!props.user.temel.il) {

        console.log("user ", props.user.temel);
        openNotification("top", "İl yeri boş bırakılamaz.")
        e.stopPropagation();
        e.preventDefault();
      }
      else if (!props.user.temel.ilçe) {

        console.log("user ", props.user.temel);
        openNotification("top", "İlçe yeri boş bırakılamaz.")
        e.stopPropagation();
        e.preventDefault();
      }
      else if (!props.user.temel.foto) {

        openNotification("top", "Lütfen fotoğraf yükleyiniz.")
        e.stopPropagation();
        e.preventDefault();

      }
    }

  }

  return (
    <Layout style={{ height: "100vh", overflow: "hidden " }}>
      <Headers
        user={props.user}
      >
      </Headers>
      <Layout>

        <SidePage
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          handleNext={handleNext}
        ></SidePage>
        <Content
          
          contextHolder={contextHolder}
          handleTarih={props.handleTarih}
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
          setActiveStep={setActiveStep}
          activeStep={activeStep}
        >

        </Content>


        <SidePage2
          page={props.page}
          setPage={props.setPage}>

        </SidePage2>
      </Layout>

    </Layout>

  )

}
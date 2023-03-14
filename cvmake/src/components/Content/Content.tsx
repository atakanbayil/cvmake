import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Egitim from '../CvPage/Eğitim';
import Nitelikler from '../CvPage/Nitelikler';
import Ref from '../CvPage/Ref';
import Temel from '../CvPage/Temel';
import Çalışma from '../CvPage/Çalışma';
import İlgi from '../CvPage/İlgil';

export default function Content(props: any) {

    //console.log("content");

    return (
        <div style={{ margin: "1.5%", width: "52.5vw", boxShadow:'0 15px 35px' }}>
            <Card style={{ border: "none",height:"90vh" }}

            >
                <Routes>
                    <Route index element={<Navigate to="/cv/Temel" replace/>} />

                    <Route path="/Temel" element={<Temel contextHolder={props.contextHolder} activeStep={props.activeStep} setActiveStep={props.setActiveStep}  n={props.user} handleTemel={props.handleTemel} handleFoto={props.handleFoto} handleFile={props.handleFile} handleApi={props.handleApi} />} />
                    <Route path="/Çalışma" element={<Çalışma handleTarih={props.handleTarih} activeStep={props.activeStep} setActiveStep={props.setActiveStep} n={props.user} handleSubmitI={props.handleSubmitI} handleİş={props.handleİş} />} />
                    <Route path="/Eğitim" element={<Egitim activeStep={props.activeStep} setActiveStep={props.setActiveStep} n={props.user} handleSubmitE={props.handleSubmitE} handleEğitim={props.handleEğitim} />} />
                    <Route path="/Nitelikler" element={<Nitelikler activeStep={props.activeStep} setActiveStep={props.setActiveStep} n={props.user} setNitelik={props.setNitelik} />} />
                    <Route path="/ilgi" element={<İlgi activeStep={props.activeStep} setActiveStep={props.setActiveStep} n={props.user} setİlgi={props.setİlgi} />} />
                    <Route path="/ref" element={<Ref activeStep={props.activeStep} setActiveStep={props.setActiveStep} n={props.user} setRef={props.setRef} />} />


                </Routes>
            </Card>
        </div>
    )
}

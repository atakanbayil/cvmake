import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Egitim from '../CvPage/Eğitim';
import Nitelikler from '../CvPage/Nitelikler';
import Ref from '../CvPage/Ref';
import Temel from '../CvPage/Temel';
import Çalışma from '../CvPage/Çalışma';
import İlgi from '../CvPage/İlgil';

export default function Content(props: any) {

    //console.log("content");

    return (
        <div style={{marginRight:"1.5%"}}>
            <Card style={{ border: "none", margin: "5%", height: "80vh", width: "35vw" }}

            >
                <Routes>
                    <Route path="/temel" element={<Temel n={props.user} handleTemel={props.handleTemel} handleFoto={props.handleFoto} handleFile={props.handleFile} handleApi={props.handleApi} />} />
                    <Route path="/Çalışma" element={<Çalışma n={props.user} handleSubmitI={props.handleSubmitI} handleİş={props.handleİş} />} />
                    <Route path="/Eğitim" element={<Egitim n={props.user} handleSubmitE={props.handleSubmitE} handleEğitim={props.handleEğitim} />} />
                    <Route path="/Nitelikler" element={<Nitelikler n={props.user} setNitelik={props.setNitelik} />} />
                    <Route path="/ilgi" element={<İlgi n={props.user} setİlgi={props.setİlgi} />} />
                    <Route path="/ref" element={<Ref n={props.user} setRef={props.setRef} />} />


                </Routes>
            </Card>
        </div>
    )
}

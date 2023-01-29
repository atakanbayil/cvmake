import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Container } from "reactstrap";
import Egitim from '../CvPage/Eğitim';
import Eğitim from '../CvPage/Eğitim';
import Final from '../CvPage/Final';
import Nitelikler from '../CvPage/Nitelikler';
import Ref from '../CvPage/Ref';
import Temel from '../CvPage/Temel';
import Çalışma from '../CvPage/Çalışma';
import İlgi from '../CvPage/İlgil';

export default function Content(props: any) {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [tel, setTel] = useState("")
    const [mail, setMail] = useState("")
    const [ünvan, setUnvan] = useState("")
    const [şirket, setŞirket] = useState("")
    const [başç, setBaşç] = useState("")
    const [bitişç, setBitişç] = useState("")
    const [bölüm, setBölüm] = useState("")
    const [kurum, setKurum] = useState("")
    const [başö, setBaşö] = useState("")
    const [bitişö, setBitişö] = useState("")
    const [nitelik, setNitelik] = useState("")
    const [ref, setRef] = useState("")
    const [ilgi, setİlgi] = useState("")

    let user = {
        name:name,
        surname:surname,
        tel:tel,
        mail:mail,
        ünvan:ünvan,
        şirket:şirket,
        başç:başç,
        bitişç:bitişç,
        bölüm:bölüm,
        kurum:kurum,
        başö:başö,
        bitişö:bitişö,
        nitelik:nitelik,
        ref:ref,
        ilgi:ilgi,
    }

    return (
        <Container

        >
            <Routes>
                <Route path="/Temel" element={<Temel setName={setName} setSurname={setSurname} setTel={setTel} setMail={setMail} />} />
                <Route path="/Çalışma" element={<Çalışma setUnvan={setUnvan} setŞirket={setŞirket} setBaşç={setBaşç} setBitişç={setBitişç} />} />
                <Route path="/Eğitim" element={<Egitim setBölüm={setBölüm} setKurum={setKurum} setBaşö={setBaşö} setBitişö={setBitişö}/>} />
                <Route path="/Nitelikler" element={<Nitelikler setNitelik={setNitelik}/>} />
                <Route path="/ilgi" element={<İlgi setİlgi={setİlgi}/>} />
                <Route path="/ref" element={<Ref setRef={setRef}/>} />
                <Route path="/final" element={<Final n={user} />} />

            </Routes>
        </Container>
    )
}

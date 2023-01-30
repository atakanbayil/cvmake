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
        console.log(typeof (URL.createObjectURL(e.target.files[0])));

        setFoto(URL.createObjectURL(e.target.files[0]));
        // setFile(URL.createObjectURL(e.target.files[0]));
    }

    let user = {
        temel: {
            name: temel.name,
            surname: temel.surname,
            tel: temel.tel,
            mail: temel.mail,
            adres: temel.adres,
        },
        iş: iş,
        eğitim: eğitim,
        işlist: işlist,
        eğlist: eğlist,
        nitelik: nitelik,
        ref: ref,
        ilgi: ilgi,
        foto: foto,
    }

    return (
        <Container

        >
            <Routes>
                <Route path="/Temel" element={<Temel n={user} handleTemel={handleTemel} handleFile={handleFile} />} />
                <Route path="/Çalışma" element={<Çalışma n={user} handleSubmitI={handleSubmitI} handleİş={handleİş} />} />
                <Route path="/Eğitim" element={<Egitim n={user} handleSubmitE={handleSubmitE} handleEğitim={handleEğitim} />} />
                <Route path="/Nitelikler" element={<Nitelikler n={user} setNitelik={setNitelik} />} />
                <Route path="/ilgi" element={<İlgi n={user} setİlgi={setİlgi} />} />
                <Route path="/ref" element={<Ref n={user} setRef={setRef} />} />
                <Route path="/final" element={<Final n={user} />} />

            </Routes>
        </Container>
    )
}

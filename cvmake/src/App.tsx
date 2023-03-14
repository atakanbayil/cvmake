import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import Cv from "./Cv";
import Home from "./Home";
import Egitim from "./components/CvPage/Eğitim";
import Nitelikler from "./components/CvPage/Nitelikler";
import Ref from "./components/CvPage/Ref";
import Temel from "./components/CvPage/Temel";
import Çalışma from "./components/CvPage/Çalışma";
import İlgi from "./components/CvPage/İlgil";
import Cvİndir from "./Cvİndir";

function App(props: any) {


  //console.log("app");

  const [page, setPage] = useState(0)

  const [temel, setTemel] = useState({
    name: "",
    surname: "",
    tel: "",
    mail: "",
    il: "",
    ilçe:"",
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
      if (e.target.type === "text") {
        return {
          ...old,
          [e.target.name]: e.target.type = e.target.value
        }
      }
      else {
        return {

          ...old,
          desc: e.target.value,
        }
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
  const handleTarih = (e: any) => {

    setİş((old) => {
      console.log("baş:", e[0].toString().split(" ", 4).slice(1).join());
      console.log("bitiş:", e[1].toString().split(" ", 4).slice(1).join());

      return {
        ...old,
        baş: e[0].toString().split(" ", 4).slice(1).join(),
        bitiş: e[1].toString().split(" ", 4).slice(1).join(),
      }
    }
    )


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
  function handleApi(e: any) {
    const url = "http://localhost:5000/api/image"
    const formdata = new FormData()
    formdata.append("image", file)
    axios.post(url, formdata).then((res) => {
    })
  }
  const user = {
    temel: {
      name: temel.name,
      surname: temel.surname,
      tel: temel.tel,
      mail: temel.mail,
      il: temel.il,
      ilçe:temel.ilçe,
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
      <Routes>
        <Route path="/" element={
          <Home
            user={user}
            page={page}
            setPage={setPage}
          />} />
        <Route path="/cv" element={
          <Cv
            handleTarih={handleTarih}
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
            handleFile={handleFile}
            handleApi={handleApi}
            setPage={setPage}
            page={page} />}>
          <Route index path="/cv/Temel" element={<Temel  n={user} handleTemel={handleTemel} handleFoto={handleFoto} handleFile={handleFile} handleApi={handleApi} />} />
          <Route path="/cv/Çalışma" element={<Çalışma n={user} handleTarih={handleTarih} handleSubmitI={handleSubmitI} handleİş={handleİş} />} />
          <Route path="/cv/Eğitim" element={<Egitim n={user} handleTarih={handleTarih} handleSubmitE={handleSubmitE} handleEğitim={handleEğitim} />} />
          <Route path="/cv/Nitelikler" element={<Nitelikler n={user} setNitelik={setNitelik} />} />
          <Route path="/cv/ilgi" element={<İlgi n={user} setİlgi={setİlgi} />} />
          <Route path="/cv/ref" element={<Ref n={user} setRef={setRef} />} />

        </Route>
        <Route path="/cvindir" element={<Cvİndir page={page} n={user} />} />


      </Routes>



    </BrowserRouter >

  );
}

export default App;

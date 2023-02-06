import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { Fragment } from "react";
import { Stack } from "react-bootstrap";
import {
  HiLocationMarker,
  HiOfficeBuilding,
  HiOutlineMail,
  HiPhone,
} from "react-icons/hi";
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { BsLinkedin, BsGithub, BsGlobe } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import axios from "axios";
import { saveAs } from "file-saver";

import { useSelector } from "react-redux";
export default function Cvİndir(props) {
  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("");
      const pdf = new jsPDF("p", "pt", "a4", false);
      pdf.addImage(imgData, "PNG", 0, 0, 600, 0, undefined, false);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };
  return (
    <Fragment >
      <div className="d-grid col-2 mx-auto mt-4">
        <button
          className="nav-link align-middle bg-dark text-white p-2 rounded"
          onClick={printDocument}
        >
          Download
        </button>
      </div>
      <div style={{marginTop:"2.5%",backgroundColor:"gray"}} className="container d-flex justify-content-center p-4">
        <div style={{backgroundColor:"white",borderBlockColor:"gray",paddingTop:"2vh",borderWidth:"0.1px",border:"solid",height:"297mm",width:"210mm"}}className="pdf" id="divToPrint" size="A4">
          <div>
            <div>
              <meta charSet="utf-8" />
              <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossOrigin="anonymous"
              />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n        html,\n        body {\n        font-family: "Poppins", sans-serif;\n        font-size: 1.2em;\n        }\n        .fs-small {\n            font-size: 1em;\n        }\n        \n        .font-bold{\n            font-size: 1.3em;\n            font-weight: 600;\n        }\n        .float-left {\n            float:left;\n        }\n        .technology {\n            padding: 2px 8px;\n            margin-right: 15px;\n            display: flex;\n            align-items: center;\n            background-color: #fff;\n        }\n        .ls-2 {\n            letter-spacing: 2px;\n        }\n    ',
                }}
              />
              <title>Resume</title>
              <div style={{ display: "flex" }} className="px-4">
                <img style={{ width: "30vh" }} src={props.n.foto} />
                <h2
                  style={{ overflow:"hidden",fontSize: "1.5vw" }}
                  className="mx-4 font-bold mt-4"
                >
                  {props.n.temel.name} {props.n.temel.surname}
                </h2>
              </div>
              <div>
                <div className="px-4">
                  <h2 className="mx-4 font-bold mt-4"> </h2>
                  <p className="mx-4 fs-small mb-2 text-secondary"></p>
                </div>
                <hr style={{margin:"2.5%"}} width="95%"/>
                <div className="px-4">
                  <div className="col-5 float-left bg-light p-4">
                    <h3 style={{ fontSize: "24px" }} className="mb-3 ls-2">
                      • INFO
                    </h3>
                    <div style={{ display: "flex" }}>
                      <h4
                        style={{ fontSize: "12px" }}
                        className="m-0 text-secondary"
                      >
                        Position:
                      </h4>
                      <p style={{ fontSize: "10px" }} className="m-0 mb-2">
                        {props.n.iş.ünvan}
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <h4
                        style={{ fontSize: "12px" }}
                        className="m-0 text-secondary"
                      >
                        Location:
                      </h4>
                      <p style={{ fontSize: "10px" }} className="m-0 mb-2">
                        {props.n.temel.adres}
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <h4
                        style={{ fontSize: "12px" }}
                        className="m-0 text-secondary"
                      >
                        Contact:
                      </h4>
                      <p style={{ fontSize: "10px" }} className="m-0 mb-2">
                        {props.n.temel.tel}
                      </p>
                    </div>
                    <div style={{ marginBottom: "1.5vh", display: "flex" }}>
                      <h4
                        style={{ fontSize: "12px" }}
                        className="m-0 text-secondary"
                      >
                        E-Mail:
                      </h4>
                      <p style={{ fontSize: "10px" }} className="m-0">
                        {props.n.temel.mail}
                      </p>
                    </div>
                    <h3 style={{ fontSize: "24px" }} className="mb-3 ls-2">
                      • SKILLS
                    </h3>
                    <div className="d-flex flex-wrap">
                      {props.n.temel.nitelik}
                    </div>
                  </div>
                  <div className="col-7 float-left p-4">
                    <h3 style={{ fontSize: "24px" }} className="mb-3 ls-2">
                      • ABOUT
                    </h3>
                    <p style={{ fontSize: "10px" }} className="m-0">
                      {props.n.temel.ilgi}
                    </p>
                    <hr />
                    <h3 style={{ fontSize: "24px" }} className="mb-3 ls-2">
                      • WORK EXPERIENCE
                    </h3>
                    {!props.n.işlist.length ? (
                      <div>
                        <p style={{ fontSize: "10px" }}>{props.n.iş.ünvan}</p>
                        <p style={{ fontSize: "10px" }}>{props.n.iş.kurum}</p>
                        <p style={{ fontSize: "10px" }}>{props.n.iş.baş}</p>
                        <p style={{ fontSize: "10px" }}>{props.n.iş.bitiş}</p>
                        <p style={{ fontSize: "10px" }}>{props.n.iş.desc}</p>
                      </div>
                    ) : (
                      props.n.işlist.map((item, i) => {
                        if (i == props.n.işlist.length - 1) {
                          return (
                            <div key={i}>
                              <p style={{ fontSize: "10px" }}>{item.ünvan}</p>
                              <p style={{ fontSize: "10px" }}>{item.kurum}</p>
                              <p style={{ fontSize: "10px" }}>{item.baş}</p>
                              <p style={{ fontSize: "10px" }}>{item.bitiş}</p>
                              <p style={{ fontSize: "10px" }}>{item.desc}</p>
                              <p style={{ fontSize: "10px" }}>
                                {props.n.iş.ünvan}
                              </p>
                              <p style={{ fontSize: "10px" }}>
                                {props.n.iş.kurum}
                              </p>
                              <p style={{ fontSize: "10px" }}>
                                {props.n.iş.baş}
                              </p>
                              <p style={{ fontSize: "10px" }}>
                                {props.n.iş.bitiş}
                              </p>
                              <p style={{ fontSize: "10px" }}>
                                {props.n.iş.desc}
                              </p>
                            </div>
                          );
                        } else {
                          return (
                            <div>
                              <p style={{ fontSize: "10px" }}>{item.ünvan}</p>
                              <p style={{ fontSize: "10px" }}>{item.kurum}</p>
                              <p style={{ fontSize: "10px" }}>{item.baş}</p>
                              <p style={{ fontSize: "10px" }}>{item.bitiş}</p>
                              <p style={{ fontSize: "10px" }}>{item.desc}</p>
                            </div>
                          );
                        }
                      })
                    )}
                    <hr />
                    <h3 style={{ fontSize: "24px" }} className="mb-3 ls-2">
                      • EDUCATION
                    </h3>
                    {!props.n.eğlist.length ? (
                      <div style={{ display: "flex" }}>
                        <p style={{ fontSize: "10px" }}>
                          {props.n.eğitim.okul}-{props.n.eğitim.bölüm}
                        </p>
                        <div style={{ width: "24px" }}></div>
                        <p style={{ fontSize: "10px" }}>
                          {props.n.eğitim.baş}-{props.n.eğitim.bitiş}
                        </p>
                      </div>
                    ) : (
                      props.n.eğlist.map((item, i) => {
                        if (i == props.n.eğlist.length - 1) {
                          return (
                            <div key={i}>
                              <p style={{ fontSize: "10px" }}>{item.okul}</p>
                              <p style={{ fontSize: "10px" }}>{item.bölüm}</p>
                              <p style={{ fontSize: "10px" }}>{item.baş}</p>
                              <p style={{ fontSize: "10px" }}>{item.bitiş}</p>
                              <p style={{ fontSize: "10px" }}>
                                {props.n.eğitim.okul}
                              </p>
                              <p style={{ fontSize: "10px" }}>
                                {props.n.eğitim.bölüm}
                              </p>
                              <p style={{ fontSize: "10px" }}>
                                {props.n.eğitim.baş}
                              </p>
                              <p style={{ fontSize: "10px" }}>
                                {props.n.eğitim.bitiş}
                              </p>
                            </div>
                          );
                        } else {
                          return (
                            <div>
                              <div>{item.okul}</div>
                              <div>{item.bölüm}</div>
                              <div>{item.baş}</div>
                              <div>{item.bitiş}</div>
                            </div>
                          );
                        }
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
{
  /*<div className="d-grid col-2 mx-auto mt-4">
        <button
          className="nav-link align-middle bg-dark text-white p-2 rounded"
          onClick={printDocument}
        >
          Download
        </button>
</div>*/
}

import "./styless.css";
import axios from "axios";
import { saveAs } from "file-saver";
import {
  PDFViewer,
  Page,
  View,
  Svg,
  Line,
  Document,
  Text,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { Card } from "antd";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { Fragment } from "react";
import { display } from "@mui/system";
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
    border: "none",
  },
  kisisel: {
    display: "flex",
    flexDirection: "row",
    margin: " 5 25 0 25",
    padding: 10,
    backgroundColor: "gray",
  },
  kisisel2: {
    fontSize: "12px",
    display: "flex",
    flexDirection: "row",
    margin: " 0 25 0 25",
    padding: 10,
    backgroundColor: "gray",
  },
  line: {
    margin: "0px 25px 0px 25px",
    padding: "0px 10px 0px 10px",
    backgroundColor: "gray",
  },
  view: {
    margin: 25,
    padding: 10,
    backgroundColor: "gray",
  },
  info: {
    display: "flex",
    flexDirection: "column",
  },
  viewer: {
    padding: 0,
    marginTop: 15,
    width: "100vw", //the pdf viewer will take up all of the width and height
    height: "100vh",
    border: "none",
  },
  foto: {
    width: "25vw",
    margin: 12,
  },
  p: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txt: {
    margin: 7,
  },
  title: {
    fontSize: "24px",
  },
});
export default function Cvİndir(props) {
  const createAndDownloadPdf = () => {
    const data = props.n;
    axios
      .post("http://localhost:5000/create-pdf", data)
      .then(() =>
        axios.get("http://localhost:5000/fetch-pdf", { responseType: "blob" })
      )
      .then((res) => {
        console.log("front");
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "newPdf.pdf");
      });
  };
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
  const element = () => {
    switch (props.page) {
      case 0:
        return (
          <PDFViewer showToolbar={true} style={styles.viewer}>
            <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.kisisel}>
                  <Text style={styles.txt}>
                    Ad:
                    <Text>{" " + props.n.temel.name + " "}</Text>
                  </Text>
                  <Text style={styles.txt}>
                    Soyad:
                    <Text>{" " + props.n.temel.surname + " "}</Text>
                  </Text>
                  <View
                    style={{
                      margin: 25,
                      backgroundColor: "gray",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    {props.n.foto && (
                      <Image style={styles.foto} src={props.n.foto} />
                    )}
                  </View>
                </View>
                <View style={styles.line}>
                  <Svg style={{ marginTop: 5 }} height="5" width="525">
                    <Line
                      x1="0"
                      y1="0"
                      x2="525"
                      y2="0"
                      strokeWidth={2}
                      stroke="rgb(211,211,211)"
                    />
                  </Svg>
                </View>

                <View style={styles.kisisel2}>
                  <View style={{ justifyContent: "center" }}>
                    <Text>PROFILE</Text>
                  </View>
                  <View style={{ marginLeft: 15 }}>
                    <Text style={styles.txt}>
                      Telefon:
                      <Text>{" " + props.n.temel.tel + " "}</Text>
                    </Text>
                    <Text style={styles.txt}>
                      Mail:
                      <Text>{" " + props.n.temel.mail + " "}</Text>
                    </Text>
                    <Text style={styles.txt}>
                      Adres:
                      <Text>{" " + props.n.temel.adres}</Text>
                    </Text>
                  </View>
                </View>
                <View style={styles.line}>
                  <Svg style={{ marginTop: 5 }} height="5" width="525">
                    <Line
                      x1="0"
                      y1="0"
                      x2="525"
                      y2="0"
                      strokeWidth={2}
                      stroke="rgb(211,211,211)"
                    />
                  </Svg>
                </View>

                <View style={styles.kisisel2}>
                  <Text style={styles.title}>Education</Text>
                  <Text>
                    {!props.n.eğlist.length ? (
                      <View>
                        <Text>{props.n.eğitim.okul}</Text>

                        <Text>{props.n.eğitim.bölüm}</Text>

                        <Text>{props.n.eğitim.baş}</Text>

                        <Text>{props.n.eğitim.bitiş}</Text>
                      </View>
                    ) : (
                      props.n.eğlist.map((item, i) => {
                        if (i == props.n.eğlist.length - 1) {
                          return (
                            <View key={i}>
                              <Text>{item.okul}</Text>
                              <Text>{item.bölüm}</Text>
                              <Text>{item.baş}</Text>
                              <Text>{item.bitiş}</Text>
                              <Text>{props.n.eğitim.okul}</Text>
                              <Text>{props.n.eğitim.bölüm}</Text>
                              <Text>{props.n.eğitim.baş}</Text>
                              <Text>{props.n.eğitim.bitiş}</Text>
                            </View>
                          );
                        } else {
                          return (
                            <View>
                              <Text>{item.okul}</Text>
                              <Text>{item.bölüm}</Text>
                              <Text>{item.baş}</Text>
                              <Text>{item.bitiş}</Text>
                            </View>
                          );
                        }
                      })
                    )}
                  </Text>
                </View>
                <View style={styles.line}>
                  <Svg style={{ marginTop: 5 }} height="5" width="525">
                    <Line
                      x1="0"
                      y1="0"
                      x2="525"
                      y2="0"
                      strokeWidth={2}
                      stroke="rgb(211,211,211)"
                    />
                  </Svg>
                </View>

                <View style={styles.kisisel2}>
                  <Text style={styles.title}>Experience</Text>
                  <Text>
                    {!props.n.işlist.length ? (
                      <View>
                        <Text>{props.n.iş.ünvan}</Text>

                        <Text>{props.n.iş.kurum}</Text>

                        <Text>{props.n.iş.baş}</Text>

                        <Text>{props.n.iş.bitiş}</Text>

                        <Text>{props.n.iş.desc}</Text>
                      </View>
                    ) : (
                      props.n.işlist.map((item, i) => {
                        if (i == props.n.işlist.length - 1) {
                          return (
                            <View key={i}>
                              <Text>{item.ünvan}</Text>
                              <Text>{item.kurum}</Text>
                              <Text>{item.baş}</Text>
                              <Text>{item.bitiş}</Text>
                              <Text>{item.desc}</Text>
                              <Text>{props.n.iş.ünvan}</Text>
                              <Text>{props.n.iş.kurum}</Text>
                              <Text>{props.n.iş.baş}</Text>
                              <Text>{props.n.iş.bitiş}</Text>
                              <Text>{props.n.iş.desc}</Text>
                            </View>
                          );
                        } else {
                          return (
                            <View>
                              <Text>{item.ünvan}</Text>
                              <Text>{item.kurum}</Text>
                              <Text>{item.baş}</Text>
                              <Text>{item.bitiş}</Text>
                              <Text>{item.desc}</Text>
                            </View>
                          );
                        }
                      })
                    )}
                  </Text>
                </View>
                <View style={styles.line}>
                  <Svg style={{ marginTop: 5 }} height="5" width="525">
                    <Line
                      x1="0"
                      y1="0"
                      x2="525"
                      y2="0"
                      strokeWidth={2}
                      stroke="rgb(211,211,211)"
                    />
                  </Svg>
                </View>

              </Page>
            </Document>
          </PDFViewer>
        );

      default:
        break;
    }
  };
  /*const element = () => {
    switch (props.page) {
      case 0:
        return (
          <div id="divToPrint">
            <div style={{ display: "flex" }} className="px-4">
              <img style={{ width: "30vh" }} src={props.n.foto} />
              <h2
                style={{ overflow: "hidden", fontSize: "1.5vw" }}
                className="mx-4 font-bold mt-4"
              >
                {props.n.temel.name} {props.n.temel.surname}
              </h2>
            </div>
            <hr />
            <div className="px-4">
              <div className="col-5 float-left bg-light p-4">
                <h3 style={{ fontSize: "1vw" }} className="mb-3 ls-2">
                  • INFO
                </h3>
                <div style={{ display: "flex" }}>
                  <h4
                    style={{ fontSize: "0.5vw" }}
                    className="m-0 text-secondary"
                  >
                    Position:
                  </h4>
                  <p style={{ fontSize: "0.4vw" }} className="m-0 mb-2">
                    {props.n.iş.ünvan}
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <h4
                    style={{ fontSize: "0.5vw" }}
                    className="m-0 text-secondary"
                  >
                    Location:
                  </h4>
                  <p style={{ fontSize: "0.4vw" }} className="m-0 mb-2">
                    {props.n.temel.adres}
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <h4
                    style={{ fontSize: "0.5vw" }}
                    className="m-0 text-secondary"
                  >
                    Contact:
                  </h4>
                  <p style={{ fontSize: "0.4vw" }} className="m-0 mb-2">
                    {props.n.temel.tel}
                  </p>
                </div>
                <div style={{ marginBottom: "1.5vh", display: "flex" }}>
                  <h4
                    style={{ fontSize: "0.5vw" }}
                    className="m-0 text-secondary"
                  >
                    E-Mail:
                  </h4>
                  <p style={{ fontSize: "0.4vw" }} className="m-0">
                    {props.n.temel.mail}
                  </p>
                </div>
                <h3 style={{ fontSize: "1vw" }} className="mb-3 ls-2">
                  • SKILLS
                </h3>
                <div className="d-flex flex-wrap">{props.n.temel.nitelik}</div>
              </div>
              <div className="col-7 float-left p-4">
                <h3 style={{ fontSize: "1vw" }} className="mb-3 ls-2">
                  • ABOUT
                </h3>
                <p style={{ fontSize: "0.4vw" }} className="m-0">
                  {props.n.temel.ilgi}
                </p>
                <hr />
                <h3 style={{ fontSize: "1vw" }} className="mb-3 ls-2">
                  • WORK EXPERIENCE
                </h3>
                {!props.n.işlist.length ? (
                  <div>
                    <p style={{ fontSize: "0.4vw" }}>{props.n.iş.ünvan}</p>
                    <p style={{ fontSize: "0.4vw" }}>{props.n.iş.kurum}</p>
                    <p style={{ fontSize: "0.4vw" }}>{props.n.iş.baş}</p>
                    <p style={{ fontSize: "0.4vw" }}>{props.n.iş.bitiş}</p>
                    <p style={{ fontSize: "0.4vw" }}>{props.n.iş.desc}</p>
                  </div>
                ) : (
                  props.n.işlist.map((item, i) => {
                    if (i == props.n.işlist.length - 1) {
                      return (
                        <div key={i}>
                          <p style={{ fontSize: "0.4vw" }}>{item.ünvan}</p>
                          <p style={{ fontSize: "0.4vw" }}>{item.kurum}</p>
                          <p style={{ fontSize: "0.4vw" }}>{item.baş}</p>
                          <p style={{ fontSize: "0.4vw" }}>{item.bitiş}</p>
                          <p style={{ fontSize: "0.4vw" }}>{item.desc}</p>
                          <p style={{ fontSize: "0.4vw" }}>
                            {props.n.iş.ünvan}
                          </p>
                          <p style={{ fontSize: "0.4vw" }}>
                            {props.n.iş.kurum}
                          </p>
                          <p style={{ fontSize: "0.4vw" }}>{props.n.iş.baş}</p>
                          <p style={{ fontSize: "0.4vw" }}>
                            {props.n.iş.bitiş}
                          </p>
                          <p style={{ fontSize: "0.4vw" }}>{props.n.iş.desc}</p>
                        </div>
                      );
                    } else {
                      return (
                        <div>
                          <p style={{ fontSize: "0.4vw" }}>{item.ünvan}</p>
                          <p style={{ fontSize: "0.4vw" }}>{item.kurum}</p>
                          <p style={{ fontSize: "0.4vw" }}>{item.baş}</p>
                          <p style={{ fontSize: "0.4vw" }}>{item.bitiş}</p>
                          <p style={{ fontSize: "0.4vw" }}>{item.desc}</p>
                        </div>
                      );
                    }
                  })
                )}
                <hr />
                <h3 style={{ fontSize: "1vw" }} className="mb-3 ls-2">
                  • EDUCATION
                </h3>
                {!props.n.eğlist.length ? (
                  <div style={{ display: "flex" }}>
                    <p style={{ fontSize: "0.4vw" }}>
                      {props.n.eğitim.okul}-{props.n.eğitim.bölüm}
                    </p>
                    <div style={{ width: "1vw" }}></div>
                    <p style={{ fontSize: "0.4vw" }}>
                      {props.n.eğitim.baş}-{props.n.eğitim.bitiş}
                    </p>
                  </div>
                ) : (
                  props.n.eğlist.map((item, i) => {
                    if (i == props.n.eğlist.length - 1) {
                      return (
                        <div key={i}>
                          <p style={{ fontSize: "0.4vw" }}>{item.okul}</p>
                          <p style={{ fontSize: "0.4vw" }}>{item.bölüm}</p>
                          <p style={{ fontSize: "0.4vw" }}>{item.baş}</p>
                          <p style={{ fontSize: "0.4vw" }}>{item.bitiş}</p>
                          <p style={{ fontSize: "0.4vw" }}>
                            {props.n.eğitim.okul}
                          </p>
                          <p style={{ fontSize: "0.4vw" }}>
                            {props.n.eğitim.bölüm}
                          </p>
                          <p style={{ fontSize: "0.4vw" }}>
                            {props.n.eğitim.baş}
                          </p>
                          <p style={{ fontSize: "0.4vw" }}>
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
        );

      case 1:
        return (
          <div id="divToPrint" size="A4" className="resume">
            <div className="resume_left">
              <div className="resume_profile">
                <img src="https://i.imgur.com/eCijVBe.png" alt="profile_pic" />
              </div>
              <div className="resume_content">
                <div className="resume_item resume_info">
                  <div className="title">
                    <p className="bold">
                      {props.n.temel.name} {props.n.temel.surname}
                    </p>
                    <p className="regular">{props.n.iş.ünvan}</p>
                  </div>
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-signs" />
                      </div>
                      <div className="data">{props.n.temel.adres}</div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-mobile-alt" />
                      </div>
                      <div className="data">{props.n.temel.tel}</div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope" />
                      </div>
                      <div className="data">{props.n.temel.mail}</div>
                    </li>
                  </ul>
                </div>
                <div className="resume_item resume_skills">
                  <div className="title">
                    <p className="bold">skill's</p>
                  </div>
                </div>
                <div className="resume_item resume_social">
                  <div className="title">
                    <p className="bold">Social</p>
                  </div>
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="fab fa-facebook-square" />
                      </div>
                      <div className="data">
                        <p className="semi-bold">Facebook</p>
                        <p>Stephen@facebook</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fab fa-twitter-square" />
                      </div>
                      <div className="data">
                        <p className="semi-bold">Twitter</p>
                        <p>Stephen@twitter</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fab fa-youtube" />
                      </div>
                      <div className="data">
                        <p className="semi-bold">Youtube</p>
                        <p>Stephen@youtube</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fab fa-linkedin" />
                      </div>
                      <div className="data">
                        <p className="semi-bold">Linkedin</p>
                        <p>Stephen@linkedin</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="resume_right">
              <div className="resume_item resume_about">
                <div className="title">
                  <p className="bold">About</p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis illo fugit officiis distinctio culpa officia
                  totam atque exercitationem inventore repudiandae?
                </p>
              </div>
              <div className="resume_item resume_work">
                <div className="title">
                  <p className="bold">Work Experience</p>
                </div>
                {props.n.işlist.length ? (
                  props.n.işlist.map((step) => {
                    return (
                      <ul>
                        <li>
                          <div className="skill_name">{step.ünvan}</div>
                        </li>
                      </ul>
                    );
                  })
                ) : (
                  <div>iş yok</div>
                )}
              </div>
              <div className="resume_item resume_education">
                <div className="title">
                  <p className="bold">Education</p>
                </div>
                {props.n.eğlist.length ? (
                  props.n.eğlist.map((step) => {
                    return (
                      <ul>
                        <li>
                          <div className="skill_name">{step.okul}</div>
                        </li>
                      </ul>
                    );
                  })
                ) : (
                  <div>skil yok</div>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return <div>aaa</div>;
    }
  };*/
  return (
    <div>
      <meta charSet="UTF-8" />
      <title>Resume/CV Design</title>
      <link rel="stylesheet" href="styles.css" />
      <button
        style={{ marginInline: "50%", marginTop: "7.5vh" }}
        onClick={createAndDownloadPdf}
      >
        Download
      </button>
      {element()}
    </div>
  );
}

{
  /*import { PDFViewer, Page, View, Svg, Line,Document,Text,StyleSheet,Image } from "@react-pdf/renderer";
import { Card } from "antd";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { Fragment } from "react";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
    margin: 25,
    padding: 10,
    border: "none",
    
  },
  info: {
    display: "flex",
    flexDirection: "column",
  },
  viewer: {
    padding: 0,
    marginTop: 15,
    width: "100%", //the pdf viewer will take up all of the width and height
    height: "100vh",
    border: "none",
  },
  foto: {
    width: "25vw",
    margin: 12,

  },
  p: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  txt: {
    margin: 7
  },
  title: {
    fontSize: "24px"
  }
});

export default function Cvİndir(props:any) {
  
  return (
    <Card style={{ height: "80vh" }} >
      <PDFViewer showToolbar={true} style={styles.viewer} >
        <Document>
          <Page size="A4" style={styles.page}>
            <Text style={{ marginBottom: "32px", fontSize: "32px", textAlign: "center" }}>CV</Text>
            <View style={styles.p}>
              <View style={styles.info}>
                <View>
                  <Text style={styles.title} >Kisisel Bilgiler

                  </Text>
                  <Svg style={{ marginTop: 5 }} height="5" width="750">
                    <Line
                      x1="0"
                      y1="0"
                      x2="75%"
                      y2="0"
                      strokeWidth={2}
                      stroke="rgb(211,211,211)"
                    />
                  </Svg>
                </View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <View>

                    <Text style={styles.txt}>
                      Ad:
                      <Text >{" " + props.n.temel.name}</Text>
                    </Text>
                    <Text style={styles.txt}>
                      Soyad:
                      <Text>{" " + props.n.temel.surname}</Text>
                    </Text>
                    <Text style={styles.txt}>
                      Telefon:
                      <Text>{" " + props.n.temel.surname}</Text>
                    </Text>
                    <Text style={styles.txt}>
                      Mail:
                      <Text>{" " + props.n.temel.surname}</Text>
                    </Text>
                    <Text style={styles.txt}>
                      Adres:
                      <Text>{" " + props.n.temel.surname}</Text>
                    </Text>
                  </View>
                  {props.n.foto && <Image style={styles.foto} src={props.n.foto} />}
                </View>
              </View>

            </View>
            <View style={styles.p}>
              <View style={styles.info}>
                <View>
                  <Text style={styles.title} >Profil

                  </Text>
                  <Svg height="5" width="750">
                    <Line
                      x1="0"
                      y1="0"
                      x2="75%"
                      y2="0"
                      strokeWidth={2}
                      stroke="rgb(0,0,0)"
                    />
                  </Svg>
                </View>

              </View>

            </View>

          </Page>
        </Document>
      </PDFViewer>

    </Card>
  );
}
*/
}

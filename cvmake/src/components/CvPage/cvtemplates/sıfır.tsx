import { Card } from "antd";
import React from "react";

export default function Sıfır(props: any) {

    //console.log("sıfır")
    return <Card style={{ height: "80vh" }}>
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
                    '\n        html,\n        body {\n        font-family: "Poppins", sans-serif;\n        font-size: 1.2em;\n        }\n        .fs-small {\n            font-size: 1em;\n        }\n        \n        .font-bold{\n            font-size: 1.3em;\n            font-weight: 600;\n        }\n        .float-left {\n            float:left;\n        }\n        .technology {\n            padding: 2px 8px;\n            margin-right: 15px;\n            display: flex;\n            align-items: center;\n            background-color: #fff;\n        }\n        .ls-2 {\n            letter-spacing: 2px;\n        }\n    '
            }}
        />
        <title>Resume</title>
        <div>
            <div style={{ display: "flex" }} className="px-4">
                <img style={{ width: "30vh" }} src={props.n.foto} />
                <h2 style={{ overflow: "hidden",
    fontSize: "1.5vw" }} className="mx-4 font-bold mt-4">
                    {props.n.temel.name}{" "}{props.n.temel.surname}
                </h2>
            </div>
            <hr />
            <div className="px-4">
                <div className="col-5 float-left bg-light p-4">
                    <h3 style={{ fontSize: "1vw" }} className="mb-3 ls-2">• INFO</h3>
                    <div style={{ display: "flex" }}>
                        <h4 style={{ fontSize: "0.5vw" }} className="m-0 text-secondary">Position:</h4>
                        <p style={{ fontSize: "0.4vw" }} className="m-0 mb-2">
                            {props.n.iş.ünvan}
                        </p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <h4 style={{ fontSize: "0.5vw" }} className="m-0 text-secondary">Location:</h4>
                        <p style={{ fontSize: "0.4vw" }} className="m-0 mb-2">
                            {props.n.temel.adres}
                        </p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <h4 style={{ fontSize: "0.5vw" }} className="m-0 text-secondary">Contact:</h4>
                        <p style={{ fontSize: "0.4vw" }} className="m-0 mb-2">
                            {props.n.temel.tel}
                        </p>
                    </div>
                    <div style={{marginBottom:"1.5vh" ,display: "flex" }}>
                        <h4 style={{ fontSize: "0.5vw" }} className="m-0 text-secondary">E-Mail:</h4>
                        <p style={{ fontSize: "0.4vw" }} className="m-0">
                            {props.n.temel.mail}
                        </p></div>
                    <h3 style={{ fontSize: "1vw" }} className="mb-3 ls-2">• SKILLS</h3>
                    <div className="d-flex flex-wrap">
                        {props.n.temel.nitelik}
                    </div>
                </div>
                <div className="col-7 float-left p-4">
                    <h3 style={{ fontSize: "1vw" }} className="mb-3 ls-2">• ABOUT</h3>
                    <p style={{ fontSize: "0.4vw" }} className="m-0">
                        {props.n.temel.ilgi}
                    </p>
                    <hr />
                    <h3 style={{ fontSize: "1vw" }} className="mb-3 ls-2">• WORK EXPERIENCE</h3>
                    {!props.n.işlist.length ?
                        <div>
                            <p style={{ fontSize: "0.4vw" }}>{props.n.iş.ünvan}</p >
                            <p style={{ fontSize: "0.4vw" }}>{props.n.iş.kurum}</p >
                            <p style={{ fontSize: "0.4vw" }}>{props.n.iş.baş}</p >
                            <p style={{ fontSize: "0.4vw" }}>{props.n.iş.bitiş}</p >
                            <p style={{ fontSize: "0.4vw" }}>{props.n.iş.desc}</p >
                        </div>
                        : props.n.işlist.map((item: any, i: any) => {
                            if (i == props.n.işlist.length - 1) {
                                return (
                                    <div key={i}>
                                        <p style={{ fontSize: "0.4vw" }}>{item.ünvan}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{item.kurum}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{item.baş}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{item.bitiş}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{item.desc}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{props.n.iş.ünvan}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{props.n.iş.kurum}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{props.n.iş.baş}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{props.n.iş.bitiş}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{props.n.iş.desc}</p>

                                    </div>

                                )
                            }
                            else {
                                return (
                                    <div>
                                        <p style={{ fontSize: "0.4vw" }}>{item.ünvan}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{item.kurum}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{item.baş}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{item.bitiş}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{item.desc}</p>

                                    </div>

                                )
                            }
                        })}
                    <hr />
                    <h3 style={{ fontSize: "1vw" }} className="mb-3 ls-2">• EDUCATION</h3>{!props.n.eğlist.length ?
                        <div style={ {display:"flex"}}>
                            <p style={{ fontSize: "0.4vw" }}>{props.n.eğitim.okul}-{props.n.eğitim.bölüm}</p>
                            <div style={{width:"1vw"}}></div>
                            <p style={{ fontSize: "0.4vw" }}>{props.n.eğitim.baş}-{props.n.eğitim.bitiş}</p>

                        </div>
                        : props.n.eğlist.map((item: any, i: any) => {
                            if (i == props.n.eğlist.length - 1) {

                                return (
                                    <div key={i}>
                                        <p style={{ fontSize: "0.4vw" }}>{item.okul}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{item.bölüm}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{item.baş}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{item.bitiş}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{props.n.eğitim.okul}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{props.n.eğitim.bölüm}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{props.n.eğitim.baş}</p>
                                        <p style={{ fontSize: "0.4vw" }}>{props.n.eğitim.bitiş}</p>

                                    </div>

                                )
                            }
                            else {
                                return (
                                    <div>
                                        <div>{item.okul}</div>
                                        <div>{item.bölüm}</div>
                                        <div>{item.baş}</div>
                                        <div>{item.bitiş}</div>

                                    </div>

                                )
                            }


                        })
                    }
                </div>
            </div>
        </div>
    </Card>

}

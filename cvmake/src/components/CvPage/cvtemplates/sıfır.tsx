
export default function Sıfır(props: any) {
    return (
        <div style={{ width: "60vh" }} >
            <div >
                <p >
                    Hakkında
                </p>
                <div style={{ width: "200vh", opacity: 1, transform: "rotate(-1.963427412997697e-16deg)", mixBlendMode: "normal", borderColor: "black", borderWidth: "0.3px", border: "solid", alignItems: "inherit" }}></div>
                <div style={{ height: "20vh" }}>

                    <div>
                        <div>{props.n.temel.name}</div>
                        <div>{props.n.temel.surname}</div>
                        <div>{props.n.temel.tel}</div>
                        <div>{props.n.temel.mail}</div>
                        <div>{props.n.temel.adres}</div>
                    </div>

                </div>
            </div>
            <div >
                <p >
                    Deneyim
                </p>
                <div style={{ opacity: 1, transform: "rotate(-1.963427412997697e-16deg)", mixBlendMode: "normal", borderColor: "black", borderWidth: "0.3px", border: "solid", alignItems: "inherit" }}></div>
                <div style={{ height: "20vh" }}>
                    {props.n.işlist.length ? props.n.işlist.map((item: any) => {
                        return (
                            <div>
                                <div>{item.ünvan}</div>
                                <div>{item.kurum}</div>
                                <div>{item.baş}</div>
                                <div>{item.bitiş}</div>
                                <div>{item.desc}</div>
                            </div>

                        )
                    }) : (
                        <div>
                            <div>{props.n.iş.ünvan}</div>
                            <div>{props.n.iş.kurum}</div>
                            <div>{props.n.iş.baş}</div>
                            <div>{props.n.iş.bitiş}</div>
                            <div>{props.n.iş.desc}</div>
                        </div>
                    )
                    }
                </div>
            </div>

            <div ></div>
            <p >
                Eğitim
            </p>
            <div style={{ opacity: 1, transform: "rotate(-1.963427412997697e-16deg)", mixBlendMode: "normal", borderColor: "black", borderWidth: "0.3px", border: "solid", alignItems: "inherit" }}></div>
            <div style={{ height: "20vh" }}>
                {props.n.eğlist.length ? props.n.eğlist.map((item: any) => {
                    return (
                        <div>
                            <div>{item.okul}</div>
                            <div>{item.bölüm}</div>
                            <div>{item.baş}</div>
                            <div>{item.bitiş}</div>

                        </div>

                    )
                }) :
                    <div>
                        <div>{props.n.eğitim.okul}</div>
                        <div>{props.n.eğitim.bölüm}</div>
                        <div>{props.n.eğitim.baş}</div>
                        <div>{props.n.eğitim.bitiş }</div>

                    </div>
                }
            </div>
        </div>
    )
}

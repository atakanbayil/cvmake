import { Button } from "antd";
import axios from "axios";
import saveAs from "file-saver";
import React from "react";
import { Link } from "react-router-dom";
export default function Headers(props) {
  const createAndDownloadPdf = () => {
    const data = props.user;
    axios
      .post("http://localhost:5000/create-pdf", data)
      .then(() =>
        axios.get("http://localhost:5000/fetch-pdf", { responseType: "blob" })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "newPdf.pdf");
      });
  };

  return (
    <div style={{ height: "13vh", backgroundColor: "#001529", color: "white" }}>
      <div style={{ textAlign: "center" }}>HEADER</div>
      <Link to="/final">
        <Button
          onClick={createAndDownloadPdf}
          style={{ position: "fixed", right: "8vh" }}
        >
          Download
        </Button>
      </Link>
    </div>
  );
}

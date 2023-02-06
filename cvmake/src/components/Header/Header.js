import { Button } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import axios from "axios";
import saveAs from "file-saver";
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

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
    <Menu  mode="horizontal">
      <Link to="/cv">
        <MenuItem style={{left:"2vw"}}>Cv Oluştur</MenuItem>
      </Link>
      <Link to="/cvindir">
        <MenuItem style={{position:"fixed",right:"2vw"}}>Cv Önizleme</MenuItem>
      </Link>
    </Menu>
  );
}

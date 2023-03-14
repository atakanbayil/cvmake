const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
 

var pdfTemplate = require("./documents/index2");

const app = express();

const port = 5000;
const multer = require("multer")
const upload = multer({dest:"uploads/"})
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
let img = "file://"+__dirname.replaceAll("\\","/")
app.post('/api/image',upload.single("image"),(req,res)=>{
    img += req.file.destination+req.file.filename
})

app.post('/create-pdf', (req, res) => {
    console.log("backend");
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(port, () => {
console.log(`Listening on port`+port)});
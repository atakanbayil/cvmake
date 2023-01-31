
import express from "express"
import mysql from "mysql"

const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"19982009Ab",
    database:"test"
})
const app = express()
app.use(express.json)
app.get("/users",(req,res)=>{
    const q = "SELECT * FROM users"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.listen(8800,()=>{
    console.log("connected");
    
})
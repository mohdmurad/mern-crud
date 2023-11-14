import 'dotenv/config'
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import router from "./routes/bookRoute.js"
import "./db/conn.js"  
const port  = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())
app.use("/books", router)
app.listen(port, ()=>{
    console.log("conn")
})
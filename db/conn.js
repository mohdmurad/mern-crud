
import mongoose from "mongoose";
const url = process.env.URL
mongoose.connect(url).then(()=>{
    console.log("connected to database")
}).catch(()=>{
    console.log("Not connected")
})


const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())
const Router = require("./Routers")

app.listen(5000,()=>{
    console.log("server is up and running on port 5000")
})

app.use("/train",Router)
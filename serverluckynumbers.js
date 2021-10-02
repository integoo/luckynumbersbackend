require('dotenv').config()
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const { Client, Pool } = require('pg')

const pool = new Pool({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT
})


//middleware
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
        extended:true
})
)

app.use(cors())
app.options('*',cors())




app.get("/api/helloworld",(req,res)=>{
	res.send("Hello World !!!!!")

})

app.post("/api/grabaaccesos",async(req,res)=>{
console.log("SI")
	const ip = req.body.ip

	console.log(ip)
	res.status(200).json({"message":"Success!!!"})
})

const PORT = process.env.PORT || 4010

app.listen(PORT,()=> {console.log(`Server is running ..... on Port ${PORT}`)})


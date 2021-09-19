require('dotenv').config()
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')


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

app.post("/api/alta",(req,res)=>{
	const usuario = req.body.usuario
	console.log(usuario)
	res.send(usuario)
})

const PORT = process.env.PORT || 4010

app.listen(PORT,()=> {console.log(`Server is running ..... on Port ${PORT}`)})


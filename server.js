import express from "express"
import Routes from "./routes"
import bodyParser from "body-parser"

const app = express()

app.use('/', Routes)

app.listen(5000)
console.log('running on http://localhost:5000')
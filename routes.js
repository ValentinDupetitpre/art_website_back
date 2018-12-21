import express from "express"
import Gallery from "./controllers/gallery"
const Routes = express.Router()

Routes.get('/', Gallery.getAll)

Routes.get('/gallery', Gallery.getOne)

export default Routes
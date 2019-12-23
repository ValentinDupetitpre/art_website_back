import express from "express"
import Gallery from "./controllers/gallery"
import Contact from "./controllers/contact"
import Home from "./controllers/home"
import Collection from "./controllers/collection"
import Article from "./controllers/article"

const Routes = express.Router()

//Home page
Routes.get('/home-data/text', Home.getText)
Routes.get('/home-data/pics', Home.getPics)

// Collection page
Routes.get('/collection/title', Collection.getText)
Routes.get('/collection/:id/pic', Collection.getPics)

//Gallery pages
Routes.get('/gallery/:id/text', Gallery.getTextFromCollectionOfPaintings)
Routes.get('/painting/title', Gallery.getAllText)
Routes.get('/painting/:id/smallpic', Gallery.getSmallPics)
Routes.get('/painting/:id/pic', Gallery.getPic)

//Article page
Routes.get('/article/title', Article.getAllTitles)
Routes.get('/article/:id/Pic', Article.getPics)


//Contact page
Routes.post('/contact', Contact.send)

export default Routes

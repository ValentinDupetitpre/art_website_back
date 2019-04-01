import express from "express"
// import Routes from "./routes"
import dotenv from 'dotenv'

import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import session from 'express-session'
import { ExpressOIDC } from '@okta/oidc-middleware'
dotenv.config()
import sharp from 'sharp'

import Sequelize from 'sequelize'
import epilogue from 'epilogue'
const ForbiddenError = epilogue.Errors.ForbiddenError


const app = express()
const port = 5000

app.use(session({
    secret: process.env.RANDOM_SECRET_WORD,
    resave: true,
    saveUninitialized: false
}))

const oidc = new ExpressOIDC({
    issuer: `${process.env.OKTA_ORG_URL}/oauth2/default`,
    client_id: process.env.OKTA_CLIENT_ID,
    client_secret: process.env.OKTA_CLIENT_SECRET,
    redirect_uri: process.env.REDIRECT_URL,
    scope: 'openid profile',
    routes: {
        callback: {
            path: '/authorization-code/callback',
            defaultRedirect: '/admin'
        }
    }
})

app.use(oidc.router);
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));

// app.use('/', Routes)
app.get('/home', (req, res) => {
    res.send('<h1>Welcome!!</div><a href="/login">Login</a>');
});

app.get('/admin', oidc.ensureAuthenticated(), (req, res) =>{
    res.send('Admin page');
});

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/home');
});
  
app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/collection/title', (req, res) => {
    const response = Collection.findAll({
        attributes: ['id', 'name'] 
    })
    return response.then(collec=> res.json(collec)); 
});

app.get('/painting/title', (req, res) => {
    const response = Paintings.findAll({
        attributes: ['id', 'name'] 
    })
    return response.then(painting=> res.json(painting)); 
});

app.get('/gallery/:id/text', (req, res)=>{
    const response = Paintings.findAll({
        where:{
            collectionId: req.params.id
        },
        attributes: ['id','name','detail','likes']
    })
    return response.then(paintings => res.json(paintings))
})

app.get('/painting/:id/smallpic', (req,res)=>{
    const response = Paintings.findAll({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'smallPic']
    })
    return response.then(painting=>res.json(painting))
})

app.get('/gallery/:id', (req, res)=>{
    const response = Paintings.findAll({
        where:{
            collectionId: req.params.id
        }
    })
    return response.then(paintings => res.json(paintings));
});

const database = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    operatorsAliases: false,
});

const Paintings = database.define('paintings', {
    name: Sequelize.STRING,
    pic: Sequelize.BLOB,
    smallPic: Sequelize.BLOB,
    detail: Sequelize.TEXT,
    likes: Sequelize.INTEGER,
});

const Collection = database.define('collections', {
    name: Sequelize.STRING,
    detail: Sequelize.TEXT,
    pic: Sequelize.BLOB,
});

const Home = database.define('home', {
    title: Sequelize.STRING,
    title_bloc1: Sequelize.STRING,
    title_bloc2: Sequelize.STRING,
    title_bloc3: Sequelize.STRING,
    bloc1: Sequelize.TEXT,
    bloc2: Sequelize.TEXT,
    bloc3: Sequelize.TEXT,
    pic1: Sequelize.BLOB,
    pic2: Sequelize.BLOB,
    pic3: Sequelize.BLOB,
})

Collection.hasMany(Paintings, { onDelete: 'cascade', hooks:true });
Paintings.belongsTo(Collection); 

epilogue.initialize({ app, sequelize: database });

const PaintingsResource = epilogue.resource({
    model: Paintings,
    endpoints: ['/painting', '/painting/:id']
})

const CollectionResource = epilogue.resource({
    model: Collection,
    endpoints: ['/collection', '/collection/:id'],
});

const HomeResource = epilogue.resource({
    model: Home,
    endpoints: ['/home-data', '/home-data/:id'],
})

PaintingsResource.create.write.before(function(req, res, context) {
    return new Promise(function(resolve, reject) {
        const uri = req.body.pic.split(';base64,').pop()
        const img = Buffer.from(uri, 'base64');
        sharp(img)
        .resize({ 
            width: 350,
            height: 380,
            fit: 'contain' ,
            background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .toBuffer({ resolveWithObject: true })
        .then(({ data, info }) => { 
            req.body.smallPic = data
            req.body.pic = img
            resolve(context.continue)
         })
        .catch(err => console.log(err));
    })
});

CollectionResource.create.auth(function (req, res, context) {
    return new Promise(function (resolve, reject) {
        resolve(context.continue);
    })
});

HomeResource.update.write.before(function(req, res, context) {
    return new Promise(function(resolve, reject) {
        const uri1 = req.body.pic1.split(';base64,').pop()
        const uri2 = req.body.pic2.split(';base64,').pop()
        const uri3 = req.body.pic3.split(';base64,').pop()
        const img1 = Buffer.from(uri1, 'base64');
        const img2 = Buffer.from(uri2, 'base64');
        const img3 = Buffer.from(uri3, 'base64');
        req.body.pic1 = img1;
        req.body.pic2 = img2;
        req.body.pic3 = img3;
        
        resolve(context.continue);
    })
})

// CollectionResource.all.auth(function (req, res, context) {
//     checkAuth(req, res, context);
//     res.send('coucou')
// });

const checkAuth = (req, res, context)=>{
    return new Promise(function (resolve, reject) {
        if (!req.isAuthenticated()) {
            res.status(401).send({ message: "Unauthorized" });
            resolve(context.stop);
        } else {
            resolve(context.continue);
        }
    })
}

database.sync().then(() => {
    oidc.on('ready', () => {
        app.listen(port, () => console.log(`My App listening on port ${port}!`))
    });
});

oidc.on('error', err => {
    // An error occurred while setting up OIDC
    console.log("oidc error: ", err);
});

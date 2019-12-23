import express from "express"
import Routes from "./routes"
import dotenv from 'dotenv'

import cors from 'cors'
import bodyParser from 'body-parser'
import session from 'express-session'
import { ExpressOIDC } from '@okta/oidc-middleware'
dotenv.config()

import epilogue from 'epilogue'
const ForbiddenError = epilogue.Errors.ForbiddenError

import database from './config/database'
const app = express()
const port = process.env.PORT || 5000

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

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build/index.html'), function(err) {
//       if (err) {
//         res.status(500).send(err)
//       }
//     })
//   })

app.use('/', Routes)


import Home from './models/Home'
import Collection from './models/Collection'
import Paintings from './models/Paintings'
import galleryMiddleware from './controllers/gallery-middleware'
import collectionMiddleware from './controllers/collection-middleware'
import homeMiddleware from './controllers/home-middleware'
import Article from './models/Article'
import articleMiddleware from './controllers/article-middleware'

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

const ArticleResource = epilogue.resource({
    model: Article,
    endpoints: ['/article', '/article/:id']
})

PaintingsResource.use(galleryMiddleware)
CollectionResource.use(collectionMiddleware)
HomeResource.use(homeMiddleware)
ArticleResource.use(articleMiddleware)


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

// const fs = require('fs')
// const readStream = fs.createReadStream('./init_bdd.sql', 'utf8')

// let data = ''
// readStream.on('data', (chunk) => {
//     data += chunk;
// }).on('end', () => {
//     database.query(data)
// });

database.sync().then(() => {
    // oidc.on('ready', () => {
        app.listen(port, () => console.log(`My App listening on port ${port}!`))
    // });
});

oidc.on('error', err => {
    // An error occurred while setting up OIDC
    console.log("oidc error: ", err);
});

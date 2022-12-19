//============================|(IMPORT'S)|=====================================//
import express, {NextFunction, Request,Response} from "express"
import routes from "./Routes/routes"
import connectToMongoDB from "./database/database";
import { Deus } from "./Routes/routes";
import helmet from "helmet";
import compression from "compression";
import cors from "cors"
// import path from "path";
// import cookieSession from "cookie-session";
// import Keygrip from "keygrip"
//--------------------------------------------------------------------------//
const app = express();  // Transformando express em "app" 
connectToMongoDB()      //  Conectando com o banco de dados
app.use(express.json()) // Pedido pra q o express aceite "Json"
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST")
    app.use(cors())
    next()
})






app.use(compression()) // framework de segurança
app.use(routes)        // Dizendo pra o express usar nossas rotas
app.use(helmet())      // framework de segurança


//[[[[[[[[]]]][]][]][[[[[[[[[cokkies!Importante[[[[[[]]]][[[[]]//

// app.use(cookieSession({name: 'PickBoyym7', keys: []}))
// app.set('trust proxy', 1) // trust first proxy

// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1', 'key2']
// }))

// app.get('/', function (req:Request, res:Response, next:NextFunction) {
//   // Update views
//   req.get. = (req.session.views || 0) + 1

//   // Write response
//   res.end(req.session.views + ' views')
//   var cookieSession = require('cookie-session')
// var express = require('express')

// var app = express()

// app.set('trust proxy', 1) // trust first proxy

// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1', 'key2']
// }))

// app.use(cookieSession({
//     name: 'session',
//     keys: new Keygrip(['key1', 'key2'], 'SHA384', 'base64')
//   }))

// // This allows you to set req.session.maxAge to let certain sessions
// // have a different value than the default.
// app.use(function (req, res, next) {
//   req.sessionOptions.maxAge = req.session.maxAge || req.sessionOptions.maxAge
//   next()
// })

//---------------------------------------------------------------------------------------------

//=================|Iniciando o server|============================//
app.listen(3000, () => {
    console.log(`Server está rodando na porta 3000 ${Deus}`)  
}); 
//})

export default app      // Exportando noss express por padrão.
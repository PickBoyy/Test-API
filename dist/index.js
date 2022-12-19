"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//============================|(IMPORT'S)|=====================================//
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./Routes/routes"));
const database_1 = __importDefault(require("./database/database"));
const routes_2 = require("./Routes/routes");
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
// import path from "path";
// import cookieSession from "cookie-session";
// import Keygrip from "keygrip"
//--------------------------------------------------------------------------//
const app = (0, express_1.default)(); // Transformando express em "app" 
(0, database_1.default)(); //  Conectando com o banco de dados
app.use(express_1.default.json()); // Pedido pra q o express aceite "Json"
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST");
    app.use((0, cors_1.default)());
    next();
});
app.use((0, compression_1.default)()); // framework de segurança
app.use(routes_1.default); // Dizendo pra o express usar nossas rotas
app.use((0, helmet_1.default)()); // framework de segurança
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
    console.log(`Server está rodando na porta 3000 ${routes_2.Deus}`);
});
//})
exports.default = app; // Exportando noss express por padrão.

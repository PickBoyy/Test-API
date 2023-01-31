//============================|(IMPORT'S)|=====================================//
import express, {NextFunction, Request,Response} from "express"
import routes from "./Routes/routes"
import connectToMongoDB from "./database/database";
import { Deus } from "./Routes/routes";
import helmet from "helmet";
import compression from "compression";
import cors from "cors"
import React from "react";

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




//---------------------------------------------------------------------------------------------

//=================|Iniciando o server|============================//
const porta = 8080
app.listen(porta, () => {
    console.log(`Server está rodando na porta ${porta} ${Deus}`)  
}); 
//})

export default app      // Exportando express por padrão.
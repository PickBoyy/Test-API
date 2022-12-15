//============================|(IMPORT'S)|=====================================//
import express, {Request,Response} from "express"
import routes from "./Routes/routes"
import connectToMongoDB from "./database/database";
import { Deus } from "./Routes/routes";
import helmet from "helmet";
import compression from "compression";
//--------------------------------------------------------------------------//
const app = express();  // Transformando express em "app" 
connectToMongoDB()      //  Conectando com o banco de dados
app.use(express.json()) // Pedido pra q o express aceite "Json"
app.use(compression()) // framework de segurança
app.use(routes)        // Dizendo pra o express usar nossas rotas
app.use(helmet())      // framework de segurança

app.route('/')
.get((req:Request,res:Response) => {
    res.sendFile(process.cwd() + '../index.html');
});



app.listen(3000, () => { // Conectando ao nosso server localhost:3000
    console.log(`Server está rodando na porta 3000 ${Deus}`)
}); 

export default app      // Exportando noss express por padrão.
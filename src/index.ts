import express from "express"
import routes from "./Routes/routes"
import connectToMongoDB from "./database/database";
import { Deus } from "./Routes/routes";

const app = express();
connectToMongoDB()
app.use(express.json())
app.use(routes)




app.listen(3000, () => {
    console.log(`Server está rodando na porta 3000 ${Deus}`)
}); 

export default app
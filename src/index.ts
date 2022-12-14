import express from "express"
import routes from "./Routes/routes"
import connectToMongoDB from "./database/database";

const app = express();
connectToMongoDB()
app.use(express.json())
app.use(routes)




app.listen(7777, () => {
    console.log("Server está rodando na porta 7777")
}); 

export default app
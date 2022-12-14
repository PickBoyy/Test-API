import express from "express"
import routes from "./Routes/routes"

const app = express();

app.use(express.json())
app.use(routes)




app.listen(7777, () => {
    console.log("Server está rodando na porta 7777")
}); 

export default app
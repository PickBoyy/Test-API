import { Router } from "express"
import express, { Request, Response }  from "express";
import controllerRoutes from "../controllers/controllerRoutes";

const routes = Router()
routes.get('/',(req, res) =>{
    res
})
routes.get('/personagem', controllerRoutes.getAllPerson);
routes.post('/personagem', controllerRoutes.newPerson);
// routes.delete('/personagem', controllerRoutes.deleteAllPersonagem);

// routes.get('/personagem/:nome', controllerRoutes.getOnePersonagem);
// routes.post('personagem/:nome', controllerRoutes.newComment);
// routes.delete('personagem/:nome', controllerRoutes.deleteOnePersonagem);

export default routes
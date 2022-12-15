import { Router } from "express"
import express, { Request, Response }  from "express";
import controllerRoutes from "../controllers/controllerRoutes";
import multer from "multer";

const upload = multer()
const routes = Router()
export const Deus = "Sr.PickBoyy"

routes.get('/',(req, res) =>{
    res.json({message:`Seja bem vindo novamente ${Deus}`})
})
routes.get('/personagem', controllerRoutes.getAllPerson);
routes.post('/personagem', upload.none(), controllerRoutes.newPerson);
routes.delete('/personagem', controllerRoutes.deleteAllPerson);

 routes.get('/personagem/:nome', controllerRoutes.getOnePerson);
 routes.delete('/personagem/:nome',controllerRoutes.deleteOnePerson);

export default routes
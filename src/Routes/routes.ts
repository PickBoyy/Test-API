//============================|(IMPORT'S)|=====================================//
import { Router } from "express"
import express, { Request, Response }  from "express";
import controllerRoutes from "../controllers/controllerRoutes";
import multer from "multer";
//============================|(Const's)|=====================================//
const upload = multer()
const routes = Router()
export const Deus = "Sr.PickBoyy"
//============================|(Rota raiz)|=====================================//
routes.get('/',(req:Request, res:Response) =>{
    res.json({message:`Seja bem vindo novamente ${Deus}`})
})
//============================|(Rotas)|=====================================//
routes.get('/personagem', controllerRoutes.getAllPerson);
routes.post('/personagem', upload.none(), controllerRoutes.newPerson);
routes.delete('/personagem', controllerRoutes.deleteAllPerson);

 routes.get('/personagem/:nome', controllerRoutes.getOnePerson);
 routes.delete('/personagem/:nome',upload.none(), controllerRoutes.deleteOnePerson);
//--------------------------------------------------------------------------//
export default routes     // exportando rotas por padrão.
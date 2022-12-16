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
routes.get('/personagens', controllerRoutes.getAllPerson);
routes.post('/create', upload.none(), controllerRoutes.newPerson);
routes.delete('/deleteall', controllerRoutes.deleteAllPerson);

 routes.get('/personagem/:nome', controllerRoutes.getOnePerson);
 routes.delete('/delete/:nome', controllerRoutes.deleteOnePerson);
//  routes.put('/personagem/:nome', controllerRoutes.updatePerson);
//--------------------------------------------------------------------------//
export default routes     // exportando rotas por padrão.
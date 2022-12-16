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
    res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500/src/Front/pages-HTML/create.html')
    res.json({message:`Seja bem vindo novamente ${Deus}`})
})
//============================|(Rotas)|=====================================//
routes.get('/personagem', controllerRoutes.getAllPerson);
routes.post('/personagem', upload.none(), controllerRoutes.newPerson);
routes.delete('/personagem', controllerRoutes.deleteAllPerson);

 routes.get('/personagem/:nome', controllerRoutes.getOnePerson);
 routes.delete('/personagem/:nome', controllerRoutes.deleteOnePerson);
//  routes.put('/personagem/:nome', controllerRoutes.updatePerson);
//--------------------------------------------------------------------------//
export default routes     // exportando rotas por padrão.
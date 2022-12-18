"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deus = void 0;
//============================|(IMPORT'S)|=====================================//
const express_1 = require("express");
const controllerRoutes_1 = __importDefault(require("../controllers/controllerRoutes"));
const multer_1 = __importDefault(require("multer"));
//============================|(Const's)|=====================================//
const upload = (0, multer_1.default)();
const routes = (0, express_1.Router)();
exports.Deus = "Sr.PickBoyy";
//============================|(Rota raiz)|=====================================//
routes.get('/', (req, res) => {
    res.json({ message: `Seja bem vindo novamente ${exports.Deus}` });
});
//============================|(Rotas)|=====================================//
routes.get('/personagens', controllerRoutes_1.default.getAllPerson);
routes.post('/create', upload.none(), controllerRoutes_1.default.newPerson);
routes.delete('/deleteall', controllerRoutes_1.default.deleteAllPerson);
routes.get('/personagem/:nome', controllerRoutes_1.default.getOnePerson);
routes.delete('/delete/:nome', controllerRoutes_1.default.deleteOnePerson);
//  routes.put('/personagem/:nome', controllerRoutes.updatePerson);
//--------------------------------------------------------------------------//
exports.default = routes; // exportando rotas por padrão.

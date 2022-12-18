"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//============================|(IMPORT'S)|=====================================//
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./Routes/routes"));
const database_1 = __importDefault(require("./database/database"));
const routes_2 = require("./Routes/routes");
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
//--------------------------------------------------------------------------//
const app = (0, express_1.default)(); // Transformando express em "app" 
(0, database_1.default)(); //  Conectando com o banco de dados
app.use(express_1.default.json()); // Pedido pra q o express aceite "Json"
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "meu penis");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    app.use((0, cors_1.default)());
    next();
});
app.use((0, compression_1.default)()); // framework de segurança
app.use(routes_1.default); // Dizendo pra o express usar nossas rotas
app.use((0, helmet_1.default)()); // framework de segurança
//=================|Iniciando o server|============================//
app.listen(3000, () => {
    console.log(`Server está rodando na porta 3000 ${routes_2.Deus}`);
});
exports.default = app; // Exportando noss express por padrão.

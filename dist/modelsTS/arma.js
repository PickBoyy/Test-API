"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arma = void 0;
const dados_1 = require("../scripts/dados");
class Arma {
    constructor(nome, price, tipo) {
        this.nome = nome;
        this.price = price;
        this.dado = (0, dados_1.D8)();
        this.tipo = tipo;
    }
}
exports.Arma = Arma;

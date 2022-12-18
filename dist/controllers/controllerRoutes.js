"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const personagem_1 = __importDefault(require("../models/personagem"));
//------------------------------------------------------------------------------------//
//========================|Pegar todos os Personagens do banco|===========================================//
const getAllPerson = (req, res) => {
    personagem_1.default.find({}, (err, data) => {
        if (err) { //aprovado!
            return res.json({ Error: err });
        }
        return res.json(data);
    });
};
//------------------------------------------------------------------------------------//
//========================|Criar um novo personagem|===========================================//
const newPerson = (req, res) => {
    personagem_1.default.findOne({ nome: req.body.nome }, (err, data) => {
        if (!data) {
            const newPerson = new personagem_1.default(req.body); //aprovado!
            newPerson.save((err, data) => {
                if (err)
                    return res.json({ Error: err });
                return res.json(personagem_1.default);
            });
        }
        else {
            if (err)
                return res.json(`Algo deu errado tente novamente ${err}`);
            return res.json({ message: "Personagem já existe." });
        }
    });
};
//------------------------------------------------------------------------------------//
//========================|!DELETAR TODOS OS PERSONAGENS!|===========================================//
const deleteAllPerson = (req, res) => {
    personagem_1.default.deleteMany({}, err => {
        if (err) {
            return res.json({ message: "Complete delete failed" }); //aprovado!
        }
        return res.json({ message: "Complete delete successful" });
    });
};
//------------------------------------------------------------------------------------//
//========================|Pegar uma pesonagem pelo nome|===========================================//
const getOnePerson = (req, res) => {
    let nome = req.params.nome;
    personagem_1.default.findOne({ nome: nome }, (err, data) => {
        if (err || !data) {
            return res.json({ message: "Personagem não existe." });
        }
        else {
            return res.json(data);
        }
    });
};
//------------------------------------------------------------------------------------//
//========================|Deleta um personagem pelo nome|===========================================//
const deleteOnePerson = (req, res) => {
    const nome = req.params.nome;
    personagem_1.default.deleteOne({ nome: nome }, (err, data) => {
        if (!data) {
            return res.status(400).json({ message: "Esse personagem não existe" });
        }
        else if (err) {
            return res.json(`Alguma dedu errado, tente novamente. ${err}`);
        }
        else {
            return res.json({ message: "Personagem deletado com sucesso" });
        }
    });
};
//------------------------------------------------------------------------------------//
//========================|Atualizar um personagem pelo nome|===========================================//
// const updatePerson = (req:Request, res:Response) => {
// }
//------------------------------------------------------------------------------------//
exports.default = { getAllPerson, newPerson, deleteAllPerson, getOnePerson, deleteOnePerson };

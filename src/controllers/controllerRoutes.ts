import { NextFunction,Request,response,Response } from "express"
import mongoose, { Error } from "mongoose"
import  Personagem, { IPersonagem,} from "../models/personagem"
//------------------------------------------------------------------------------------//
//========================|Pegar todos os Personagens do banco|===========================================//
const getAllPerson = (req:Request, res:Response) => {
    Personagem.find({}, (err:Error,data:IPersonagem) => {
        if(err) {
            return res.json({Error:err});
        }
        return res.json(data)
    })
};
//------------------------------------------------------------------------------------//
//========================|Criar um novo personagem|===========================================//
const newPerson = (req:Request,res:Response) => {
Personagem.findOne({nome: req.body.nome }, (err:Error, data:IPersonagem) => {
        if(!data) {
            const newPerson = new Personagem({
                nomeDoJogador:req.body.nomeDoJogador,
                nome: req.body.nome,
                raca: req.body.raca,
                classe: req.body.classe,
                forca: req.body.forca,
                destreza: req.body.destreza,
                constituicao: req.body.constituicao,
                inteligencia: req.body.inteligencia,
                sabedoria: req.body.sabedoria,
                carisma: req.body.carisma,
            })
            newPerson.save((err,data) => {
                if(err) return res.json({Error: err});
                return res.json(Personagem)
            })
        } else {
            if(err) return res.json(`Algo deu errado tente novamente ${err}`)
            return res.json({message:"Personagem já existe."})
        }
})
};
//------------------------------------------------------------------------------------//
//========================|!DELETAR TODOS OS PERSONAGENS!|===========================================//
const deleteAllPerson = (req:Request, res:Response) => {
    Personagem.deleteMany({}, err => {
        if(err) {
          return res.json({message: "Complete delete failed"});
        }
        return res.json({message: "Complete delete successful"});
    })
};
//------------------------------------------------------------------------------------//
//========================|Pegar uma pesonagem pelo nome|===========================================//
const getOnePerson = (req:Request, res:Response) => {
    let nome = req.params.nome; 

    Personagem.findOne({nome:nome}, (err:Error, data:IPersonagem) => {
    if(err || !data) {
        return res.json({message: "Personagem não existe."});
    }
    else return res.json(data); 
    });
};
//------------------------------------------------------------------------------------//
//========================|Deleta um personagem pelo nome|===========================================//
const deleteOnePerson = (req:Request, res:Response) => {
    let nome = req.params.nome; 

    Personagem.deleteOne({nome:nome}, (err:Error, data:IPersonagem) => {
    if(!data) {
        return res.status(400).json({message: "Esse personagem não existe"});
    }
   
    else if (err) {
        return res.json(`Alguma dedu errado, tente novamente. ${err}`);
    }
    else {return res.json({message: "Personagem deletado com sucesso"});
    }
    });
};

export default {getAllPerson, newPerson,deleteAllPerson,getOnePerson,deleteOnePerson} 
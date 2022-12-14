import { NextFunction,Request,Response } from "express"

const getAllPerson = (req:Request, res:Response, next:NextFunction) => {
    return res.json({message:"Olá"})
}

const newPerson = (req:Request,res:Response, next:NextFunction) => {

}

export default {getAllPerson, newPerson}
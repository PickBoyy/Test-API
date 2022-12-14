import {IArma} from '../modelsTS/arma'
import mongoose from 'mongoose'

export interface IPersonagem {
    nomeDoJogador:string;
    nome:string;
    raca:string;
    classe:string;
    nivel:number;
    experiencia:number;
    //
    forca:number;
    destreza:number;
    constituicao:number;
    inteligencia:number;
    sabedoria:number;
    carisma:number;
    //
    modforca:number;
    moddestreza:number;
    modconstituicao:number;
    modinteligencia:number;
    modsabedoria:number;
    modcarisma:number;
    //
    PontosDeVida:number;
    ClasseDeArmadura:number;
    Arma: IArma;
}

const personagemSchema = new mongoose.Schema<IPersonagem>({
    
    nomeDoJogador: {
        type: String,
        required:true
    },
    nome: {
        type: String,
        required:true,
        unique: true
    },
    raca: {
        type: String,
        required:true
    },
    classe: {
        type: String,
        required:true
    },
    nivel: {
        type: Number,
        required:true
    },
    experiencia: {
        type: Number,
        required:true
    },
    // 
    forca: {
        type: Number,
        required:true
    },
    destreza: {
        type: Number,
        required:true
    },
    constituicao: {
        type: Number,
        required:true
    },
    inteligencia: {
        type: Number,
        required:true
    },
    sabedoria: {
        type: Number,
        required:true
    },
    carisma: {
        type: Number,
        required:true
    },
    //
    modforca: {
        type: Number,
        
    },
    moddestreza: {
        type: Number,
        
    },
    modconstituicao: {
        type: Number,
        
    },
    modinteligencia: {
        type: Number,

    },
    modsabedoria: {
        type: Number,
        
    },
    modcarisma: {
        type: Number,

    },
    //
    PontosDeVida: {
        type: Number,

    },
    ClasseDeArmadura: {
        type: Number,
    
    }
});

personagemSchema.pre('save',function(next) {
    if (this.classe == "barbaro") {
        this.PontosDeVida = this.nivel * 12;
    }
    else if (this.classe == "bardo") {
       this.PontosDeVida = this.nivel * 8;
    }
    else if (this.classe == "clerigo") {
       this.PontosDeVida = this.nivel * 8;
    }
    else if (this.classe == "druid") {
       this.PontosDeVida = this.nivel * 12;
    }
    else if (this.classe == "lutador") {
       this.PontosDeVida = this.nivel * 10;
    }
    else {
       this.PontosDeVida = this.nivel * 6;
    }
    next()
})

personagemSchema.pre('save',function(next) {
//------------------------------------------------------------------------
    var modforca =  Math.floor(( this.forca -10) /2)
    this.modforca = modforca
//------------------------------------------------------------------------
    var moddestreza =  Math.floor(( this.destreza -10) /2)
    this.moddestreza = moddestreza
//------------------------------------------------------------------------
    var modconstituicao =  Math.floor(( this.constituicao -10) /2)
    this.modconstituicao = modconstituicao
//------------------------------------------------------------------------
    var modinteligencia =  Math.floor(( this.inteligencia -10) /2)
    this.modinteligencia = modinteligencia
//------------------------------------------------------------------------
    var modsabedoria =  Math.floor(( this.sabedoria -10) /2)
    this.modsabedoria = modsabedoria
//------------------------------------------------------------------------
    var modcarisma =  Math.floor(( this.carisma -10) /2)
    this.modcarisma = modcarisma
//------------------------------------------------------------------------
    next()
}) 

personagemSchema.pre('save',function(next){
      this.ClasseDeArmadura = 10 + this.moddestreza
     next()
})


const Personagem = mongoose.model <IPersonagem>('Personagem',personagemSchema);

export default Personagem

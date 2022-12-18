"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const personagemSchema = new mongoose_1.default.Schema({
    nomeDoJogador: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true,
        unique: true
    },
    raca: {
        type: String,
        required: true
    },
    classe: {
        type: String,
        required: true
    },
    nivel: {
        type: Number,
        default: 1
    },
    experiencia: {
        type: Number,
        default: 0
    },
    // 
    forca: {
        type: Number,
        required: true
    },
    destreza: {
        type: Number,
        required: true
    },
    constituicao: {
        type: Number,
        required: true
    },
    inteligencia: {
        type: Number,
        required: true
    },
    sabedoria: {
        type: Number,
        required: true
    },
    carisma: {
        type: Number,
        required: true
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
        type: Number
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
    },
    createAt: {
        type: Date,
        default: Date.now
    },
});
personagemSchema.pre('save', function (next) {
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
    next();
});
personagemSchema.pre('save', function (next) {
    //------------------------------------------------------------------------
    var modforca = Math.floor((this.forca - 10) / 2);
    this.modforca = modforca;
    //------------------------------------------------------------------------
    var moddestreza = Math.floor((this.destreza - 10) / 2);
    this.moddestreza = moddestreza;
    //------------------------------------------------------------------------
    var modconstituicao = Math.floor((this.constituicao - 10) / 2);
    this.modconstituicao = modconstituicao;
    //------------------------------------------------------------------------
    var modinteligencia = Math.floor((this.inteligencia - 10) / 2);
    this.modinteligencia = modinteligencia;
    //------------------------------------------------------------------------
    var modsabedoria = Math.floor((this.sabedoria - 10) / 2);
    this.modsabedoria = modsabedoria;
    //------------------------------------------------------------------------
    var modcarisma = Math.floor((this.carisma - 10) / 2);
    this.modcarisma = modcarisma;
    //------------------------------------------------------------------------
    next();
});
personagemSchema.pre('save', function (next) {
    this.ClasseDeArmadura = 10 + this.moddestreza;
    next();
});
const Personagem = mongoose_1.default.model('Personagem', personagemSchema);
exports.default = Personagem;

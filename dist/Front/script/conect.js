"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const url = "http://localhost:3000/personagens/";
const main = document.getElementById('#main');
function getPersons() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            const data = yield response.json();
            console.log(data);
            show(data);
        }
        catch (error) {
            console.log(error);
        }
    });
}
getPersons();
function show(personagens) {
    let output = '';
    main.innerHTML = personagens;
}

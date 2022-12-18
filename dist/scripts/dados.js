"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.D20 = exports.D10 = exports.D8 = exports.D4 = void 0;
function D4() {
    var D4 = Math.floor(Math.random() * 4) + 1;
    return D4;
}
exports.D4 = D4;
function D8() {
    var D8 = Math.floor(Math.random() * 8) + 1;
    return D8;
}
exports.D8 = D8;
function D10() {
    var D10 = Math.floor(Math.random() * 10) + 1;
    return D10;
}
exports.D10 = D10;
function D20() {
    var D20 = Math.floor(Math.random() * 20) + 1;
    return D20;
}
exports.D20 = D20;

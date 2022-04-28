"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Descontador = void 0;
const rxjs_1 = require("rxjs");
const conversion_1 = require("./conversion");
/**
 * Descuenta de 1 en 1 hasat el valor establecido
 */
class Descontador {
    /**
     * @ignore
     */
    constructor(valor = 5) {
        /**
         * @ignore
         */
        this.valorInicial = -1;
        this.valorInicial = valor;
    }
    /**
     * Va descontando desde el valor inicial hasta 0
     */
    start() {
        return (0, rxjs_1.interval)(1000).pipe((0, rxjs_1.map)((sg) => {
            return (0, conversion_1.ConvertirSgAFormatoReloj)(this.valorInicial - sg, 2, this.valorInicial);
        }));
    }
}
exports.Descontador = Descontador;

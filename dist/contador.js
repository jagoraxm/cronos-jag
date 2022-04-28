"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contador = void 0;
const rxjs_1 = require("rxjs");
const conversion_1 = require("./conversion");
/**
 * Cuenta de manera ascendente de 1 en 1
 */
class Contador {
    /**
     * @ignore
     */
    constructor(limite = 5) {
        /**
         * @ignore
         */
        this.valorLimite = -1;
        this.valorLimite = limite;
    }
    /**
     * Cuenta de 0 hasta el límite establecido
     */
    start() {
        return (0, rxjs_1.interval)(1000).pipe((0, rxjs_1.map)((sg) => {
            return (0, conversion_1.ConvertirSgAFormatoReloj)(sg, 1, this.valorLimite);
        }));
    }
}
exports.Contador = Contador;

/**
 * Descuenta de 1 en 1 hasat el valor establecido
 */
export declare class Descontador {
    /**
     * @ignore
     */
    valorInicial: number;
    /**
     * @ignore
     */
    constructor(valor?: number);
    /**
     * Va descontando desde el valor inicial hasta 0
     */
    start(): import("rxjs").Observable<string>;
}

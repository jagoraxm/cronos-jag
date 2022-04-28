/**
 * Cuenta de manera ascendente de 1 en 1
 */
export declare class Contador {
    /**
     * @ignore
     */
    valorLimite: number;
    /**
     * @ignore
     */
    constructor(limite?: number);
    /**
     * Cuenta de 0 hasta el límite establecido
     */
    start(): import("rxjs").Observable<string>;
}

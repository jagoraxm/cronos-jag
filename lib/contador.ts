import { interval, map } from "rxjs";
import { ConvertirSgAFormatoReloj } from "./conversion";

/**
 * Cuenta de manera ascendente de 1 en 1
 */
export class Contador {
    /**
     * @ignore
     */
    valorLimite = -1;
    /**
     * @ignore
     */
    constructor(limite: number = 5) {
        this.valorLimite = limite;
    }
    /**
     * Cuenta de 0 hasta el límite establecido
     */
    start() {
        return interval(1000).pipe(
            map(
                ( sg: number ) => {
                    return ConvertirSgAFormatoReloj(sg, 1, this.valorLimite)
                }
            )
        )
    }
}
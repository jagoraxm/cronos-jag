import { interval, map } from "rxjs";
import { ConvertirSgAFormatoReloj } from "./conversion";

/**
 * Descuenta de 1 en 1 hasat el valor establecido
 */
export class Descontador {
    /**
     * @ignore
     */
    valorInicial = -1;
    /**
     * @ignore
     */
    constructor(valor: number = 5) {
        this.valorInicial = valor;
    }

    /**
     * Va descontando desde el valor inicial hasta 0
     */
    start() {
        return interval(1000).pipe(
            map(
                ( sg: number ) => {
                    return ConvertirSgAFormatoReloj(this.valorInicial - sg, 2, this.valorInicial)
                }
            )
        )
    }
}
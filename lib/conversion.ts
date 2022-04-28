import { Tiempo } from "./constans";

/**
 * Convierte los segundos en horas:minutos:segundos
 * @param sg Segundos del momento
 * @param tipo tipo 1:Contador 2:Descontador
 * @param limite límite de valor hasta el momento que funcionará
 * @returns 
 */
export function ConvertirSgAFormatoReloj(sg: number, tipo: number, limite: number): string {
    // Definir cuando termina
    if(tipo === 1 && limite === sg || tipo === 2 && sg === 0) {
        return 'FINISH';
    }
    // Conseguir el tiempo formateado para devolverlo
    // Horas
    const horas = Math.floor((sg % Tiempo.SG_DIA) / Tiempo.SG_HORA);
    // Minutos
    const minutos = Math.floor((sg % Tiempo.SG_HORA) / Tiempo.SG_MIN);
    // Segundos
    const segundos = Math.floor((sg % Tiempo.SG_MIN));

    return adaptarAlReloj(horas, minutos, segundos);
}

/**
 * @ignore
 */
function adaptarAlReloj(horas: number, minutos: number, segundos: number): string {
    const hora = darNumeroFormatoCorrecto(horas);
    const minuto = darNumeroFormatoCorrecto(minutos);
    const segundo = darNumeroFormatoCorrecto(segundos);

    return `${ hora }:${ minuto }:${segundo}`;
}

/**
 * @ignore
 */
function darNumeroFormatoCorrecto(n: number):string {
    return (n < 10) ? '0'.concat(String(n)): String(n);
}
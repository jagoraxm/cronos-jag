"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertirSgAFormatoReloj = void 0;
const constans_1 = require("./constans");
/**
 * Convierte los segundos en horas:minutos:segundos
 * @param sg Segundos del momento
 * @param tipo tipo 1:Contador 2:Descontador
 * @param limite límite de valor hasta el momento que funcionará
 * @returns
 */
function ConvertirSgAFormatoReloj(sg, tipo, limite) {
    // Definir cuando termina
    if (tipo === 1 && limite === sg || tipo === 2 && sg === 0) {
        return 'FINISH';
    }
    // Conseguir el tiempo formateado para devolverlo
    // Horas
    const horas = Math.floor((sg % constans_1.Tiempo.SG_DIA) / constans_1.Tiempo.SG_HORA);
    // Minutos
    const minutos = Math.floor((sg % constans_1.Tiempo.SG_HORA) / constans_1.Tiempo.SG_MIN);
    // Segundos
    const segundos = Math.floor((sg % constans_1.Tiempo.SG_MIN));
    return adaptarAlReloj(horas, minutos, segundos);
}
exports.ConvertirSgAFormatoReloj = ConvertirSgAFormatoReloj;
/**
 * @ignore
 */
function adaptarAlReloj(horas, minutos, segundos) {
    const hora = darNumeroFormatoCorrecto(horas);
    const minuto = darNumeroFormatoCorrecto(minutos);
    const segundo = darNumeroFormatoCorrecto(segundos);
    return `${hora}:${minuto}:${segundo}`;
}
/**
 * @ignore
 */
function darNumeroFormatoCorrecto(n) {
    return (n < 10) ? '0'.concat(String(n)) : String(n);
}

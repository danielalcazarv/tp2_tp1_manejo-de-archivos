import { leerArchivoComoString, escribirTextoEnArchivo } from './src/utils/fileUtils.js';
import { transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString } from './src/utils/transformUtils.js';
import { combinarDosArrays, combinarNArrays } from './src/apareo.js';

const RUTA_SET_A = './in/10NumerosOrdenadosEntre1y50(setA).in';
const RUTA_SET_B = './in/10NumerosOrdenadosEntre1y50(setB).in';
const RUTA_IMPARES = './in/imparesOrdenadosEntre1y999.in';
const RUTA_PARES = './in/paresOrdenadosEntre2y1000.in';

const RUTA_SALIDA_COMBINADO = './out/combinado.out';
const RUTA_SALIDA_COMBINADO2 = './out/combinado2.out';

const SEPARADOR_ENTRADA = ',';
const SEPARADOR_SALIDA = ',';

try {
    console.log('Iniciando proceso...');

    // 1. leo los 4 archivos a memoria
    console.log('Leyendo archivos de entrada...');
    const stringSetA = leerArchivoComoString(RUTA_SET_A);
    const stringSetB = leerArchivoComoString(RUTA_SET_B);
    const stringImpares = leerArchivoComoString(RUTA_IMPARES);
    const stringPares = leerArchivoComoString(RUTA_PARES);

    // 2. preparo los 4 arrays a partir de los archivo leidos
    console.log('Transformando strings a arrays de números...');
    const arrayA = transformarStringEnArrayDeNumeros(stringSetA, SEPARADOR_ENTRADA);
    const arrayB = transformarStringEnArrayDeNumeros(stringSetB, SEPARADOR_ENTRADA);
    const arrayImpares = transformarStringEnArrayDeNumeros(stringImpares, SEPARADOR_ENTRADA);
    const arrayPares = transformarStringEnArrayDeNumeros(stringPares, SEPARADOR_ENTRADA);

    // 3. combino los primeros dos arrays (setA y setB)
    console.log('Combinando los dos primeros arrays...');
    const combinadoDos = combinarDosArrays(arrayA, arrayB);
    const stringCombinadoDos = transformarArrayDeNumerosAUnSoloString(combinadoDos, SEPARADOR_SALIDA);
    escribirTextoEnArchivo(RUTA_SALIDA_COMBINADO, stringCombinadoDos, true);
    console.log(`Resultado de 2 arrays guardado en: ${RUTA_SALIDA_COMBINADO}`);


    // 4. combino los cuatro arrays
    console.log('Combinando los cuatro arrays...');
    const todosLosArrays = [arrayA, arrayB, arrayImpares, arrayPares];
    const combinadoN = combinarNArrays(todosLosArrays);
    const stringCombinadoN = transformarArrayDeNumerosAUnSoloString(combinadoN, SEPARADOR_SALIDA);
    escribirTextoEnArchivo(RUTA_SALIDA_COMBINADO2, stringCombinadoN, true);
    console.log(`Resultado de 4 arrays guardado en: ${RUTA_SALIDA_COMBINADO2}`);

    console.log('Proceso finalizado con éxito.');

} catch (error) {
    console.error('Ocurrió un error durante la ejecución:', error.message);
}
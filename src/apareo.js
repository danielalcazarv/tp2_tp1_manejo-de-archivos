/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arrA, arrB) {
    const arrayCombinado = [...arrA, ...arrB];
    const valoresUnicosSet = new Set(arrayCombinado);
    const arrayOrdenadoUnico = Array.from(valoresUnicosSet).sort((a, b) => a - b);
    
    return arrayOrdenadoUnico;
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {number[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {
    const flatArray = arrs.flat();
    const valoresUnicosSet = new Set(flatArray);
    const arrayOrdenadoUnico = Array.from(valoresUnicosSet).sort((a, b) => a - b);

    return arrayOrdenadoUnico;
}

// exportar ambas funciones
export {
    combinarDosArrays,
    combinarNArrays
};
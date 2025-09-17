import fs from 'fs';
import path from 'path';

/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
function leerArchivoComoString(ruta) {
    return fs.readFileSync(ruta, 'utf-8');
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    const existe = fs.existsSync(ruta);
        if (!existe) {
        if (shouldCreateIfNotExists) {
            const dir = path.dirname(ruta);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            fs.writeFileSync(ruta, texto);
        } else {
            throw new Error('el archivo no existe');
        }
    } else {
        fs.writeFileSync(ruta, texto);
    }
}

// exportar ambas funciones
export {
    leerArchivoComoString,
    escribirTextoEnArchivo
};
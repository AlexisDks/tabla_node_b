const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base, listar, hasta) => {
    let salida = ''
    let consola = ''

    for (let i = 0; i <= hasta; i++) {
        salida += `${base} * ${i} = ${base * i}\n`
        consola += `${base} ${'*'.green} ${i} ${'='.green} ${base * i}\n`
    }

    if (listar) {
        console.log('======================='.green)
        console.log(`      ${'Tabla del:'.green} ${colors.blue(base)}`)
        console.log('======================='.green)
        console.log(consola)
    }

    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt creado`
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}

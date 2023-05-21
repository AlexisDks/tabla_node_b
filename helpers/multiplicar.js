const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base, listar, hasta, operador) => {
    let salida = ''
    let consola = ''

    const lower = operador.toLowerCase()

    let resultado,
        simbolo = ''
    let texto = ''

    for (let i = 0; i <= hasta; i++) {
        if (lower == 's') {
            resultado = base + i
            simbolo = '+'
            texto = 'sumar'
        } else if (lower == 'm') {
            resultado = base * i
            simbolo = '*'
            texto = 'multiplicacion'
        } else if (lower == 'd') {
            resultado = base / i
            simbolo = '/'
            texto = 'division'
        } else if (lower == 'r') {
            resultado = base - i
            simbolo = '-'
            texto = 'restar'
        }

        salida += `${base} ${simbolo} ${i} = ${resultado}\n`
        consola += `${base} ${simbolo.green} ${i} ${'='.green} ${resultado}\n`
    }

    if (listar) {
        console.log('================'.green)
        console.log(`  ${'tabla del:'.green} ${colors.blue(base)}`)
        console.log('================'.green)
        console.log(consola)
    }

    try {
        fs.writeFileSync(`./salida/tabla-de-${texto}-del-${base}.txt`, salida)
        return `tabla-${base}.txt creado`
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}

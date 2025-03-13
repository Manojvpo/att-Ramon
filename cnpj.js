/* gerar 8 numeros aleatórios
adicionar o 0001 ao final dos 8 digitos
para gerar o 13 digito:
multiplico pela array 543298765432
somo tudo 
pego o resto da divisão, e verifico se o resultado é menor que dois
*/
function multiplicarNumeros (array_base, array_multiplicação){
    let soma = 0
    for (let i = 0; i<array_base.length; i++){
        soma += array_base[i] * array_multiplicação[i]
    }
    let resto = soma % 11
    let digito = 0
    if(resto < 2 ){
        digito = 0
    }else {
        digito = 11 - resto
    }
        return digito
}

function gerarCNPJ () {
let numero_base = Math.floor(Math.random() * 100000000)
numero_base = numero_base.toString() + '0001'
let array_base = numero_base.split('')
let array_multiplicação = [5,4,3,2,9,8,7,6,5,4,3,2]
let digito1 = multiplicarNumeros(array_base, array_multiplicação)// vai retornar o digito 1
array_base.push(digito1.toString())//pegar o digito um, acrescentar no final array_base
array_multiplicação.unshift(6)//acrescentar um valor no array multiplicação 
let digito2 = multiplicarNumeros(array_base, array_multiplicação)// retorna digito2
array_base.push(digito2.toString())
return array_base.join('')
}
let cnpj = gerarCNPJ()
console.log(cnpj)
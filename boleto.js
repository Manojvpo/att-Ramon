//criar uma função que verifica se o código EAN é valido

//verificar se ele tem 13 digitos 
//calcular o 13ª digito e comparar com o real 
// extrair cod país, extrair cod fabricante, extrair cod produto

const bancoDeDados = {
    paises: [
        { codigo: '789', nome: 'Brasil' },
        { codigo: '690', nome: 'China' },
        { codigo: '880', nome: 'Coreia do Sul' },
        { codigo: '000', nome: 'Estados Unidos' },
        { codigo: '400', nome: 'Alemanha' },
        { codigo: '030', nome: 'Canadá' },
        { codigo: '076', nome: 'Reino Unido' },
        { codigo: '950', nome: 'Argentina' },
        { codigo: '003', nome: 'França' },
        { codigo: '073', nome: 'México' }
    ],
    fabricantes: [
        { codigo: '7891', nome: 'Fabricante A' },
        { codigo: '6902', nome: 'Fabricante B' },
        { codigo: '8812', nome: 'Fabricante C' },
        { codigo: '4001', nome: 'Fabricante D' },
        { codigo: '9501', nome: 'Fabricante E' },
        { codigo: '0301', nome: 'Fabricante F' },
        { codigo: '0761', nome: 'Fabricante G' },
        { codigo: '0031', nome: 'Fabricante H' },
        { codigo: '0731', nome: 'Fabricante I' },
        { codigo: '0131', nome: 'Fabricante J' }
    ],
    produtos: [
        { codigoEAN: '78912', nome: 'Produto A', fabricante: 'Fabricante A', pais: 'Brasil' },
        { codigoEAN: '69012', nome: 'Produto B', fabricante: 'Fabricante B', pais: 'China' },
        { codigoEAN: '88012', nome: 'Produto C', fabricante: 'Fabricante C', pais: 'Coreia do Sul' },
        { codigoEAN: '40012', nome: 'Produto D', fabricante: 'Fabricante D', pais: 'Alemanha' },
        { codigoEAN: '95012', nome: 'Produto E', fabricante: 'Fabricante E', pais: 'Argentina' },
        { codigoEAN: '03012', nome: 'Produto F', fabricante: 'Fabricante F', pais: 'Canadá' },
        { codigoEAN: '07612', nome: 'Produto G', fabricante: 'Fabricante G', pais: 'Reino Unido' },
        { codigoEAN: '00312', nome: 'Produto H', fabricante: 'Fabricante H', pais: 'França' },
        { codigoEAN: '07312', nome: 'Produto I', fabricante: 'Fabricante I', pais: 'México' },
        { codigoEAN: '01312', nome: 'Produto J', fabricante: 'Fabricante J', pais: 'Estados Unidos' }
    ]
};

function validarEAN (cod_barra){
    if(cod_barra.length != 13) {
        return 'código de barra inválido'
    }
    //calcula digito verificador e compara 
    cod_barra = cod_barra.split('')
    let soma = 0
    for (let i = 0; i<cod_barra.length - 1; i++){
        if(i %2 !=0){
            soma += parseInt(cod_barra[i] * 3)
        }else{
            soma += parseInt(cod_barra [i])
        }
    }
    let digito = (10 - soma %10) % 10
    if(digito != cod_barra[12]){
        return 'Código inválido'
    }
    // pegar a variavel soma e ve quanto falta para o proximo multiplo de 10

    return 'Código válido'
}

function procuraproduto(cod_barra){
let país = cod_barra.slice(0,3)
let fabricante = cod_barra.slice(3,7)
let produto = cod_barra.slice(7,12)

let nome_país = bancoDeDados.paises.find((item) => item.codigo == país)
console.log(nome_país.nome)
/*Separar os dados meu cod de barra em país, fabricante e produto
procurar no banco de dados 
se existir retorna, se não existir envia msg de não encontrado*/

}


let codigo = '7894561230123'
let resultado = validarEAN(codigo)
console.log(resultado)

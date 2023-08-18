// const cidades = ["São Paulo", "Rio de Janeiro", "Brasilia", "Minas Gerias"]
// const sp = ["Corinthians", "São Paulo", "Botafogo", "Guarani"]
// const rj = ["Flamengo", "Fluminense", "Vasco da Gama", "Botafogo"]
// const bsb = ["Brasiliense", "Ceilândia", "Sobradinho", "Luziânia"]
// const mg = ["Clube Atlético Mineiro", "Cruzeiro Esporte Clube", "América Futebol Clube", "Tombense Futebol Clube"]

// let cidade = prompt("Digite o teste")
// // for (cidade in cidades) {

// //     if (cidade = "SP") {

// //     }
// // }

// function times(cidade) {
//     if (cidade == "sp") {
//         for (mostrarTime in sp) {
//             console.log(sp[mostrarTime])
//         }
//     } else if (cidade == "rj") {
//         for (mostrarTime in rj) {
//             console.log(rj[mostrarTime])
//         }
//     } else if (cidade == "bsb") {
//         for (mostrarTime in bsb) {
//             console.log(bsb[mostrarTime])
//         }
//     } else if (cidade == "mg") {
//         for (mostrarTime in mg) {
//             console.log(mg[mostrarTime])
//         }
//     }

// }


// times(cidade);
// // console.log("teste")

valorUm = parseFloat(prompt("Digite o primeiro valor"))
valorDois = parseFloat(prompt("Digite o segundo valor"))

function calculadora(valUm,valDois) {
    soma =valUm + valDois
    subtracao =valUm - valDois
    multiplicacao =valUm * valDois
    divisao =valUm / valDois

    console.log(soma,subtracao,multiplicacao,divisao)
}

calculadora(valorUm,valorDois)
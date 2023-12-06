//Calculadora de Rankeadas Desafio de Projeto Dio

//Definir valores das variáveis numero de viórias e numero de derrotas
let winsNumber = 501 //vitórias
let losesNumber = 400 //derrotas

//Função para calcular o saldo de vitórias (diferença entre as vitórias e as derrotas)
function score(winsNumber,losesNumber){
    wLDifference = winsNumber - losesNumber
    return wLDifference
}
//Função para comparar o saldo de vitórias com o Rank
function rankedLevel(wLDifference){
    let rank
    switch(true){
        case(wLDifference <= 10):
        rank = "Ferro"
        break

        case(wLDifference > 10 && wLDifference <= 20):
        rank = "Bronze"
        break

        case(wLDifference > 20 && wLDifference <= 50):
        rank = "Prata"
        break

        case(wLDifference > 50 && wLDifference<= 80):
        rank = "Ouro"
        break

        case(wLDifference > 80 && wLDifference<= 90):
        rank = "Diamante"
        break

        case(wLDifference > 90 && wLDifference<= 100):
        rank = "Lendário"
        break

        case(wLDifference > 100):
        rank = "Imortal"
        break
    }
    return  rank
}
//Saída do Código
console.log ("\n\n#######################################################################")
console.log ("Bem-vindo(a) a Calculadora de Rankeadas\n\n\n")
console.log ("O Herói tem o saldo de " + score(winsNumber,losesNumber) + " vitórias e está no nível de " + rankedLevel(wLDifference)+".")
console.log ("#######################################################################\n\n")

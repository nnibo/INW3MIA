 const prompt = require('prompt-sync')()

function getUserInfo(){
    let weight = prompt('Digite seu peso em KG ');
    let height = prompt('Digite sua altura em CM ');

   return pessoa = {
    peso: weight,
    altura: height
   }
}

function calcImc(pesoInformado,alturaInformado){
    return pesoInformado / alturaInformado**2

}

function main(){
    let userData = getUserInfo();
    let peso = userData.peso;
    let altura = userData.altura;
    let resultadoImc = calcImc(peso,altura); 
    if(resultadoImc > 18){
    console.log('Seu IMC é '+resultadoImc.toFixed() + 'e voce esta acima do peso')
    } else if(resultadoImc >18 && resultadoImc < 23){
        console.log('voce esta normal')
    } else {
        console.log('Voce esta magro')
    }


}
main()

function imprimir(nome){
    console.log(nome)
}

const imprimir = () => {
    console.log('Ola')
}
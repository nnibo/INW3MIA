const nomes = ['Nibaum','Nibo','FODSAE!','MEUSACO!']

//const [nome1,...resto] = nomes

//nomes.forEach(function(meuItem){
  //  console.log(meuItem)
//})

nomes.forEach(meuItem =>{
    console.log(meuItem)
})

nomes.map((element)=>{
    console.log('Meu lutador é '+element)
})


/*for(let i = 0; i<nomes.length; i++){
    console.log(nomes[i])
}

nomes[1] = 'Pedro Munhoz'
nomes.push('Novo jogador') //adiciona um novo valor ao array
nomes.pop() // exclui o ultimo valor do array */

console.log(nomes.length) // traz o tamanho do array .lenght

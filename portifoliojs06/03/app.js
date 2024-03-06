const btn1 = document.querySelector('button');
const listaFilmes = document.querySelector('#listaFilmes');
//na ac vai ser window.onload = ()=> {

//}
btn1.addEventListener('click',()=> {
    const valorDigitado = document.querySelector('#filmeInput').value
    //cria o elemento li
    const itemLista = document.createElement('li')
    //adiciona o li a lista
    listaFilmes.append(itemLista)
    //adiciona o conteudo ao li
    itemLista.innerHTML = valorDigitado
    //muda o css do item
    itemLista.style.backgroundColor = 'red'
    //adiciona uma classe ao item
    itemLista.classList.add(fundo-azul)
})
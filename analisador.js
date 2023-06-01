//variaveis chamando o que esta dentro do input/select/div...
let num = document.querySelector('input#anali');
let list = document.querySelector('select#analis');
let res = document.querySelector('div#res');

let valores = []; //variavel de vetor/array...

function eNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function emList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }

}

function adicionar() {
    
    if (eNumber(num.value) && !emList(num.value, valores)) {  //Se for realmente um número e se esse número não(!) esta na lista:
       valores.push(Number(num.value));  //por valores do meu indice e adicionar elementos no vetor...
       let item = document.createElement('option');  // criação do elemento de forma dinamica 'option' no select...
       item.text = `Valor ${num.value} adicionado.`;
       list.appendChild(item);  //add na lista item
       res.innerHTML = '';  //limpar o resultado...
    } else {
        window.alert('Valor invalido ou já encontrado na lista.');
    }
    num.value = ''; //deixar automatico a limpeza da caixa de texto...
    num.focus(); 
}

function finalizar() {
    if (valores.length == 0) {  //verificar se o vetor esta vazio...
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let ad = valores.length 
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let pos in valores) {  //laço de percurso => para cada posição em valores...
            soma += valores[pos]; //somar o valor atual com o valor 
            if (valores[pos] > maior) //valores for maior que 'maior',
              maior = valores[pos]; //maior passa a ser valores[pos];
            if (valores[pos] < menor) //valores for menor que 'menor',
              menor = valores[pos];   //menor passa a ser valores[pos].
        } 
        media = soma / ad;
        res.innerHTML = '';  //limpar a caixa de texto depois que adiciona um numero...
        res.innerHTML += `<p> Ao todo, temos ${ad} números cadastrados. </p>`; //retorna anbaixo do botão 'finalizar'.
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`;
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`;
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`;
        res.innerHTML += `<p> A média dos valores digitados é: ${media}. </p>`
    }
}
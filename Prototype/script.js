//EXERCÍCIOS JS

/*Crie uma função construtora de Pessoas
Deve conter nome, sobrenome e idade
Crie um método no protótipo que retorne
o nome completo da pessoa*/

function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function(){
    return "${this.nome} ${this.sobrenome}";
}

const andre = Pessoa('Andre', 'Rafael', 28);

/*Liste os métodos acessados por 
dados criados com NodeList,
HTMLCollection, Document*/

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLElement
li.click; //Function
li.innerText; //String
li.value; //Número
li.hidden; //Boolean
li.offsetLeft; //Número
li.click(); //Undefiend

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String
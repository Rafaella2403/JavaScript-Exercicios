/*Remova o primeiro valor de comidas e coloque em uma variável
Remova o último valor de comidas e coloque em uma variável
Adicione 'Arroz' ao final da array
Adicione 'Peixe' e 'Batata' ao início da array*/
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

const primeiroValor = comidas.shift();
const ultimoValor = comidas.pop();
comidas.push('arroz');
comidas.unshift('peixe', 'batata');

console.log(primeiroValor);
console.log(ultimoValor);
console.log(comidas);

/*Arrume os estudantes em ordem alfabética
Inverta a ordem dos estudantes
Verifique se Joana faz parte dos estudantes
Verifique se Juliana faz parte dos estudantes*/
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

console.log(estudantes);

estudantes.sort();

console.log(estudantes);

// Substitua section por ul e div com li, utilizando split e join
let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`


html = html.split('section').join('ul').split('div').join('li');
console.log(html);


// Remova o último carro, mas antes de remover salve a array original em outra variável
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

carros.pop();
const carrosCopia = carros.slice();
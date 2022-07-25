# Guia Estelar JavaScript

# Javascript

## Javascript Core

- Linguagem de programação que roda no Navegador do usuário (front-end)
    - Se você clicar em algum botão da página e aparece uma janela. Isso é o JavaScript
    - Alteração do site ou aplicativo, conforme a interção do usuário
- Roda também no computador (back-end)

## O que podemos fazer?

- Podemos criar aplicações web, mobile (React Native), desktop (Electron)
- Empresas famosas que usam
    - Facebook
    - Google
    - Uber
    - Netflix
    - Tiktok
    - …
- 99.99% dos sites da web usam JavaScript
- Linguagem obrigatória para quem programa o Front-end Web

## Evolução

- A comunidade cresce cada vez mais  e a linguagem está sempre evoluindo

# Primeiros passos

## Sintaxe

- Toda linguagem tem
- Uma boa comunicação necessita de uma boa sintaxe
- 82% dos erros para iniciantes programação

```jsx
'''js
	console.log("Bem vindos ao Starter")
'''
```

## Comentários

```jsx
// Aqui eu tenho um comentário em linha

/* Aqui eu tenho
um comentário multi linha */
```

# Tipos de dados

## String

- Cadeia de caracteres
    - “  ” → aspas duplas
    - ‘ ’ → aspas simples
    - ` ` → template literals ou strings (permite que faça multi linhas)

## Number

- Números
    - 33 → inteiros
    - 12.3 → reais
    - NaN → Not a number
    - Infinity → infinito

## Boolean

- somente dois valores
    - true → verdadeiro
    - false → falso

## Undefined vs null

- Undefined
    - indefinido
- Null
    - nulo
    - objeto que não possui nada dentro
    - diferente de indefinido

## Object

- Objeto
- Propriedades / Atributos
- Funcionalidades / Métodos

```jsx
console.log({
nome: "MAYK", 
idade: 36,
andar: function() { 
	console.log("andar")
}
})

```

## Array (vetores)

- Uma lista
- Agrupamento de dados

```jsx
console.log(["Mayk", 36, "João Pessoa", "Paraiba", "Brasil"])
```

## Conclusão

Conforme o ECMAScript standard temos 9 tipos de dados:

- Data types
    - Primitive / Primitive value
    - Structural
    - Structural Primitive

### Primitivos

- String
- Number
- Boolean
- Undefined
- Symbol
- BigInt

### Estruturais

- Object
    - Array
    - Map
    - Set
    - Date
    - …
- Function

### Primitivo estrutural

- Null

# Variáveis

## Conhecendo as variáveis

- Nomes simbólicos para receber algum valor
- Atalhos de código
- Identificadores
- 3 palavras reservadas para criar uma variável
    - var
    - let
    - const (não pode mudar seu  valor durante a aplicação)

## Tipos dinâmicos

O JS é uma linguagem fracamente tipada e dinâmica

- Variáveis não precisam ter um tipo previamente definido
- Podemos mudar o conteúdo da variável

```html
<script>
    
    // Linguagem dinâmica
    let clima = true //boolean
    clima = "" //string

    console.log(clima)

</script>
```

## Scope

- Escopo determina a visibilidade de alguma variável no JS

### Block statement

```jsx
'''js
// vamos iniciar um bloco
{
	// aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
'''
```

- O   bloco também criará um novo escopo. Chamamos de `block-scoped`

## Var

```jsx
'''js
// var é global e poderá funcionar fora de um espaço de bloco
//hoisting -> ele pega o var x e joga lá pra cima e atualiza o valor
console.log('>existe x antes do bloco? ', x)

{
	var x = 0
}

console.log('>existe x depois do bloco? ', x)
```

## Let e const

```html
<script>
    
    // const e let são locais e só funcionam no escopo onde foi criada
    console.log('> existe y antes do bloco? ', y)

    {
        let y = 0
    }

    console.log('> existe y depois do bloco? ', y)

</script> 
```

## Nomeando variáveis

Para criar nomes

- JS é case-sensitive (sensível ao caso) → maiúsculas e minúsculas fazem diferença
- JS aceita a cadeia de caracteres Unicode → pode pôr aspas, acentuações

### Posso:

- Iniciar com esses caracteres especiais: $ _
- Iniciar com letras
- Colocar acentos
- Letras maiúsculas e minúsculas fazem diferença

### Não posso:

- Iniciar com números
- Colocar espaços vazios no nome

### Ideal:

- Criar nomes que fazem sentido
- Que explique o que a variável é ou faz
- camelCase → sem espaço porém com letra maiúscula `checkIfNameExist`
- snake_case → `check_if_name_exist`
- Escrever em inglês

# Praticando e avançando

## Declaration assignment var

```html
<script>
    // Variáveis e tipos de dados
    // declaração or declaration
    var name

    // assignment or atribuição de valores
    name = 'Mike'

    // que tipo de dado foi colocado na variável

    console.log(typeof name)

		let age = 20 //number
    lei isHuman = true //boolean
</script>
```

## Agrupando declarações

```html
<script>
//agrupamento de declarações
    let age, isHuman

    age = 18
    isHuman = true

// multiplos argumentos na função
    console.log(name, age, isHuman)
</script>
```

## Concatenando e interpolando variáveis

- Concatenar → Somar a variável a string

```html
<script>

// escrita de texto + variáveis
    console.log('o Mike tem 18 anos')

// concatenando os valores
    console.log('o ' + name + ' tem ' + age + ' anos')

// interpolando valores com template literals po tamplate strings
    console.log(`o ${name} tem ${age} anos`)

</script>
```

## Objects

```jsx
const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(person.name)
console.log(` ${person.name} tem ${person.age} anos`)
```

## Arrays

```jsx
//Array
const animals = [
    'Lion',
    'Monkey',
    'Cat'
]

// acessar valores dentro do array
console.log(animals[0])
```

# Funções

## Functions

- Explica o que um pedaço de código está fazendo → Agrupamento de códigos
- Repetir o código todas as vezes que eu quiser → Reutilização desse código
- Dar significado a um bloco de código

```jsx
// criar um aplicativo de frases motivacionais

//declaration - declaração da função
// funcition statement
function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistencia')
    console.log('Revisão é mãe do apredizado')
}

// executar a função
// rodar, chamar, invocar
// execute, run ,call, invoke
createPhrases()
createPhrases()
createPhrases()
createPhrases()

console.log('Fim do programa')
```

## Argumentos e parâmentros

```jsx
//function expression
//function anonymous

//parâmetros (parameters)
const sum = function(number1, number2){
    console.log(number1 + number2)
}

// argumentos (arguments) -> 2 e 3
sum(2, 3)
```

## Retornando valores dentro da função

```jsx
//function expression
//function anonymous

//parâmetros (parameters)
const sum = function(number1, number2){
    let total = number1 + number2
    return total
}

let number1 = 34
let number = 25

//console.log(`o número 1 é ${number1}`)
//console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(numer1, number2)}`)
console.log(total
```

## Function scope

```jsx
let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)
```

## Function hoisting

```jsx
let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)
```

## Arrow function

```jsx
const sayMyName = () => {
    console.log('Mayk')
}

sayMyName()
```

## Callback function

```jsx
function sayMyName(name) {
    console.log('antes de executar a função callback')
    name()

    console.log('depois de executar a função callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)
```

## Funções construtoras

- expressão new
- criar um novo objeto
- this keyword

```jsx
function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const mayk =  new Person("Mayk")
const joao = new Person("João")
console.log(mayk.walk())
console.log(joao.walk())
```

```jsx
let date = new Date("2020-12-02")

console.log(date)
```

# Manipulando dados

## Prototype

- prototype-based language
- prototype chain
- __proto__

## Type conversion (typecasting) vs type coersion

- Alteração de um tipo de dado para outro tipo

### type conversion → eu mesmo faço a alteração

```jsx
console.log('9' + 5)

console.log(Number('9') + 5)
```

### type coersion → o js faz a alteração para mim

```jsx
console.log('9' + 5)
//transformou o número 5 em uma string '5'
console.log('9' + '5')
```

## Strings e números

- Transformar uma string em um número e um número em uma string

```jsx
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))
```

## Contando caracteres e digitos

```jsx
let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)
```

## Casas decimais

```jsx
let number = 1335684713857341
console.log(number.toFixed(2).replace(".", ","))
```

## Maiúsculas e minúsculas

```jsx
let word = "Programar é muito bacana!"
console.log(word.toUpperCase())

let word = "Programar é muito bacana!"
console.log(word.toLowerCase())
```

## Encontrando palavra em frases

```jsx
let phrase = "Eu quero viver!"
console.log(phrase.includes("amor"))
```

## Separando strings

```jsx
// Separar um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, tranforme o array em um texto e onde eram espaços,coloque _

let phrase = "Eu que viver o Amor!"
let myArray = phrase.split("o")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
```

## Criando array com construtor

```jsx
let myArray = new Array('a', 'b', 'c')
console.log(myArray)
```

## ELementos do Array

```jsx
console.log(["a",
    {type: "array"},
    function() { return "alo"},
].length)
```

## String para arrays

```jsx
let word = "Manipulação"
console.log(Array.from(word))
```

## Manipulando arrays

```jsx
// Manipulando arrays

let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("nodejs")
//adicionar no começo
techs.unshift("sql")
//remover no fim
techs.pop()
techs.pop()
//remover no começo
techs.shift()
//pegar somente alguns elementos do array
console.log(tehs.slice(1, 3))
//remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 1)
//encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)
```

# Expressões e Operadores

## Expressões e operadores

### Expressions

```jsx
//um dos poucos casos que a falta do ponto e virgula da problema
let number;

(function() {
	console.log('alo')
}){}
```

### Operators

- binary

```jsx
let number = 1

console.log(number + 1)
//binario pq são dois valores para que o operador esteja no meio deles
```

- unary

```jsx
let number = 1

console.log(++number)
console.log(typeof number)
//coloca o operador antes para incrementar o número
```

- ternary

```jsx
//único caso
let number = 1 

console.log(true ? 'alo' : 'nada')
```

## New

- left-hand-side expression
- criar um novo objeto

```jsx
let name = new String('Mayk')
name.surName = "Brito"
let age = new Number(23)
console.log(name, age)

let date = nem Date('2020-12-01')
console.log(date.__proto__)
```

## Typeof delete

Operadores do tipo unários

### typeof

```jsx
console.log(typeof "mayk")
//mostrar o tipo de dado que eu tenho aqui
```

### delete

```jsx
const person = {
	name: 'Mayk',
	age: 25,
}
delete person.age

console.log(person)
//vai procurar uma propriedade dentro do objeto e vai deleta-la, desde que ela exista
```

## Operadores aritméticos

### multiplicação *

```jsx
console.log(3.2 * 5)
```

### divisão /

```jsx
console.log(12 / 2)
```

### soma +

```jsx
console.log(34 + 67)
```

### subtração -

```jsx
console.log(34 - 23)
```

### resto da divisão

```jsx
let remainder
remainder = 11 % 9
console.log(remainder)
```

### incremento

```jsx
let increment = 0
increment++
increment++
console.log(increment)
```

### decremento

```jsx
let decrement = 0
decrement--
console.log(decrement)
```

### exponencial

```jsx
console.log(3 ** 3)
```

## Grouping operator ( )

```jsx
let total = 2 + 3 * 5
console.log(total)
//posso trocar a ordem dessas precedencias
let total = (2 + 3) * 5
console.log(total)
let total = ("alo alo" + "você")
```

## Operadores de comparação igual a e diferente de

- Irá comparar valores e retornar um Boolean como resposta à comparação

```jsx
let one = 1
let two = 2
//igual a ==
console.log( two == 1 )  //false
console.log( one == "1")  //true
//diferente de !=
console.log(one != two ) //true
console.log(one != 1 ) //false
console.log(one != "1") //false
```

## Operadores de comparação estritamente igual e estritamente diferente

```jsx
let one = 1
let two = 2

// === estritamente igual a 
console.log( one === "1") //false pq essa é uma string não um número
console.log( one === 1 ) //true

// !== estritamente diferente de
console.log( two !== "2") //true
console.log( two !== 2 ) //false
```

## Operadores de comparação maior e menor (igual)

```jsx
let one = 1 
let two = 2
// > maior que
console.log(one > two) //false
// >= maior igual a
console.log(one >= 1) //true
console.log(two >=1) //true
// < menor que
console.log(one < two) //true
// <= menor igual a 
console.log(one <= two) //true
console.log(one <= 1) //true
console.log(one <= 0) //false
```

## Operador de atribuição

```jsx
let x 

console.log(x)

//assigment
x = 1 
//addition assigment
//x = x + 2
x += 2
//subtraction assigment
//x = x - 1
x -= 1
//multiplication assigment
// x = x * 2
x *= 2
//division assigment
// x = x / 2
x /= 2
//remainder, exponetiation
x %= 2
x **= 2
console.log(x)
```

## Operadores lógicos

- 2 valores booleanos, quando veriificados, resultará em verdadeiro ou falso

```jsx
let pao = true
let queijo = true

// AND  &&
console.log(pao && queijo) //true

// OR ||
console.log(pao || queijo) //true

// NOT !
console.log(!pao) //false
//troca de valor
```

## Operador condicional ternário

- Dependendo da condição, nós recebemos valores diferentes
- Condição então valor 1 se não valor 2
    - condition ? value1 :  value2

```jsx
//café da manhã top
let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

//maior de 18
let age = 16
const canDrive = age >= 18 ? 'can drive' : "can't drive"

console.log(canDrive)
```

## Operadores para string

```jsx
//comparison 
console.log( 'a' == 'b') //false
console.log( 'a' == 'a') //true

//concatenation
//retorna a união de duas strings
let alpha = 'alpha'
console.log( alpha + 'bet' + 's')
```

## Falsy e truthy

### Falsy

Quando um valor é considerado false em contexteos onde um boolean0 é obrigatório ( condicionais e loops )

- false
- 0
- -0
- “”
- null
- undefined
- NaN

```jsx
console.log( 0 ? 'verdadeiro' : 'falso' )//falsy
//era obrigatório que o primeiro cara nessa condicional seja um booleano
```

### Truthy

Quando um valor é considerado true em contextos onde um contextos onde um booleano é obrigatório ( condicionais e loops )

- true
- { }
- [ ]
- 1
- 3.23
- “0”
- “false”
- -1
- Infinity
- -Infinity

```jsx
console.log( {} ? 'verdadeiro' : 'falso')  //truthy
```

## Precedência dos operadores

- grouping                           { }
- negação e incremento      ! ++ —
- multiplicação e divisão     * /
- adição e subtração           + -
- relacional                          < <= > >=
- igualdade                          == != === !==
- AND                                  &&
- OR                                    ||
- condicional                       ?:
- assigment                         = += -= *=

# Condicionaos e controle de fluxo

## Controle de fluxo da aplicação

- Se algo acontece faça tal coisa

```jsx
//se o copo tiver sujo
console.log('lavar o copo')
console.log('servir café')
```

## If e Else

```jsx
if() {

} else {

}

let temperature = 36.5

if(temperature >= 37.5) {
	console.log('Febre alta')
} else if(temperature <37.5 && temperature >= 37)) {
	console.log('Febril')
} else {
	console.log('Saudável')
}
//ou faz assim
let temperature = 36.9
let highTemperature = temeperature >= 37.5
let mediumTemperature = temeperature < 37.5 && temeperature >= 37

if (highTemperature) {
	console.log('Febre alta')
} else if (mediumTemperature) {
	console.log('Febril')
} else {
	console.log('Saudável')
}
```

## Switch

```jsx
let expression = 'a'

switch (expression) {
	case 'a':
	//codigo
	console.log('a')
		break
	case 'b':
		//codigo para expression b
		console.log('b')
		break
	default:
		console.log('default')
		break
}
//calculadora

function calculate(number1, operator, number2) {
	let result = 0;

	switch (operator) {
		case '+':
			result = number1 + number2
			break
		case '-':
			result = number1 - number2
			break
		case '*':
			result = number1 * number2
			break	case '/':
			result = number1 / number2
			break
		default:
			console.log('não implementado')
			break
	}

	return result
}

console.log(calculate(4, '%', 8))
```

## Throw w Try/Catch

```jsx
//throw

function sayMyName(name = '') {
	if (name === '') {
		throw 'Nome é obrigatório'
		}

		console.log('depois do erro')
}

//try...catch
try {
	sayMyName()
} catch(e) {
		console.log(e)
}
```

# Estruturas de repetição

## For

```jsx
for(let i = 0; i < 10; i++) {
	console.log(i)
}
 //break para a execução do loop
for(let i = 10; i > 0; i--) {
	if(i === 5) {
			break;
	}
	console.log(i)
}
//continie pula a execução do momento
for(let i = 10; i > 0; i--) {
	if(i === 5) {
			continue;
	}
	console.log(i)
}
```

## While

- Usar quando não sabe o momento da parada

```jsx
let i = 98493275825;

while(i > 10) {
 console.log(i)

	i /= 35;
}
```

## For of

```jsx
let name = 'Mayk'
let names = ['João', 'Paulo', 'Pedro']

for(let name of names) {
	console.log(char)
}
```

## For in

```jsx
let person = {
	name: 'John',
	age: 30,
	weight: 88.6
}

for(let property in person) {
	console.log(property)
	console.log(person[property])
}
```

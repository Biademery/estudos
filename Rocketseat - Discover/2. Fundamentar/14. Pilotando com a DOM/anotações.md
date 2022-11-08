# Pilotando com a DOM

# O que é e para que serve a DOM?

## DOM (Document Object Model)

- É o HTML convertido para um JavaScript
- API que representa e interage com o HTML
- Estrutura de dados do tipo árvore, criada pelo browser
- Propriedades e métodos

## Para que?

- Javascript usa a DOM para se conectar ao HTML
- Manipular o HTML com o Javascript
- Você só programa pra WEB porque existe o DOM

# Selecionando elementos

## getElementById

- Você pode pergar o id do elemento

```jsx
//getElementById
const element = document.getElementById('blogTitle');
console.log(element)
```

## getElementByClassName

```jsx
//getElementByClassName
const element = document.getElementByClassName('one');
console.log(element)
```

## getElementByTagName

```jsx
//getElementByTagName
const element = document.getElementByTagName('meta');
console.log(element)
```

## querySelector

- dá pra pegar todos os seletores que você quiser, porém apenas o primeiro que você buscar

```jsx
//querySelector
const element = document.querySelector('');
console.log(element)
```

## querySelectorAll

- todos com o mesmo seletor

```jsx
//querySelectorAll
const element = document.querySelectorAll('');
console.log(element)
```

# Manipulando conteúdos

## textContent

- Alterar o conteúdo de texto do elemento

```jsx
const element = document.querySelector('h1');

element.textContent = 'Óla Devs'
```

## innerText

- Trocar o texto interno do seu elemento

```jsx
const element = document.querySelector('h1');

element.innerText = 'Óla Devs'
```

## innerHTML

- Trocar o HTML do elemento interno

```jsx
const element = document.querySelector('h1');

element.innerHTML = 'Óla Devs! <small>!!!</small>'
```

## Value

- Serve para o input, ou qualquer outro elemento que receba value

```jsx
const element = document.querySelector('input');

element.value = 'Valor aleatório'
```

## Manipulando atributos

```jsx
//atribute

const header = document.querySelector('header')
header.setAttribute('id, header')

const headerID = element.querySelector('#header')
 
console.log(headerID.getAttribute('class'))

headerID.setAttribute('class', 'bg header')

header.removeAttribute('id')
header.removeAttribute('class')
```

# Manipulando estilos e classes

## Alterando estilos com styles

- Atribuir CSS em linha

```jsx
const element = document.querySelector('body')

element.style.backgroundColor = "#f9f2d2"
console.log(element.style.backgroundColor)
```

## classList

```jsx
const element = document.querySelector('body')

element.classList.add('active', 'green')
element.classList.remove('active')
//toggle se existe ele tira, se tem ele remove
element.classList.toggle('active')

console.log(element.classList)
```

# Navegando pelos elementos

## parentElement e parentNode

```jsx
const body = document.querySelector('body')

console.log(body.parentNode)
console.log(body.parentElement)
```

## Pegando elementos filhos

```jsx
const el = document.querySelector('body')

//leva em conta os espaços vazios
console.log(el.childNodes)
//não leva em conta os espaços vazios
console.log(el.children)
//leva em conta os espaços vazios
console.log(el.firstChild)
//não leva em conta os espaços vazios
console.log(el.firstElementChild)
//leva em conta os espaços vazios
console.log(el.lastChild)
//não leva em conta os espaços vazios
console.log(el.lastElementChild)
```

## Buscando irmãos

```jsx
const el = document.querySelector('body')

//leva em consideração o espaço vazio
console.log(el.nextSibling)
//não leva em consideração o espaço vazio
console.log(el.nextElementSibling)
//leva em consideração o espaço vazio
console.log(el.previousSibling)
//não leva em consideração o espaço vazio
console.log(el.previousElementSibling)
```

# Criando e adicionando elementos na página

## Criando e adicionando elementos na página

```jsx
 const div = document.createElement('div')
div.innerText = "Olá Devs!"

const body = document.querySelector('body')
//depois dos outros elementos do body
body.append(div)
//adiciona antes dos outros elementos
body.prepend(div)
```

## insertBefore

```jsx
const div = document.createElement('div')
div.innerText = "Olá Devs!"

const body = document.querySelector('body')
const script = body.querySelector('script')

//inserta no meio do body
body.insertBefore(div, script)
//não existe um inserAfter, mas pode fazer assim

const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling)
```

# Eventos

## Adicionando eventos via HTML

- on…. = print()

```jsx
function print() {
	console.log('print')
}
```

## Eventos de teclado

```jsx
const input = document.querySelector('input')

input.onkeydown = function () {
    console.log('rodei')
}
input.onkeyup = function () {
    console.log('rodei')
}
input.onkeypress = function () {
    console.log('rodei')
}
```

## Adicionando eventos via JS

```jsx
const h1 = document.querySelector('h1')
h1.addEventListener('click', print)

input.onkeydown = function () {
    console.log('print')
}
```

## Adicionando eventos via JS (Outro método)

```jsx
//só pode usar uma vez
const h1 = document.querySelector('h1')
h1.onclick = print

input.onkeydown = function () {
    console.log('print')
}
```

## Argumento event

```jsx
const h1 = document.querySelector('h1')

input.onkeypress = function (event) {
    console.log(event)
}
```

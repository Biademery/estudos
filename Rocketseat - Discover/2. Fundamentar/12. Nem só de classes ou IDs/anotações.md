# Nem só de classes ou IDs

# Seletores

- Conecta um elemento HTML com o CSS a fim de alterar o elemento

## TIpos

### Element selector

- Todos os elementos HTML

### ID Selector

- Um elemento que tenha um atributo ‘id’
- Cada id deverá ser único
- Para chamar no CSS usa #

### Class Selector

- Os elementos que contenha um atributo ‘class’
- Podemos ter uma ou mais classes
- Para chamar no CSS usa .

### Atribute Selector

- Um elemento que tenha um atributo específico
- Chama com [ ], como title
- title → quando eu dencasa o mouse em cima ele mostra o que escrevi

### Pseudo-class Selector

- Elemento em um estado específico

```css
p:hover {
	color: red;
}
/* quando passa o mouse em cima muda de cor */
```

# Combinators

- Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

## Descendent combinator

- Identificamos por um espaço entre os seletores
- Busca um elemento dentro de outro

```css
body article h2 {

}
```

## Child combinator

- Identificamos pelo sinal ‘>’ entre dois seletores
- Seleciona somente o elemento que é filho direto do pai
- Elementos depois do filho direto serão desconsiderados

```css
body > ul > il {

}
```

## Adjacent sibling combinator

- Identificado pelo sina ‘+’ entre os dois seletores
- Seleciona somente o elemento do lado direito que é o irmão direto na hierarquia

```css
h1 + p {

 }
```

## General sibling combinator

- Identificamos pelo sinal ‘~' entre os dois seletores
- Seleciona todos os elementos irmãos

```css
h1 ~ p {

}
```

# Pseudo-classes

- É um tipo de seletor que irá selecionar um elemento que estiver em um estados específico
- Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em cima dele
- Pseudo-classes começam com 2 pontos seguido do nome da pseudo class ‘ :pseudo-class-name’

## Selecionando elementos com pseudo-classes

### :first-child

- pega o primeiro filho independente ou não de ser o li

```css
/* HTML
<ul>
    <li>Gratidão</li>
    <li>Esperança</li>
    <li>Fé</li>
</ul>  */
ul li:first-child {
	font-weight: bold;
}
```

### :nth-of-type()

- você escolhe qual filho li pegar

### :nth-child()

- você escolhe qual filho pegar, ele desconsidera o li
- even - seleciona todos os filhos pares
- odd - seleciona todos os filhos ímpares

## Ações do usuário

- :hover
- :focus

### Atributos

- :disable
- :required

# Pseudo-elements

- Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS
- ‘ ::pseudo-element-name’

## Exemplos

- ::before
    - antes dos elementos pode colocar alguma coisa com o content
- ::after
    - depois dos elementos pode colocar alguma coisa com o content
- ::first-line
    - vai pegar as primeiras linhas dos textos
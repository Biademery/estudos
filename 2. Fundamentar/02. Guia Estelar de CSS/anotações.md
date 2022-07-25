# Guia Estelar de CSS

# O que significa CSS?

- Cascading Style Sheet
- Código para criar estilos no HTML
- HTML é a estrutura, e o CSS é a beleza
- Não é uma linguagem de programação
- É uma linguagem style sheet

# Comentários

- Não irá afetar o seu código
- Ajuda a lembrar blocos de código
- Deixa dicas para leitura
- Ajuda outros a entenderem
- Nunca esqueça de fechar um comentário aberto

```css
/* Básico */
/* Comentário */
```

# Anatomia

```css
h1 {
  color: blue;
  font-size: 50px;
  background: gray;
}
```

- Selector = h1
- Declaration ={ color: blue;
  font-size: 50px;
  background: gray; }
- Properties = color: ;
  font-size: ;
  background: ;
- Property Value = blue;
   50px;
   gray;

# Seletores

→ Conecta um elemento HTML com o CSS

- Global selector ‘*’
- Element/Type selector ‘h1, h2, p, div’
- Id Selector ‘.red, .m-4’
- Attribute selector, Pseudo-class, Pseudo-element, e outros

```html
<div id='conteiner' class='m-40'>
  <h1> Titulo</h1>
  <h2> Subtítulo </h2>
</div>
```

```css
*{
  margin: 0;
}

#conteiner {
  width:200px;
}

.m-40 {
  margin:40px;
}

h1, h2 {
  color: red;
  font-size: 60px;
  background: gray;
}
```

# Box model

- Você irá perceber que (quase) tudo são caixas do CSS
- Posicionamentos, tamanhos, espaçamentos, bordas, cores
- Caixa pode ficar ao lado uma da outra, ou acima
- Elementos HTML são caixas

```html
<h1> Evolua Rápido</h1>
<p> Descrição </p>
<button> Embarcar </button>
```

```css
h1{
  border:1px solid red;
  margin:80px;
  padding:60px;
}
```

# Adicionando CSS

## Inline

- Atributo ‘style’

## <Style>

- Tag HTML que irá conter o CSS

## <Link>

- Arquivo CSS externo

## @Import

- Arquivo CSS externo

# A cascata (cascading)

- Seu estilo é lido de cima para baixo
1. Origem do estilo
2. Especificidade
3. Importância

## A origem do estilo

- inline > tag style > tag link

## Especificidade

- É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados

0. Universal selector, combinators e negation pseudo-class ( :not() ) = * {}

1. Element type selector e pseudo-elements ( :: before :: after) = h1 {}

10. Classes e atribute selectors ( [type=”radio”]) = class=”title”, .title {}

100. ID selector = id=”my-title”, #my-title {}

1000. Inline = style=”color: ;”

## A regra *!important*

- cuidado, evite o uso
- não é considerada uma boa prática
- quebra fluxo natural da cascata

# At-rules @

- Está relacionado ao comportamento do CSS
- Começa com o sinal de ‘@’ seguido do identificador e valor

### Exemplos comuns

- @important         /* incluir um css externo */
- @media                /*regras condicionais para dispositivos */
- @front-face          /* fontes externas *
- @keyframes         /* animation */

```css
@important “http://local.com/style.css”;

@media (min-width: 500px) {

         /* rules here */

}

@font-face {

        /* rules here */

}

@keyframes nameofanimation {

       /* rules here */

}
```

# Shorthand

- junção de propriedades
- resumido
- legível

```css
{
        /* background properties */
        background-color: #000;
        background-image: url(images/bg.gif);
        background-repeat: no-repeat;        
        background-position: letf top;

        /* bacground shorthand */
        background: #000 url(images/bg.gif) no-repeat left top;

        /* font properties */
        font-style: italic;
        font-weight: bold;
        font-size: .Bem;
        line-height: 1.2;
        font-family: arial, sans-serif;

        /* font shorthand */
        font: italic bold .Bem/1.2 arial, sans-serif;
}
```

## Detalhes

- não irá considerar propriedades anteriores
- valores não especificados irão assumir o valor padrão
- geralmente, a ordem descrita não importa mas se houver muitas propriedades com valores semelhantes, poderemos encontrar problemas

## Propriedades que aceitam shorthand

- animation, background,  border, border-bottom, border-color, border-left, border-radius, border- right, border-style, border-top, border-width, column-rule, columns, flex, flex-flow, font, grid, grid-area, grid-column, grid-row, grid-template, list-style, margin, offset, outline, overflow, padding, place-content, place items, place-self, text-decoration, transition

# Funções

- nome seguido de abre e fecha parêntesis
- recebe argumentos

## Exemplos

```css
@import url("http://urlaqui.com/style.css);

{
	color:mrgb(255, 0, 100);
	width: calc(100% - 10px);
}
```

# Vendor Prefixes

- Permite que browsers adicione ‘features’ a fim de colocar em uso alguma novidade que veremos no CSS

## Exemplos

```css
p {
-webkit-background-clip: text; /* chrome, safari, ios e android */
-moz-background-clip: text;   /* mozilla (firefox) */
-ms-background-clip: text;   /* internet explorer */
-o-background-clip: text;   /* opera */
```

[http://www.ireade.github.io/wich-vendor-prefix/](http://ireade.github.io/wich-vendor-prefix/) 

http://caniuse.com
# Alinhando os planetas

# Layouts CSS

## Elementos distribuidos na tela

## Normal flow

É a maneira que os elementos ‘block’ e ‘inline’ ficam na página

## Tables

É a maneira de tabelas onde a tag ‘table’ recebe um display ‘table’ fazendo com que os elementos internos como ‘td’ e ‘tr’ possam ser usados para montar uma tabela

```html
<table>
    <tr>
        <td>Hora</td>
        <td>20:00</td>
    </tr>
    <tr>
        <td>Hora</td>
        <td>20:37</td>
    </tr>
</table>
```

## Tableless

Uso das propriedades  ‘float’, ‘clear’ para que os elementos possam mudar de posição na tela

```html
<div style="float: left">
    esquerda
</div>

<div style="float: right">
    direita
</div>

<div style="clear: both;">
    normal
</div>
```

## Flexbox

A caixa se torna flex, fazendo com que seus elementos internos possam receber melhor:

- Alinhamento
- Ordenação
- Tamanhos flexíveis

```css
/* 
<div class="flexbox">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div> */
.flexbox {
    display: flex;
    justify-content: column;
}

.item:nth-child(1) {
    order: 1;
}
```

# Propriedades do Flex container

## Direção dos itens

- Flex é uma dimensão (horizontal ou vertical)
- podemos mudar a direção com ‘flex-direction’
- valores: (row | row-reverse | column | column-reverse)

## Multiplas linhas

- Flex-wrap
- cada nova linha, um novo flex container

## Direção e multi linhas em uma única propriedade

- Flex-flow
    - shorthand
    - flex-direction || flex-wrap

## Alinhamento dos itens no eixo principal

- justify-content
    - alinhamento dos elementos dentro do container
    - valores:
        - flex-start
        - flex-end
        - center
        - space-around
        - space-between
        - space-evenly

## Alinhamento dos itens no eixo cruzado

- align-items
    - alinhamento no eixo cruzado
    - valores:
        - stretch - esticados
        - flex-start
        - flex-end
        - center

## Espaço entre os elementos

- gap
    - Espaços entre os elementos
    - valoes:
        - unidades de medidas
        - fixas: px pt
        - flexíveis: %, em, rem

# Propriedades dos itens

## Largura e altura dos itens com flex-basis

- se o flex-basis estiver com algum valor que não seja auto, ele toma pra ele a propriedade do width, que por sua vez fica sem poder fazer nada.

## Crescimento e adaptação dos itens

- flex-grow
    - o crescimento do item dentro do container em relação aos espaços vazios

## Encolhimento e encaixe dos elementos

- flex-shrink
    - o encolher do item dentro do container

## Shorthand flex

- flex
    - shorthand
    - flex-grow | flex-shrink | flex-basis
    - podem ter 1, 2 ou 3 valores

## Ordenando itens

no CSS usa *order:*
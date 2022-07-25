# Posicionando foguetes

# Layouts

- Tables
- Floats e clear (elementos flutuantes e o clear para parar de flutuar)
- Frameworks e Grid systems
- Flexbox
- Grid

# Position

Controlar onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos

- Name: Position
- Value: Static l relative l absolute l fixed

# Relative

- top, right, bottom, left, z-index

```css
/* 
HTLM
<link rel="stylesheet" href="position.css">
<div class="box1 box"></div>
<div class="box2 box"></div>
<div class="box3 box"></div>
*/
.box {
    width: 100px;
    height: 100px;
    margin: 8px;
}

.box1 {
    background-color: blueviolet;
    position: relative;
    left: 200px;
    top: 80px;
}

.box2 {
    background-color: aquamarine;
    position: relative;
    left: 20px;
    top: -30px;
}

.box3 {
    background-color: orangered;
    height: 20px;
    position: relative;
    left: 100px;
    top: 50px;
}
```

# Absolute

É como se não existisse mais a camada para o elemento que foi movido, e ele entrasse em outra camada

# Element stacking

## Z-index

```css
/*

.box {
    width: 100px;
    height: 100px;
    margin: 8px;
}

.box1 {
    background-color: blueviolet;
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 3;
}

.box2 {
    background-color: aquamarine;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 4;
}

.box3 {
    background-color: orangered;
    position: absolute;
    top: 15px;
    left: 15px;
}
```

# Flexbox

- Nos permite posicionar os elementos dentro da caixa
- Controle em uma dimensão (horizontal ou vertical)
- Alinhamento, direcionamento, ordenar e tamanhos

```css
/*
HTML
<link rel="stylesheet" href="position.css">

<div class="container">
        <div class="box blueviolet"></div>
        <div class="box aquamarine"></div>
        <div class="box orangered"></div>
</div>
*/

body {
    height: 100vh;
    margin: 0%;
    display: flex;
    align-items: center;
}

.container {
    width: 100vw;
    display: flex;
    justify-content: center;
}

}

.blueviolet {
    background-color: blueviolet;
}

.aquamarine {
    background-color: aquamarine;
}

.orangered {
    background-color: orangered;
}
```

## flex-direction

- Qual a direção do flex: horizontal ou vertical
- row l column

## alinhamento

- justify-content
- align-items

# Grid

- Posicionamento dos elementos dentro da caixa
- Posicionamento horizontal e vertical ao mesmo tempo
- Pode ser flexível ou fixo
- Cria espaços para elementos filhos habitarem

```css
body {
    margin: 0%;
    height: 100vh;
    display: grid;
    grid-template-areas:
    "header header"
    "main aside"
    "footer footer" ;
    grid-template-rows: 30px 1fr 40px;
    grid-template-columns: 1fr 80px;
}

header {
    grid-area: header;
    background-color: green;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

main {
    grid-area: main;
    background-color: brown;
}

aside {
    grid-area: aside;
    background-color: aqua;
}

footer { 
    grid-area: footer;
    background-color: gray;
}
```

# Agora sim, cores

# Cores

- Usamos CSS para alterar cores do nosso documento

## Tipos

- background-color (para caixas)
- color (para textos)
- border-color (para caixas)
- outros…

## Valores

Podemos definir os valores por

- palavra-chave (blu, transparent)
- hexadecimal (#990011)
- funções: rgb, rgba, hsl, hsla

```css
element {
/*keyword values*/
color: currentcolor;

/*<named0color> values*/
color: red;
color: orange;
color: tan;

/*<hex-color> values 0-f*/
color: #090;  /*RED GREEN BLUE*/
color: #009900;
color: #090a;
color: #009900aa;

/*<rgb()> values*/
color: rgb(34, 12, 64, 0.6); /*0-225*/
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.6);
color: rgb(34 12 64 / 60%);

/*<hsl()> values*/
color: hsl(30, 100%, 50%, 0.6); /*Hue - Saturation - Lumiance*/
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30 100% 50% / 60%);

/*Global values*/
color: inherit; /*herança da cor anterior*/
color: initial; /*volta a sua cor inicial*/
color: unset; /*pega cor do momento*/

}
```

# Background

- Define o fundo para o nosso elemento
- Sua área de atuação é a caixa toda
- Por padrão, é transparente

## Exemplos

- usar cores sólidas
- usar imagens
- controlar
    - a posição das imagens
    - se elas se repetem ou não
    - o tamanho delas na caixa
- usar cor e imagem juntas
- usar cor gradiente

```css
element {
background-color: rgb (55, 100, 50);
background-image: url();
background-repeat: no-repeat;
background-position: right bottom;
background-size: contain;
background-origin: padding-box;
background-clip: padding-box;
background-attachment: fixed;
/*shorthand*/
background: rgb (55, 100, 50) url() no-repeat right bottom / contain padding-box fixed;
/*gradiente*/
background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 0, 0.2)), url() no-repeat right top / 50px border-box content-box fixed;;
background: radial-gradient(45deg, red, yellow)
}
```
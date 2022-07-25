# App bonito, até nos textos

# Trabalhando com fontes

Tipografia transmite mensagem

- negrito
- tamanho
- estilo

# Basic Font Properties

## Font-family

- tipo de fonte de um elemento
- lista de fontes e ordem de prioridades
- inclui *fallback* font

```css
p {
    font-family: "Times New Roman", Times, serif;
}
```

-Serif (fonte que tem dobrinhas em suas letras)

-Sans (fonte mais reta)

## Font-weight

- Peso da fonte

```css
p {
	font-weight: bold;
}
```

## Font-style

- Estilo da fonte

```css
span {
	font-style: italic;
}
```

## Font-size

- Tamanho da fonte

```css
p {
	font-size: 120px;
}
```

# Web Fonts

- fontes do sistema x fontes da web
- como usar fontes para web?
    - @font-face
    - @import
    - link

pegar fonte no [fonts.google.com](http://fonts.google.com) extrair como link e colocar no head do HTML para poder mexer no CSS.

# Font-Variant

- variações na apresentação fonte

```css
p {
	font-variant: small-caps;
}
```

# Font-stretch

- alargamento ou encolhimento da fonte
- aceita palavras-chave como: expanded, condensed, normal
- aceita porcentagem de 50% a 200%

```css
p {
	font-stretch: expanded;
}
```

# Letter spacing

- espaço entre caracteres

```css
p {
	letter-spacing: 4px;
}
```

# Word-spacing

- espaço entre palavras

```css
p {
	word-spacing:5px;
}
```

# Line-height

- espaço entre linhas
- pode ser com unidades ou sem unidades de medida
- comuns: 1.5 ou 2

```css
p {
		line-height: 1.6;
}
```

# Text-transform

- Transformação do texto

```css
p {
	text-transform: uppercase; /* capitaçize l lowercase l none */
}
```

# Text-decoration

- aparência decorativa de um texto
- line: underline l overline l line-through
    - podemos aplicar mais de 1 valor
- style: wavy l doteed l double l dashed l solid
- color: ‘<color>’ value

```css
p {
	text-decorating: underline wavy red; /* shorthand*/
}
```

# Text-align

- alinhamento de texto

```css
p {
	text-align: center; /* left, right, center, justify */
}
```

# Text-shadow

- sombra aplicada a um texto
- permite múltipls valores

```css
p {
	text-shadow: 1px 1px 1px red,
							2px 2px 1px green; /* offset-x, offset-y, blur-radius, color */
}
```

# Shorthand

- font-style, font-variant, font-weight, font-stretch, font-size, font-height, e font-family

```css
p {
	/* -style, -variant, -weight, -stretch, -size, -line-height, e -family */
	font: italic normal bold normal 3em/1.5 Belvica, Arial, sans-serif;
}
```

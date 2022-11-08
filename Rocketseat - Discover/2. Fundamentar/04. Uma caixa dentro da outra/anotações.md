# Uma caixa dentro da outra

# Box model

- fundamental para fazer layouts para a web
- maior facilidade para aplicar o CSS

## O que é?

- uma caixa retangular
- Essa caixa possui propriedades de uma caixa (2D)
    - Tamanho                               width l height
    - Conteúdo                              content
    - Bordas                                   border
    - Preenchimento interno       padding
    - Espacos fora da caixa          margin
- Cada elemento na sua página, será considerado uma caixa

# Box sizing

## Como será calculado o tamanho total da caixa?

— content-box l border-box

```css
div {
		width: 100px;
		height: 100px;
		border: 1px solid pink;
		margin: 10%;
		padding: 0 20px;
	
		box-sizing: border-box;
}
```

# Display-block-inline

- Como as caixas se comportam em relação às outras caixas
- Comportamento externo das caixas

| Block | Inline |
| --- | --- |
| Ocupa toda a linha, colocando o próximo elemento abaixo desse | Elemento ao lado do outro |
| Width e height são respeitados | Width e height não funcionam |
| Padding, margin, border irão funcionar normalmente | Somente valores horizontais de margin, padding e border |

## Exemplos

block: ‘ <p> <div> <section>’, todos os headings ‘ <h1><h2>…’

inline: ‘ <a> <strong> <span> <em>

# Margin

## Espaço entre os elementos

— margin-top l margin-right l margin-bottom l margin-left

— values: ‘<length> l ‘<percentage>’ l auto

```css
div {
	/* shorthand */
	margin: 12px 16px 10px 4px;
	margin: 12px 16px 0;
	margin: 8px 16 px;
	margin: 8px;
}
/* cuidado com margin collapising (top se junta ao bottom) so no block, não tem isso no inline */
```

# Padding

## Preenchimento interno da caixa

— padding-top l padding-right l padding-bottom l padding-left

— Values: ‘<length> l ‘<percentage>’ 

```css
div {
		/*shorthand*/
		padding: 12px 16px 10px 4px;
		padding: 12px 16px 0;
		padding: 8px 16px;
		padding: 8px;
}

/* padding poderá causar diferença na largura de um elemento*/
```

# Border (e outline)

## As bordas da caixa

— value: ‘<border-style>’ l ‘<border-width>’ l ‘<border-color>’

— style: solid l dotted l dashed l double l groove l ridge l inset l outset

—width: ‘<length>’

— color: ‘<color>’

```css
div {
	/*shorthand*/
	border-top: solid 2px; /* top, right, bottom, left */

	/*style*/
	boder: solid;

	/*width <length>, style*/
	border: 2px dotted;

	/*style, color*/
	border: outset #f33;

	/*width, style, color*/
	border: medium dashed green;
}
```

- E outline?
    - Difere em 4 sentidos
        - Não modifica o tamanho da caixa, pois não é parte do box model
        - Poderá ser diferente de retangular
        - Não permite ajuste individuais
        - Mais usado pelo user agent para acessibilidade
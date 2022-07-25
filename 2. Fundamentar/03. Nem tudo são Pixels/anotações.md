# Nem tudo são Pixels

# Valores e unidades de medidas

- cada propriedade possui valores ‘property: value’
- estudo constante a fim de entender as propriedades e seus valores

## Prática

- como conhecer e estudar os valores na documentação?
    - <color> <length>
- os termos podem variar. ‘value’ ou ‘data types’

# Tipos numéricos e unidades comuns

## Tipos numéricos

- <interger>          Número inteiro como -10 ou 223
- <number>          Número decimal como -2.44, 64 ou 0.234
- <dimension>      É um <number> com a unidade junto: 90deg, 2s, 8px
- <percentagem> a fração de outro número: 50%

## Unidades comuns

- <length>          Representa um valor de distância: px em vw
- <angle>           Representa um ângulo: deg, rad, turn
- <time>             Representa um tempo: s, ms
- <resolution>   Representa resoluções para dispositivos: dpi

# Distância absoluta e relativas

## Distância absoluta <length>

- São fixas e não alteram seu valor

Unidade       Nome                     Equivalência

cm                Centímetros           1cm=96px/2.54

in                  Inches                     1in=2.54cm =96px

px                 Pixels                      1px=1/96th of 1in

- o mais comum e utilizado é o **px**
- não recomendado usar cm

## Distância relativa

- São relativas a algum outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela
- benefício: maior adaptação aos diferentes tipos de tela

Unidade        Relativo a 

em                 Tamanho da font do pai

rem               Tamanho da font do elemento raiz (root/html)

vw                 1% da viewport width

vh                  1% da viewport height

# Porcentagens

- Em muitos casos é tratado da mesma maneira que as distâncias <length>
- Sempre será relativo a algum valor

# Position

<position>

Representa um conjunto de coordenadas 2D:

— top, right, bottom, left e center

- Usado para alguns tipos de propriedades
- Não confundir com a propriedade ‘position’

# Função

Em programação, funções são reconhecidas por causar um reaproveitamento de código

- rgb( )
- hsl( )
- url( )
- calc( )

# Strings e identificadores

- String: Texto envolto em aspas
- Identificadores: red, black, gold
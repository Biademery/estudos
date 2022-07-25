# Posso ver e ouvir o HTML

# Vídeo

- src
- contols
- se não funcionar?
    - feedback content
- source
    - src
    - type
- sobre serviços de terceiros

```html
<video controls
    width="500"
    height="400"
    autoplay
    preload="auto"
    loop
    muted
    poster="./icon.png"
>
    <source src="./assets-example/rocket.mp4" type="video/mp4">
    <p>Este browser não suporta video, baixe-o aqui <a href=""></a>
    </p>
</video>
```

# Áudio

- src
- contols
- se não funcionar?
    - feedback content
- source
    - src
    - type
- sobre serviços de terceiros

```html
<audio controls autoplay muted loop>
    <source src="./assets-example/viper.mp3"
    type="audio/mp3">
    <source src="./assets-example/viper.ogg"
    type="audio/ogg">
    <p>Seu navegador não suporta áudio.</p>
</audio>
```

# Iframe

## Atributos

- src
- height
- width
- title (acessibilidade)
- allowfullscreen
- frameborder

```html
<iframe 
    width="560"
    height="315"
    src="https://www.youtube.com/embed/VuNIsY6JdUw"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    title="Vídeo da Taylor Swift" >
</iframe>
```

# Imagens

- src
- alt
- title
- width
- height
- adicionaando links

```html
<a href="https://google.com">
    <img    
        src="https://source.unplash.com/radom"     
        alt="Imagem de title"
        title="Colocar um título na imagem"
        height="250px"
    >
</a>
```
## Background-image

- com a tag style
- somente para estilo
- não é semântico e falta significado

## Criando títulos visíveis para as imagens

<figure> e <figcaption>

```html
<a href="https://rocketseat.com.br/">
<figure>

    <img        
        src="https://rocketseat.com.br/icons/icon-48x48.png"                                        
        alt="Imagem não carregada."
        title="Ícone da rocketseat"
        height="50px"
        >
    <figcaption>Colocar um título na imagem</figcaption>
</figure>
</a>
```
## Background-image

- com a tag style
- somente para estilo
- não é semântico e falta significado

## Criando títulos visíveis para as imagens

<figure> e <figcaption>

```html
<a href="https://rocketseat.com.br/">
<figure>

    <img        
        src="https://rocketseat.com.br/icons/icon-48x48.png"                                        
        alt="Imagem não carregada."
        title="Ícone da rocketseat"
        height="50px"
        >
    <figcaption>Colocar um título na imagem</figcaption>
</figure>
</a>
```

## SVG

**Scalable Vector Graphics**

- É uma marcação, estilo html, mas não é para textos, e sim para fazer imagens
- Possuímos elementos para gerar formas
- Para entender melhor
    - Imagem rasterizada (imagem feita via pixel) x Imagem vetorizada (imagem feita via algoritmo)

### Benefícios

- Mais leve
- Mais detalhada
- Maior acessibilidade e SEO
- Pode ser editada via CSS ou atributos

### Desvantagens

- Pode ser mais complicado de trabalhar
- Quanto mais complexa a imagem, mais trabalho para o navegador
- Navegadores mais antigos nçao possuem suporte a essa tag
- Para fotografias, ainda prefira usar imagens rasterizadas

```html
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```
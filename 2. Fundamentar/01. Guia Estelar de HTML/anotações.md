# Guia Estelar de HTML

# Conceitos

## Como colocar comentários

```html
<!-- Comentário -->
```

## Anatomia das Tags

```html
<h1>
		O título
</h1>
```

### Abertura de tag

→ <h1>

### Fechamento de tag

→ </h1>

### Conteúdo

 → O título

### Elementos

→ A junção de tudo acima

### Elementos vazios

→ Imagem não tem conteúdo, só atributos

```html
<img src="" alt="">
<input type="text">
```

## Atributos

- Informações extras

### Configurações (como no caso da img)

```html
<img src="conteúdo" alt="">

```

### Atributos booleanos (não precisa de conteúdo)

```html
<input type="text" disabled>
<!-- esse disabled desativa a caixa de texto
-->
```

### Aspas

- omissão
- simples
- duplas (use sempre as duplas)

```html
<a href="">Essa tag põe um link</Link></a>

```

## Atributos globais

### class

```html
<div
    class="carrinho"
>
    <!-- elementos aqui dentro-->
</div>
<!-- classifica -->
```

### contenteditable

```html
<div
    class="carrinho" contenteditable="true"
>
    conteúdo
</div>
<!-- ativa para edição -->
```

### data-*

```html
<div
    class="carrinho" data-qualquer-nome-aqui=""
>
    conteúdo
</div>
<!-- separação por - ou tudo junto. Muito utilizado no js -->
```

### hidden

```html
<div
    class="carrinho" hidden
>
   conteúdo
</div>
<!-- esconde -->
```

### id

```html
<div
    class="carrinho" hidden id="name"
>
   conteúdo
</div>
<!-- cada id tem que ser diferente -->
```

### style

```html
<div
    class="carrinho" style="color: red"
>
   conteúdo
</div>
```

### tabindex

```html
<div tabindex="1">
conteúdo
</div>

<div tabindex="3">
conteúdo
</div>

<div tabindex="2">
conteúdo
</div>
<!-- passa com as teclas de suubir e descer -->
```

### title

```html
<div title="Definir um título">
conteúdo
</div>
```

- [ ]  developer.mozilla.org

## Aninhamento Hierarquia

### Colocar uma tag dentro da outra

```html
<p>
   <em>Escrever</em> um parágrafo
</p>
```

### Hierarquia

```html
<div>
    <p>
   <em>Escrever</em> um parágrafo
</p>
</div>
<!-- a tag div é pai da tag p que é pai da tag em -->
```

### Fluxo (uma tag abaixo da outra)

### Posicionamento dos elementos

```html
<p> 
    Esse é um texto
    Aqui é outro
</p>

<p>
    Esse é um <em>texto</em>
    <p>Aqui é outro</p>
</p>

<!-- no primeiro não houve uma quebra no texto, ja no segundo sim -->
```

## Conteúdo do texto e caracteres reservados

```html
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    os espaços
    <br>
    que colocamos
    <br>
    além das quebras, são ignorados
</p>

```

### Caracteres reservados

- < → &lt;
- > → &gt;
- & → &amp;
- “” → &quot
- ‘ → &apos;

```html
<p>
    &lt;
    os espaços &gt;
		&amp;
    <br>
    &quot; que colocamos &quot;
    <br>
    além das quebras, são ignorados
</p>
```

## Anatomia de um documento

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title> Bia D'Emery </title>
    </head>

    <body>
        <h1>Titúlo</h1>
        <p>
           <strong>Oi gente</strong> 
        </p>
        <p>
            alguma coisa
        </p>
    </body>

</html>

<!-- ou só colocar uma ! -->

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- nameviewport, uma página tanto visível em dispositivos móveis quanto 
em desktops -->
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

# Trabalhando com Elementos

## Semântica

- Dar significado
- Elementos semânticos
1. Fazer perguntas: Qual são os elementos que melhor descreve o que eu vou fazer?

## Cabeçalhos e parágrafos

```html
<!-- 
    Geralmente se usa um H1 por pagina, não precisa ter mais de 3 tipos de H por página
-->

<h1> 
    Sobre mim
</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> 
   <p> Expedita distinctio, natus accusamus ullam illum fugit eveniet quam iste harum quisquam laudantium voluptatum labore sapiente! Non amet laborum consequatur dolorum fuga.</p>
<h2>
    Nascimento
</h2>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem harum natus tempore eos amet? Eaque accusamus nobis, minus sit sequi nihil et aliquid id officiis error esse temporibus harum.
<h2>
    Trabalho
</h2>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, error beatae pariatur explicabo hic dignissimos soluta sint at tempora inventore nesciunt incidunt placeat voluptatem quia minima, eum fuga. Modi, ex.
<a href="">Saiba mais</a>
```

## Listas

### Ordenadas

```html
<h1>Suco detox</h1>
<h2>Ingredientes:</h2>

<ol>
    <li>3 folhas de couve;</li>
    <li>1 laranja;</li>
    <li>1 pedacinho de gengibre;</li>
    <li>300 ml de áhua;</li>
    <li>Adoçante a gosto;</li>
    <li>Gelo a gosto.</li>
</ol>
```

### Não ordenadas

```html
<h1>Suco detox</h1>
<h2>Ingredientes:</h2>

<ul>
    <li>3 folhas de couve;</li>
    <li>1 laranja;</li>
    <li>1 pedacinho de gengibre;</li>
    <li>300 ml de áhua;</li>
    <li>Adoçante a gosto;</li>
    <li>Gelo a gosto.</li>
</ul>
```

## Citações

- <Blockquote> : Texto externo foi citado
- <Cite> : Cita o link
- <q> : Citações curtas, sem quebra de linha

## Abreviações

### <abbr>

```html
<p>Usamos <abbr title="Hypertext Markup Language">HTML</abbr> para estruturar nossos documentos da web.</p>
```

## Detalhes de contato

### <address>

```html
<address>
    <p>
        Mayk Brito <br>
        <strong> Campo Grande, MS</strong>
    </p>
</address>
```

## Lista de descrição

- <dl> : Description list
- <dt> : Description term

```html
<h2>Glossário</h2>
<dl>
    <dt>Hypertext</dt>
    <dd> É um hiper texto com possibilidades...</dd>

    <dt>Markup</dt>
    <dd>Marcação do texto</dd>

    <dt> Language</dt>
    <dd>Linguagem com sua semântica...</dd>
</dl>
```

## Representação de códigos

- <code> : Partes genéricas de código
- <pre> : Blocos de código, pois essa tag mantém os espaços em brancos e recuos que eu colocar no meu código

```html
<pre>
    <code>    document
									.querySelector("body")

    </code>
</pre>
```

## Elementos genéricos

- <div> : bloco
- <span> : linha

```html
<div> 
    Um texto qualquer
</div>
<span>outro</span> <span>texto</span>
```

# Links

## Hiperlinks - Elemento âncora <a>

### Anatomia:

```html
<a href=""></a>
```

### Atributos

- Globais (title, id, class)
- Href: para onde iremos, quando clicarmos no link?
    - Url completa : http://google.com
    - fragmento
    
    ```html
    <p>Saiba mais</p>
    <ul>
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#history">História</a></li>
        <li><a href="#works">Trabalhos</a></li>
    </ul>
    
    <h1 id="about">Sobre mim</h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ducimus cumque, voluptatem aliquam fugiat commodi recusandae nobis perspiciatis quia aspernatur facere libero mollitia rem consequuntur quasi. Magni quas corrupti nobis?
    
    <h2 id="history">História</h2>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime rem maiores, molestiae fugiat voluptatem ex nesciunt. Laudantium assumenda odio quos officiis dicta. Libero nam natus optio ut. Quibusdam, dolorum incidunt?
    
    <h2 id="works">Trabalho</h2>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, vero provident ratione et labore sunt voluptatum beatae voluptates autem, quis non quam suscipit iste, magni maiores quae quidem aspernatur corporis!
    ```
    
    - email : mailto:biademery@gmail.com
    - telefone : tel:+5583981608118
    - e outros
- Download : ao invés de ir para o link, faz o download
- Target
    - _self (padrão) : na própria guia que está usando
    - _blank : abre uma nova guia

## Conteúdos dos hyperlinks

### Qualquer conteúdo

```html
<a href="http://google.com" title="Ir para google">
<h1>google</h1>
<p>Claro que posso</p>
<img src="https://source.unsplash.com/random" alt="">
</a>
```

## URLs e Caminhos dos arquivos

### Uniform Resource Locator

- [https://www.rocketseat.com.br](https://www.rocketseat.com.br)
- Sequência de texto que define onde algo está localizadona web

→ URL usam caminhos para encontrar arquivos

→ Caminho dos arquivos

- Onde, no explorador de arquivos, um recurso está localizado

## Como navegar pelos caminhos?

### Mesmo diretório

```html
<a href="Diretório/outros">entrando no Diretório
</a>
```

### Entrando em diretório

### Saindo de diretório

```html
<a href="../A Instrução Normativa 1 ALTERAÇÃO dctf.docx">saindo do Diretório
</a>
```

### Diretório raiz (root ou pai)

```html
<a href="./index.html">no diretório raiz</a>
```

## URLs absolutos versus relativos

### Absolutos

- Inclui protocolo e nome do domínio
    - http://www.rocketseat.com.br/projetos/index.html
- Sempre apontará para o mesmo local, pois é absoluto

### Relativos

- Relativo à página aberta no momento
- apontará para lugares diferentes

# Tabelas

## Table

### Prós

- Visualização de dados via linhas e colunas
- Boa acessibilidade para leitura dos dados

### Contras

- Pouco flexível
- Precisa de estilização para melhor visualização

### Não usar

- Para criar layout
1. Tr = Table row : Linha
2. Th = Cabeçalho
3. Td = Descrição de cada coluna

## Tabela básica

```html
<table>
    <tr>
        <th>Nome</th>
        <th>Idade</th>
    </tr>
    <tr>
        <td>Mayk</td>
        <td>35</td>
    </tr>
    <tr>
        <td>Bia</td>
        <td>22</td>
    </tr>
</table>
```

## Organizando Tabelas

```html
<table>

    <caption>Pessoas por idade</caption>
    
    <thead>
        <tr>
            <th>Nome</th>
            <th>Idade</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Mayk</td>
            <td>35</td>
        </tr>
        <tr>
            <td>Bia</td>
            <td>22</td>
        </tr>
    </tbody>
    
    <tfoot>
        <td>Total:</td>
        <td>2 pessoas</td>
    </tfoot>
</table>
```

## Tabela Complexa

```html
<table>

        <caption>Produzidos x Vendidos por Loja</caption>

        <colgroup>
            <col>
            <col span="2" style="background-color:red ;">
            <col span="2" style="background-color:blue ;">
        </colgroup>

        <Thead>
                <tr>  
                    <th rowspan="2"></th> 
                    <th colspan="2" scope="colgroup">Afondo Pena</th>
                    <th colspan="2" scope="colgroup">Antônia Pereira</th>
                </tr>
                
                <tr>
                    <th scope="col">Produziddos</th>
                    <th scope="col">Vendidos</th>
                    <th scope="col">Produzidos</th>
                    <th scope="col">Vendidos</th>
                </tr>
        </Thead>

        <tbody>
            <tr>
                <th scope="row">Vassouras</th>
                <td>50</td>
                <td>30</td>
                <td>20</td>
                <td>20</td>
            </tr>

            <tr>
                <th scope="row">Baldes</th>
                <td>10</td>
                <td>10</td>
                <td>30</td>
                <td>25</td>
            </tr>
        </tbody>
</table>
```

# Cabeçalho

## Head

### Meta

- Atributos
    - chaset
    - name
    - content
    
    ```html
    <head>
                <!-- codificação de caracteres especiais-->
                <meta charset="UTF-8">
    
                <!-- portabilidade para dispositivos mobiles-->
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    </head>
    ```
    

### Meta SEO

- chaset
- viewport
- author
- description
- robots

```html
<head>
    <!-- SEO: search engine optimization (motores de busca = google)-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="author" content="Mayk Brito">
    <meta name="description" content="Um website para iniciantes de programação">
    <meta name="robots" content="index, follow">

</head>
```

### Meta social

```html
<!--
    <meta> para redes sociais
-->
<head>
    <!-- Open Graph: facebook -->
    <meta property="og:image" content="https://...">
    <meta property="og:description" content="Aui vem um texto para ser mostrado ao compartilhar no facebook">
    <meta property="og:title" content="Um site da Rocketseat">

    <!-- Twitter-->
    <meta name="twitter:title" content="Rocketseat">

</head>
```

### Favicon
# Guia Estelar de HTML

# Conceitos

## Como colocar comentários

```html
<!-- Comentário -->
```

## Anatomia das Tags

```html
<h1>
		O título
</h1>
```

### Abertura de tag

→ <h1>

### Fechamento de tag

→ </h1>

### Conteúdo

 → O título

### Elementos

→ A junção de tudo acima

### Elementos vazios

→ Imagem não tem conteúdo, só atributos

```html
<img src="" alt="">
<input type="text">
```

## Atributos

- Informações extras

### Configurações (como no caso da img)

```html
<img src="conteúdo" alt="">

```

### Atributos booleanos (não precisa de conteúdo)

```html
<input type="text" disabled>
<!-- esse disabled desativa a caixa de texto
-->
```

### Aspas

- omissão
- simples
- duplas (use sempre as duplas)

```html
<a href="">Essa tag põe um link</Link></a>

```

## Atributos globais

### class

```html
<div
    class="carrinho"
>
    <!-- elementos aqui dentro-->
</div>
<!-- classifica -->
```

### contenteditable

```html
<div
    class="carrinho" contenteditable="true"
>
    conteúdo
</div>
<!-- ativa para edição -->
```

### data-*

```html
<div
    class="carrinho" data-qualquer-nome-aqui=""
>
    conteúdo
</div>
<!-- separação por - ou tudo junto. Muito utilizado no js -->
```

### hidden

```html
<div
    class="carrinho" hidden
>
   conteúdo
</div>
<!-- esconde -->
```

### id

```html
<div
    class="carrinho" hidden id="name"
>
   conteúdo
</div>
<!-- cada id tem que ser diferente -->
```

### style

```html
<div
    class="carrinho" style="color: red"
>
   conteúdo
</div>
```

### tabindex

```html
<div tabindex="1">
conteúdo
</div>

<div tabindex="3">
conteúdo
</div>

<div tabindex="2">
conteúdo
</div>
<!-- passa com as teclas de suubir e descer -->
```

### title

```html
<div title="Definir um título">
conteúdo
</div>
```

- [ ]  developer.mozilla.org

## Aninhamento Hierarquia

### Colocar uma tag dentro da outra

```html
<p>
   <em>Escrever</em> um parágrafo
</p>
```

### Hierarquia

```html
<div>
    <p>
   <em>Escrever</em> um parágrafo
</p>
</div>
<!-- a tag div é pai da tag p que é pai da tag em -->
```

### Fluxo (uma tag abaixo da outra)

### Posicionamento dos elementos

```html
<p> 
    Esse é um texto
    Aqui é outro
</p>

<p>
    Esse é um <em>texto</em>
    <p>Aqui é outro</p>
</p>

<!-- no primeiro não houve uma quebra no texto, ja no segundo sim -->
```

## Conteúdo do texto e caracteres reservados

```html
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    os espaços
    <br>
    que colocamos
    <br>
    além das quebras, são ignorados
</p>

```

### Caracteres reservados

- < → &lt;
- > → &gt;
- & → &amp;
- “” → &quot
- ‘ → &apos;

```html
<p>
    &lt;
    os espaços &gt;
		&amp;
    <br>
    &quot; que colocamos &quot;
    <br>
    além das quebras, são ignorados
</p>
```

## Anatomia de um documento

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title> Bia D'Emery </title>
    </head>

    <body>
        <h1>Titúlo</h1>
        <p>
           <strong>Oi gente</strong> 
        </p>
        <p>
            alguma coisa
        </p>
    </body>

</html>

<!-- ou só colocar uma ! -->

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- nameviewport, uma página tanto visível em dispositivos móveis quanto 
em desktops -->
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

# Trabalhando com Elementos

## Semântica

- Dar significado
- Elementos semânticos
1. Fazer perguntas: Qual são os elementos que melhor descreve o que eu vou fazer?

## Cabeçalhos e parágrafos

```html
<!-- 
    Geralmente se usa um H1 por pagina, não precisa ter mais de 3 tipos de H por página
-->

<h1> 
    Sobre mim
</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> 
   <p> Expedita distinctio, natus accusamus ullam illum fugit eveniet quam iste harum quisquam laudantium voluptatum labore sapiente! Non amet laborum consequatur dolorum fuga.</p>
<h2>
    Nascimento
</h2>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem harum natus tempore eos amet? Eaque accusamus nobis, minus sit sequi nihil et aliquid id officiis error esse temporibus harum.
<h2>
    Trabalho
</h2>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, error beatae pariatur explicabo hic dignissimos soluta sint at tempora inventore nesciunt incidunt placeat voluptatem quia minima, eum fuga. Modi, ex.
<a href="">Saiba mais</a>
```

## Listas

### Ordenadas

```html
<h1>Suco detox</h1>
<h2>Ingredientes:</h2>

<ol>
    <li>3 folhas de couve;</li>
    <li>1 laranja;</li>
    <li>1 pedacinho de gengibre;</li>
    <li>300 ml de áhua;</li>
    <li>Adoçante a gosto;</li>
    <li>Gelo a gosto.</li>
</ol>
```

### Não ordenadas

```html
<h1>Suco detox</h1>
<h2>Ingredientes:</h2>

<ul>
    <li>3 folhas de couve;</li>
    <li>1 laranja;</li>
    <li>1 pedacinho de gengibre;</li>
    <li>300 ml de áhua;</li>
    <li>Adoçante a gosto;</li>
    <li>Gelo a gosto.</li>
</ul>
```

## Citações

- <Blockquote> : Texto externo foi citado
- <Cite> : Cita o link
- <q> : Citações curtas, sem quebra de linha

## Abreviações

### <abbr>

```html
<p>Usamos <abbr title="Hypertext Markup Language">HTML</abbr> para estruturar nossos documentos da web.</p>
```

## Detalhes de contato

### <address>

```html
<address>
    <p>
        Mayk Brito <br>
        <strong> Campo Grande, MS</strong>
    </p>
</address>
```

## Lista de descrição

- <dl> : Description list
- <dt> : Description term

```html
<h2>Glossário</h2>
<dl>
    <dt>Hypertext</dt>
    <dd> É um hiper texto com possibilidades...</dd>

    <dt>Markup</dt>
    <dd>Marcação do texto</dd>

    <dt> Language</dt>
    <dd>Linguagem com sua semântica...</dd>
</dl>
```

## Representação de códigos

- <code> : Partes genéricas de código
- <pre> : Blocos de código, pois essa tag mantém os espaços em brancos e recuos que eu colocar no meu código

```html
<pre>
    <code>    document
									.querySelector("body")

    </code>
</pre>
```

## Elementos genéricos

- <div> : bloco
- <span> : linha

```html
<div> 
    Um texto qualquer
</div>
<span>outro</span> <span>texto</span>
```

# Links

## Hiperlinks - Elemento âncora <a>

### Anatomia:

```html
<a href=""></a>
```

### Atributos

- Globais (title, id, class)
- Href: para onde iremos, quando clicarmos no link?
    - Url completa : http://google.com
    - fragmento
    
    ```html
    <p>Saiba mais</p>
    <ul>
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#history">História</a></li>
        <li><a href="#works">Trabalhos</a></li>
    </ul>
    
    <h1 id="about">Sobre mim</h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ducimus cumque, voluptatem aliquam fugiat commodi recusandae nobis perspiciatis quia aspernatur facere libero mollitia rem consequuntur quasi. Magni quas corrupti nobis?
    
    <h2 id="history">História</h2>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime rem maiores, molestiae fugiat voluptatem ex nesciunt. Laudantium assumenda odio quos officiis dicta. Libero nam natus optio ut. Quibusdam, dolorum incidunt?
    
    <h2 id="works">Trabalho</h2>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, vero provident ratione et labore sunt voluptatum beatae voluptates autem, quis non quam suscipit iste, magni maiores quae quidem aspernatur corporis!
    ```
    
    - email : mailto:biademery@gmail.com
    - telefone : tel:+5583981608118
    - e outros
- Download : ao invés de ir para o link, faz o download
- Target
    - _self (padrão) : na própria guia que está usando
    - _blank : abre uma nova guia

## Conteúdos dos hyperlinks

### Qualquer conteúdo

```html
<a href="http://google.com" title="Ir para google">
<h1>google</h1>
<p>Claro que posso</p>
<img src="https://source.unsplash.com/random" alt="">
</a>
```

## URLs e Caminhos dos arquivos

### Uniform Resource Locator

- [https://www.rocketseat.com.br](https://www.rocketseat.com.br)
- Sequência de texto que define onde algo está localizadona web

→ URL usam caminhos para encontrar arquivos

→ Caminho dos arquivos

- Onde, no explorador de arquivos, um recurso está localizado

## Como navegar pelos caminhos?

### Mesmo diretório

```html
<a href="Diretório/outros">entrando no Diretório
</a>
```

### Entrando em diretório

### Saindo de diretório

```html
<a href="../A Instrução Normativa 1 ALTERAÇÃO dctf.docx">saindo do Diretório
</a>
```

### Diretório raiz (root ou pai)

```html
<a href="./index.html">no diretório raiz</a>
```

## URLs absolutos versus relativos

### Absolutos

- Inclui protocolo e nome do domínio
    - http://www.rocketseat.com.br/projetos/index.html
- Sempre apontará para o mesmo local, pois é absoluto

### Relativos

- Relativo à página aberta no momento
- apontará para lugares diferentes

# Tabelas

## Table

### Prós

- Visualização de dados via linhas e colunas
- Boa acessibilidade para leitura dos dados

### Contras

- Pouco flexível
- Precisa de estilização para melhor visualização

### Não usar

- Para criar layout
1. Tr = Table row : Linha
2. Th = Cabeçalho
3. Td = Descrição de cada coluna

## Tabela básica

```html
<table>
    <tr>
        <th>Nome</th>
        <th>Idade</th>
    </tr>
    <tr>
        <td>Mayk</td>
        <td>35</td>
    </tr>
    <tr>
        <td>Bia</td>
        <td>22</td>
    </tr>
</table>
```

## Organizando Tabelas

```html
<table>

    <caption>Pessoas por idade</caption>
    
    <thead>
        <tr>
            <th>Nome</th>
            <th>Idade</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Mayk</td>
            <td>35</td>
        </tr>
        <tr>
            <td>Bia</td>
            <td>22</td>
        </tr>
    </tbody>
    
    <tfoot>
        <td>Total:</td>
        <td>2 pessoas</td>
    </tfoot>
</table>
```

## Tabela Complexa

```html
<table>

        <caption>Produzidos x Vendidos por Loja</caption>

        <colgroup>
            <col>
            <col span="2" style="background-color:red ;">
            <col span="2" style="background-color:blue ;">
        </colgroup>

        <Thead>
                <tr>  
                    <th rowspan="2"></th> 
                    <th colspan="2" scope="colgroup">Afondo Pena</th>
                    <th colspan="2" scope="colgroup">Antônia Pereira</th>
                </tr>
                
                <tr>
                    <th scope="col">Produziddos</th>
                    <th scope="col">Vendidos</th>
                    <th scope="col">Produzidos</th>
                    <th scope="col">Vendidos</th>
                </tr>
        </Thead>

        <tbody>
            <tr>
                <th scope="row">Vassouras</th>
                <td>50</td>
                <td>30</td>
                <td>20</td>
                <td>20</td>
            </tr>

            <tr>
                <th scope="row">Baldes</th>
                <td>10</td>
                <td>10</td>
                <td>30</td>
                <td>25</td>
            </tr>
        </tbody>
</table>
```

# Cabeçalho

## Head

### Meta

- Atributos
    - chaset
    - name
    - content
    
    ```html
    <head>
                <!-- codificação de caracteres especiais-->
                <meta charset="UTF-8">
    
                <!-- portabilidade para dispositivos mobiles-->
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    </head>
    ```
    

### Meta SEO

- chaset
- viewport
- author
- description
- robots

```html
<head>
    <!-- SEO: search engine optimization (motores de busca = google)-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="author" content="Mayk Brito">
    <meta name="description" content="Um website para iniciantes de programação">
    <meta name="robots" content="index, follow">

</head>
```

### Meta social

```html
<!--
    <meta> para redes sociais
-->
<head>
    <!-- Open Graph: facebook -->
    <meta property="og:image" content="https://...">
    <meta property="og:description" content="Aui vem um texto para ser mostrado ao compartilhar no facebook">
    <meta property="og:title" content="Um site da Rocketseat">

    <!-- Twitter-->
    <meta name="twitter:title" content="Rocketseat">

</head>
```

### Favicon

```html
<!--
    <link> para ícones personalizados
-->

<!-- favicon básico-->
<link rel="icon" href="/icons/icon-448x48.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<!-- iPhone não-Retina, iPod Touch e dispositivos Android 2.1+: -->
<link rel="apple-touch-icon-precomposed" href="https://developer.cdn.mozilla.net/static/img/favicon57.a24490b9a2d76.png"/>

<!-- iPad de primeira e segunda geração: -->
<link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-448x48.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-448x48.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-448x48.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

...
```
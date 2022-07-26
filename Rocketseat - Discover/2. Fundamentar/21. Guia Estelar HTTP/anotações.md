<h1>Guia Estelar HTTP</h1>

# Messagem

- troca de mensagens entre o cliente e o servidor

 # Pedido (request)
    > Methods 
        - Definição do tipo pedido
        - Qual ação eu quero fazer no servidor
        - Exemplo: 
            * Get - Pegar um recurso
            * Post - Criar um recurso
    > Headers
    > Body
       
 # Resposta (response)
    > Status Code
        - Resposta do servidor sobre o estado do pedido/resposta
        - Exemplo: 200, 301, 404, 500  
    > Headers
    > Body

 # Request / Response 
    > Headers
       * Campos informativos
        * Propriedade: valor
        * Exemplo: 
            Content-Type:application/json
            User-Agent:Chorme
            Request URL: www.google.com
        - Body
            * HTML
            * Content
            * JSON
  
  -------------------
> Recurso
    - Local que irei enviar o pedido
    - Usarei uma URL para acessar o recurso
    - Exemplo -> https://google.com/
    - htpps://localhost:3000/post?q=oracle

<h1>Conceitos HTTP</h1>

- Feito baseado em cliente-servidor

# Simples
    - Legível
    - Qualquer pessoa

# Cliente/servidor 
    - Requisição/Resposta
    - Pedir um lanche

# Stateless
    - Não guarda informações(estado)
    - Não existe relações entre conexões
    - Sessões
        > Cookies (Migalhas)
        > Storages

# Extensível
    - Através do cabeçalho, podemos fazer diversas trocas de informaçõesentre o cliente e o servidor, conforme a necessidade
    - Headers
        > Informações para comunicação
    - Body
        > Corpo do pedido ou da resposta

<h1>URI<h1>

<h3>Conceito</h3>
    URI
    - Uniform Resource Identifier (Identificador de Recurso Uniforme)
        > Identificar um recurso
        > Pode ser pelo Nome ou Localização
        > Exemplo
            * Se você é um recurso
            * Seu nome
            * Sua localização
 
<h3>Recurso</h3>
    - Alvo do meu pedido 
    - Qualquer coisa identificável/Entidade
        > Digital
            * Email -> mailto:email@dominio.com (mailto é um tipo de protocolo)

        > Abstrata
            * Sessão
            * Autenticação

        > Física
            * Produtos
            * Usuários

        > Se podemos identificar, nomear, endereçar ou manipular, estamos falando de um recurso

<h3>Locator</h3>
    - Locator
        URL
        > Uniform Resource Locator
        > Componentes 
            * obrigatórios
                Protocolo
                Dominio
            * opcionais
                Subdomínio
                Path
                Paramêtros
                Porta
                Âncora
        > Exemplos
            https://www.rocketseat.com.br/blog
            https://www.youtube.com/watch?v=vsdsKASD2
            htpp://127.0.0.1:3333/index.html#algumlugar 

<h3>Name</h3>
    -  eu tenho esse recurso, mas não o local dele.
    - URN: Uniform Resource Name
    - Exemplos:
        > urn:isbn:0451450523
        > urn:oasis:names:specification:docbook:dtd:xml:4.1.2
    

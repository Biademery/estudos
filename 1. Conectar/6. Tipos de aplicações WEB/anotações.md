# Tipos de aplicações WEB

# Webpage

- Página WEB
- Acessado pelo navegador
- Encontrado pelo endereço URL `https://rocketseat.com.br/discover`
- Resposta dada pelo servidor é uma cópia da página
    - HTML - Hyper Text Markup Language
    - CSS - Cascading Style Sheet
    - Javascript

# Website

- Sites
- Agrupamento, estruturado (arquitetado) de várias páginas WEB
- Pode ser:
    - Estático
    - Dinâmico
- Um usuário comum não sabe diferenciar entre estático e dinâmico

## Website estático

- Páginas estáticas
    - A página é sempre a mesma
    - Alteração direto no código e por quem a criou
- Não interage com o banco de dados

## Website dinâmico

- Conteúdo da página é dinâmico
- Interage com o banco de dados
    - dados + modelo da página = página dinâmica
- Modificação sem precisar mexer no código
- Com o mesmo modelo de página, é gerada uma página em tempo real

# Web Application

- Um programa, um software que vive no servidor
    - Linguagem de programação
    - Banco de dados
- Utilizado através da página web e pelo navegador
- É mais complexo e possui mais requisitos
- Exemplo: Facebook, GMail, Youtube, Figma

## Desafios

- Adaptação nos diversos dispositivos (Responsividade)
- Performance
- Acessibilidade
    - Visual, Auditiva, SEO (search engine optimization)

# Front-end vs Back-end

## Front-end

- Cliente (client-side)
- Browser
    - Digita a URL e faz um pedido (request) para o servidor
- Tecnologias
    - HTML, CSS, Javascript, Imagens
    - Frameworks e Bibliotecas

## Back-end

- Servidor (server-side)
- Recebe o pedido do front-end
    - Entende e processa o pedido e devolve para o front-end
    - Regras de negócio da aplicação
- Tecnologias
    - PHP, Java, Python, Javascript
    - Banco de dados

# Aplicação WEB Tradicional vs SPA

## Aplicação WEB Tradicional

- Recarregar a página para ter o conteúdo atualizado
- Front-end e o Back-end numa só aplicação
- Servidor processa e devolve toda a página de uma só vez

## SPA

- Single page application
    - A sensação é de ter uma única página
- Não precisa recarregar a página para ter o conteúdo atualizado
- Front-end e Back-end são aplicações diferentes
- Servidor responde a aplicação front-end
    - Front-end feito com uso de Frameworks
    - Back-end é no formato de API (application programe interface)
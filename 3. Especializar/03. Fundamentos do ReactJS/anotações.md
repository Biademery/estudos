# Fundamentos do ReactJS

## Primeiros passos com o React JS desenvolvendo uma lista de presença dinâmica, e consumindo API do Github.

- Conteúdo abordado
- Criação de projeto
- Executando projeto
- Estrutura do React
- JSX
- Estrutura, pasta e arquivos
- Fragment
- Importando arquivos CSS
- Separando CSS
- Estilizando página CSS
- Importando fonte
- Componentes
- Propriedades
- Estado
- Imutabilidade
- Key Prop
- Hooks
- Header
- useEffect
- Consumindo API
- useEffect Async
- Instalação do projeto
- npm install - para instalar as dependências

npm run dev - para iniciar o servidor

### Introdução:

- O que é ReactJS?

Uma biblioteca JavaScript que tem o objetivo de criação de interfaces.

- Porque ReactJS é uma biblioteca e não um framework?
- Porque ele não tem uma opinião forte, ele não tem uma estrutura de pastas e regras que os frameworks em si tem. Ele te dá mais liberdade para criar as interfaces da maneira que preferir.

## Criando o projeto:

Ao criar um projeto utilizando o ReactJS podemos utilizar os seguintes boilerplates:

- Create React App (CRA)
- Vite

Quais as vantagens de utilizar Vite ao invés do CRA?

O Vite tem todos os recursos do CRA, mas com melhores implementações e recursos adicionais que o CRA não suporta, com isso o Vite acaba sendo até 10x mais rápido em comparação ao CRA.

Criando o primeiro projeto com o Vite

npm create vite@latest reactapp --template react

Após rodar o comando acima, será exibido a tela para escolher o framework que deseja utilizar. ( react )

Em seguida, será questionado sobre a variant, escolheremos react que representa que não usaremos o TypeScript nesse projeto. ( react )

Done. Now run:

cd reactapp(nome do projeto)
npm install
npm run dev

## Executando Projeto

Existem duas maneiras de navegar até a pasta do seu projeto, pelo próprio terminal, utilizando o comando cd ou arrastando a pasta do projeto para dentro do VS Code.

Em seguida, será necessário baixar as dependências necessárias para a execução do projeto. Podemos utilizar o npm quanto o yarn como gerenciador de pacotes.

Certifique-se que está na pasta do projeto e execute o comando desejado:

yarn install
npm install ( instala dependências(node_modules))

Após a instalação das dependências, execute o comando abaixo:

Utilize o mesmo gerenciador do comando anterior

npm run dev
yarn dev
Após executar o comando acima, abra o seu navegador e acesse o endereço:

http://localhost:3000/

E prontinho, seu projeto já estará em execução! 🚀

Quando criamos um projeto ReactJS utilizando o Vite, essa será a visualização da nossa estrutura inicial de pastas do nosso projeto.

O arquivo index.html é o principal arquivo do nosso projeto, ele importará o arquivo main.jsx e fará com que o conteúdo seja exibido em nosso navegador.

index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
main.jsx

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
<React.StrictMode>
<App />
</React.StrictMode>,
document.getElementById('root')
)
O arquivo main.jsx terá a função de renderizar o componente <App /> e inserir através da DOM do nosso HTML pelo id root.

## JSX

É uma extensão do JavaScript bem semelhante ao HTML. Basicamente ele é uma sintaxe que o ReactJS utiliza para que possamos criar as nossas interfaces de forma declarativa.

O JSX utiliza funções dentro dos arquivos e o retorno dessas funções retornam tags HTML.

Exemplo de um trecho de código JSX:

App.jsx

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
const [count, setCount] = useState(0)

return (

<div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>Hello Vite + React!</p>
<p>
<button type="button" onClick={() => setCount((count) => count + 1)}>
count is: {count}
</button>
</p>
<p>
Edit <code>App.jsx</code> and save to test HMR updates.
</p>
<p>
<a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
Learn React
</a>
{' | '}
<a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
Vite Docs
</a>
</p>
</header>
</div>
)
}

export default App

### Estrutura pastas e arquivos

📁 node_modules - A pasta onde ficam todas dependências e módulos do nosso projeto.

📁 src - Pasta principal onde ficará todos os nossos arquivos.

App.css - Arquivo de estilização do App.jsx App.jsx - Página inicial do nosso projeto que será exibida no navegador.

favicon.svg - Ícone de favorito da página. index.css - Arquivo de estilização global logo.svg - Arquivo de imagem da logo do ReactJS. main.jsx - Arquivo responsável por inicializar nossa aplicação.

index.html - Arquivo HTML onde será injetado todo o JavaScript que for compilado para ser exibido no navegador.

.gitignore - Esse arquivo descreve quais arquivos e pasta não devem subir para o Github. package.json - Arquivo responsável pelas dependências do nosso projeto. Contém informações do pacote, como: scripts, dependências, número de versão e etc...

package-lock.json - Parecido com o package.json, esse arquivo descreve as características das dependências do projeto como versão, integridade dos links e muito mais.

vite.config.js - Arquivo de configuração do Vite.

### Fragment

Um padrão comum no React é que um componente pode retornar múltiplos elementos. Os Fragmentos (Fragment) permitem agrupar uma lista de filhos sem adicionar nós extras ao DOM.

Exemplo:

function Home() {
return (
<>

<h1>Lista de Presença.</h1>
<input type="text" placeholder="Digite o nome..." />
<button type="button">Adicionar</button>
</>
);
}

export default Home;

{/_ fragment ( embrulhar<></> _/}

No exemplo acima, poderia ser utilizado uma <div> para agrupar esses três elementos.

### Importando arquivos no CSS

A importação de um arquivo global deverá ser realizada no arquivo main.jsx

global.css

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  main.jsx

import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";

// Arquivo de estilização global
import "./styles/global.css";

ReactDOM.render(
<React.StrictMode>
<Home />
</React.StrictMode>,
document.getElementById("root")
);

### Separando CSS

Nesta aula criamos uma pasta chamada Home, contendo os arquivos index.jsx e styles.css

Dessa forma, a estrutura fica bem mais organizada e separamos as responsabilidades de cada arquivo.

Estilizando página
Nesta aula, estilizamos toda a nossa página utilizando os conceitos do CSS.

### Importando fonte

Para utilizar fontes personalizadas em nosso projeto, podemos prover do serviço que a Google nos oferece, o Google Fonts.

Após a escolha das fontes, devemos aplicá-las em nosso projeto em dois arquivos:

index.html e global.css

### Componentes

Componente nada mais do que um bloco de código reutilizável e independente. Nessa aula, criamos o nosso primeiro componente Card

Estrutura de um componente:

📁 Components

📁 Card

### Propriedades

As propriedades dentro de um componente faz com que você possa passar valores diferentes para cada um deles.

### Estado

O Hook useState permite ter variáveis em componentes funcionais. Você passa o estado inicial para esta função e ele retorna uma variável com o valor atual do estado (não necessariamente o estado inicial).

### Imutabilidade

O conteúdo da variável não deve ser modificado e sim substituído.

### KeyProp

Em uma listagem, normalmente utilizamos o map() do JavaScript para trazer todos os dados dessa lista. No React, precisamos passar uma propriedade key para que esse dado nunca se repita e evitar que erros desse tipo aconteçam.

### Hooks

São funções que permitem conectar os recursos de estados e ciclos de vida do React a partir de componentes funcionais. Normalmente os Hooks iniciam com a palavra use por convenção. Exemplos de hooks: useState, useEffect.

### Header

Nessa aula, criamos uma tag <header> em nossa Home para indicar quem é o usuário que está editando a lista de presença.

### useEffect

O useEffect é executado automaticamente sempre que o componente é renderizado.

A estrutura do useEffect é da seguinte forma:

useEffect(() => {
// Dentro do objeto devemos colocar todas. ações que serão executadas.

// Os arrays definem quais os estados que o useEffect depende.
}, []);

### Consumindo API

Nessa aula utilizamos a API oficial do Github dentro do useEffect com o método fecth()

API: https://api.github.com/users/[seu usuário] (substituir pelo seu usuário sem os [] )

### useEffect Async

Nessa aula verificamos como lidar com requisições assíncronas utilizando o Hook useEffect

useEffect(() => {
async function fetchData() {
const response = await fetch("https://api.github.com/users/birobirobiro");
const data = await response.json();
console.log("DADOS =>", data);

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData();

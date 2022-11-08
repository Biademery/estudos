# Formulários de outro planeta

# Formulários

## Para que serve?

- Capturar dados de entrada (input)
- Interação
- Controle

## Pré requisitos

- Básico HTML

## Para dominar os formulários

- Estilização
- Validação
- Controles customizados
- Javascript

## <form>

- Elemento que definierá um formulário
- É um container estilo <section> <footer>

Atributos básicos

- action (guia para onde vai os dados cadastrados)
- method (POST método para criar alguma coisa e dá uma escondida a mais dos dados e GET)

```html
<form action="" method="get">
    
</form>
```

# Fieldset legend

## <fieldset>

- agrupamento de campos
- mesmo propósito
- semântico
- acessibilidade

### Atributos especiais

- disabled
    - desabilita todos os elementos internos
    - não serão enviados ao submeter  o formulário
    
    ```html
    <form action="">
        <fieldset disabled>
            <legend>Contato</legend>
            <label for="">Nome</label>
            <input type="text">
        </fieldset>
    </form>
    ```
    
- form
    - o id de um formulário ao qual esse fieldset pertence
    - não precisa estar dentro do formulário
    
    ```html
    <form id="contato" action="">
        
    </form>
    
    <fieldset form="contato">
        <legend>Contato</legend>
        <label for="">Nome</label>
        <input type="text">
    </fieldset>
    ```
    
- name
    - nome do grupo
    
    ```html
    <form id="contato" action="">
        
    </form>
    
    <fieldset form="contato" name="input-contato">
        <legend>Contato</legend>
        <label for="">Nome</label>
        <input type="text">
    </fieldset>
    ```
    

## <legend>

- nome do agrupamento
- primeiro elemento dentro do fieldset

```html
<form action="">
    <fieldset>
        <legend>Contato</legend>
    </fieldset>
</form>
```

# Label

- associar e identificar uma (ou mais) tag de entrada de dados
- acessibilidade
- você poderá clicar para mudar o foco da entrada de dados

```html
<label>
    Nome:
    <input type="text">
</label>
```

## Atributos

- for
    - para fazer a conexão entre este label e a tag de entrada de dados
    - é feita via id do  input
    - só funciona com elementos específicos
        - button, input (not hidden), mete, output, progress, selct, textarea

```html
<label for="nome">
    Nome:
</label>
 <input id="nome" type="text">
```

# Button

## <button>

- Representa um botão
- Usado para enviar formulários
- É estilizado pelo user agent

### Atributos comuns

- type
    - submit
    - reset
    - button
- autofocus
- disabled
- name
- value
- form: linkar a um formulário

```html
<button type="submit" name="button" value="Valor qualquer">Enviar</button>
```

# Datalist

## <datalist>

- lista de valores como sugetstão a uma tag <input>
- valores sugestivos e não obrigatórios
- usuário poderão selecionar um dos valores, ou colocar um valor diferente da sugestão

```html
<input 
    type="text"
    list="fruitsdata"
    placeholder="Escolha uma fruta"/>

<datalist id="fruitsdata">
    <option>apple</option>
    <option>banana</option>
    <option>mango</option>
    <option>orange</option>
    <option>cherry</option>
</datalist>
```

## list

- recebe como valor o id de um <datalist> residente no mesmo documento
- Tipos de input suportados
    - text, search, url, tel, email, date, month, week, time, datetime-local, number, range e color

→ Valores de datalist qque não são compatíveis com o tipo do <input> não serão apresentados

- Tipos de input não suportados (conforme especificação)
    - hidden, password, checkbox, radio, file, ou qualquer tipo de button

# Input

## <input>

- Um dos mais usados em formulários
- Aceita os mais diversos tipos de dados
- Um dos mais poderosos e complexos
- Elevado número de combinações

### Atributos

- type
- name
- id

### Atributos comuns

- autocomplete
- autofocus
- disabled
- readonly (quase todos)
- value
- form (quase todos)
- name
- required (quase todos)
- placeholder (quase todos)

```html
<input type="text"
autocomplete="email"
autofocus
disabled
value="qualquer"
readonly
form="linkar com um formulário de fora"
name="nome"
required
placeholder="Digite seu email">
```

## Passaword

<input type=”password”>

- Colocar uma senha
- Esconde o que está sendo digitado no campo
- O estilo da apresentação do campo, depende do User Agent

### Atributos

- minlength / maxlength
    - O número mínimo e/ou máximo de caracteres para este campo
- size
    - O número aceitável de caracteres que este campo deverá conter
- pattern
    - Expressão regular para validar o que está sendo digitado no campo
    - Altamente recomendado o uso de um padrão de segurança alta de senhas
    - exemplos: queremos que a senha contenha caracteres hexadecimais com o limite de no mínimo 4 e no máximo 8 caracteres
        - pattern=”[0-9a-fa-F]{4,8}”
- placeholder
    - Mostra um exemplo de texto a ser digitado no campo
- readonly / disabled
    - Atributo boleano indicando se o campo está habilitado ou não
- required
    - O campo será obrigatório
- inputmode
    - Poderá alterar o uso de teclado em smartphones
    - Exemplos: queremos que o cliente só adicione números
        - inputmode=”numeric”
- autocomplete
    - on: permite a sugestão de : new-password ou current-password
    - off: desabilita a opção de autocompletar
    - new-passwor: o navegador poderá sugerir uma nova senha

```html
<form action="">
    <input type="password"
        minlength="4"
        maxlength="8"
        size="8"
    >
    <button>Enviar</button>
    <input type="password"
        pattern="[0-9a-fa-F]{4,8}"
        title="Coloque HEX no mínimo 4
        caracteres e no máximo 8 
        caracteres"
        placeholder="Coloque sua senha" >
    <button>Enviar</button>

</form>
```

## Email

<input type=”email”/>

- Espera que o usuário digite um email
- Irá validar se o valor digitado é um email

### Atributos

- placeholder
- readonly / disabled
- value
- required
- mutiple
    - o campo irá receber 1 ou mais emails, separado por vírgulas
- minlegth / maxlength
    - o mínimo e/ou máximo valor que o campo irá conter
- size
    - valor numérico indicando quantos caracteres esse campo deveria conter, modificando o tamanho do campo para o usuário
- pattern
    - uso de expressão regular para validar o campo
    - exemplo: o usuário só poderá colocar email do domínio rocketseat.com.br
        - pattern=”.+@rocketseat\.com\.br”
- list
    - o id de uma tag <datalist> ue está no mesmo documento
    - <datalist> irá conter uma lista de valores pré definidos a fim de sugerir ao usuário, quais valores estão disponíveis
        - os valores do <datalist> que não forem compatíveis com o campo, não serão apresentados como sugestão

## URL

<input type=”url”/>

- Espera ue o usuário digite uma  url
- Irá validar se o valor digitado é uma url

### Atributos

- placeholder
- readonly/disabled
- value
- required
- minlegth/maxlength
- size
- pattern
- list
- spellcheck
    - habilitar a verificação ortográfica para este input

## File

<input type=”file”/>

- Usuário poderá escolher 1 ou mais arquivos para enviar no formulário

### Atributos

- value
    - contém o arquivo a ser enviaado
- accept
    - descreve que tipos de arquivos serão aceitos
    - exemplos: .do, .docx, .pdf, audio/*, image/png, .png
- files
    - a lista de arquivo ou arquivos
- mutiple
    - permite o envio de múltiplos arquivos

### Envio dos aruivos

- Para envio dos arquivos o formulário deverá utilizar o método POST e o atributo enctype como “multipart/form-data”

```html
<form action="" method="post" enctype="multipart/form-data">
<input type="file"
accept=".doc"
multiple
>
</form>
```

## Color

<input type=”color”>

- Interface para selecionar cor
- Color picker

### Atributos

- value: RGB
    - se inválido, o preto será exibido
- list
    - o id de uma tag <datalist> ue está no mesmo documento
    - <datalist> irá conter uma lista de valores pré definidos a fim de sugerir ao usuário, quais valores estão disponíveis
        - os valores do <datalist> que não forem compatíveis com o campo, não serão apresentados como sugestão

## Checkbox

<input type=”checkbox”>

- Caixas que podem ser marcadas
- Selecionar um valor para ser enviado
- Se não selecionado, não será enviado nenhum dado

### Atributos

- globais
- value
    - valor que aquele campo contém
    - se não estiver presente, o padrão é ‘on’
- checked
    - para deixar o campo marcado por padrão

```html
<fieldset>
    <legend>Choose your interests</legend>
    <div>
        <input type="checkbox" name="interest" id="coding" value="coding" checked>
        <label for="coding">Coding</label>
    </div>
    <div>
        <input type="checkbox" name="interest" id="music" value="music">
        <label for="music">Music</label>
    </div>
</fieldset>
```

- Hidden
    
    <input type=”hidden” id=”timestamp” name=”timestamp” value=”1286705410”
    
    - invisível ao usuário
    - será enviado com o formulário
    - não receberá foco
    - leitores de tela não percebem esse campo
- Radio
    
    <input type=”radio”>
    
    - Projetado para selecionar uma única opçãp de um grupo de opções
    
    → Atributos especiais
    
    - checked
        - indica que o campo foi marcado
    - value
        - valor que aquele campo contém
    
    ```html
    <fieldset>
        <legend>Bora tomar um café?</legend>
    
        <label for="yep">Sim</label>
        <input type="radio" name="coffee" id="yep" value="yes">
    
        <label for="nono">Não</label>
        <input type="radio" name="coffee" id="nono" value="no">
    </fieldset>
    ```
    
- Textarea
    
    <textarea>
    
    - mais de uma linha
    - útil para textos grandes
    
    → Atributos
    
    - id
    - name
    - rows e cols
    - maxlegth e minlegth
    - wrap
    
    … Outros comuns aos <inputs>
    
    - autocomplte, autofocus, disabled, placeholder, readonly, form, required
    
    ```html
    <label for="message"></label>
    <textarea name="messages" id="message" cols="30" rows="10" minlength="2" maxlength="50" wrap="off" placeholder="Digite sua mensagem linda aqui" >This text will not be wrapped</textarea>
    ```
    
- Select
    
    <select>
    
    - Controle que vai exibir um menu de opções
    
    <option>
    
    - Comtém as opções a serem selecionadas
    - Atributos necessários
        - value
    
    → Atributos únicos
    
    - mutiple
        - habilita múltiplas opções
    - size
        - quando opções visíveis?
    
    ```html
    <label for="carselect">Qual modelo do carro</label>
    <select name="carmodel" id="carselect" multiple size="2">
        <option value="">Selecione o modelo</option>
        <option value="fiat">Uno</option>
        <option value="ford">Ka</option>
        <option value="audi">A3</option>
    </select>
    ```
    
- Optgroup
    - Dentro do select
    
    ```html
    <label>Please choose one or more pets:
        <select name="pets" multiple size="4">
            <optgroup label="4-legged pets">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster" disabled>Hamster</option>
            </optgroup>
            <optgroup label="Flying pets">
                <option value="parrot">Parrot</option>
                <option value="macw">Macaw</option>
                <option value="albatross">Albatross</option>
            </optgroup>
        </select>
    </label>
    ```
    
- Search
    
    <input type=”search”/>
    
    - Para campos de busca
    - É igual ao campo do tipo ‘text’ mas poderá ser um pouco diferente dependendo do user agent
    
    → Atributos
    
    - list/<datalits>
    - pattern
    - aria-label
    
    ```html
    <datalist id="searchterms">
        <option>Mac</option>
        <option>Win</option>
        <option>Linux</option>
    </datalist>
    <form action="">
        <input type="search" 
        name="q" 
        list="searchterms" 
        placeholder="Digite seu termo de busca" 
        size="29" 
        aria-label="Campo de pesquisa: Digite seu termo de busca">
        <button>Pesquisar</button>
    </form>
    <form action="">
        <label for="">Pesquisar pelo ID</label>
        <input type="search" 
        name="id" size="5"
        pattern="[0-9]{2}"
        title="Digite o número do ID: 99">
        <button>Pesquisar</button>
    </form>
    ```
    
- Number
    
    <input type=”number”/>
    
    - Entrada de números
    
    → Atributos
    
    - min/max
    - step
    
    ```html
    <datalist id="numeroslist">
        <option value="">100</option>
    </datalist>
    
    <form action="">
        <input type="number" min="2" max="1000" step="2" placeholder="Digite somente números" value="100" list="numeroslist">
        <button>Enviar</button>
    </form>
    ```
    
- Range
    
    <input type=”range”/>
    
    - Controle para selecionar um valor numérico
    - Slider ou dial control
    
    → Atributos
    
    - min/max
    - step
    
    ```html
    <input type="range" min="-10" max="10" step="0.1">
    ```
    
- Outros campos
    
    ```html
    <input type="date" value="yyyy-mm-dd">
    <input type="datetime-local">
    <input type="month">
    <input type="time">
    <input type="week">
    ```
    

# Criando um formulário

## Desenhando

- Pensar nos requisitos
- Ajuda a definir as necessidades

## Dicas:

- Simples e focado
- Somente dados necessários
- Verifique o que te agrada

```html
<form action="">
    <fieldset>
        <legend>Contato</legend>
        <label for="nome">Nome</label>
        <br>
        <input type="text" id="nome" name="name">
        <br>
        <br>

        <label for="email">Email</label>
        <br>
        <input type="email" id="email" name="email">
        <br>
        <br>

        <label for="mensagem">Mensagem</label>
        <br>
        <textarea name="mensagens" id="mensagem" cols="20" rows="5"></textarea>
        <br>
        <br>

        <button>Enviar</button>
    </fieldset>

</form>
```

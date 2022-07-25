# Guia Estelar de Programação

# Programar

## O que é?

### Algoritmo

- Passo a passo, sequência lógica para resolver um problema

### Lógica de programação

- Aplicação dos passos, construção de Algoritmos

## Dar instruções

### Dados

- String → Sequência de caracteres
- Boleano → Verdadeiro ou falso
- Numérico

### Manipulação dos dados

- Transformação (modo de preparo em uma receita)

→ Como o computador não entende, tem que ser extremamente detalhista na hora de executar um código para que computador entenda e execute corretamente.

## Resolver problemas

- Entender o problema é a chave

# Como funciona a web

## Caminho simples

- Você digita o site: rocketseat.com.br e depois ver o site

## Caminho avançado

1. Você digita a URL: https://rocketseat.com.br
    - esse S diz que esse protocolo é seguro
    - HTTP
        
        → Hypertext Transfer Protocol
        
        → Função: Trocar mensagens entre computadores
        
        → A mensagem é quebrada em diversos pedaços (chunks)
        
    - URL
        
        → Uniform Resource Locator
        
        → Localizador e identificador de um recurso
        
        → O recurso, nesse caso, é o site
        
2. É iniciada uma linha de comunicação, através do protocolo TCP, entre o seu computador (cliente) até o computador que tem a página (servidor)
    - Cliente
        
        → O computador, dispositivo ou aplicativo que fez o pedido
        
        Browser
        
    - Servidor
        
        → Computador configurado para receber os pedidos e enviar resposta aos pedidos
        
    - TCP
        
        → Transmission Control Protocol
        
        Função: Garantir que os pacotes cheguem corretamente ao destino
        
3. O endereço é convertido em um IP (76,76,21,21) através do DNS
    - IP
        
        → Internet Protocol
        
        → Função: Endereçamento dos computadores
        
    - DNS
        
        → Domain Name Servers
        
        → Função: Converter um Domínio (rocketseat.com.br) em um endereço IP
        
4. Seu pedido está percorrendo diversos proxies
    - Proxy
        
        → Qualquer dispositivo no meio do caminho
        
        → Modem, roteador, outros computadores
        
        → Função: Encaminhamento dos pacotes
        
5. Seu pedido chega até o servidor
6. Servidor analisa seu pedido e te dá uma resposta, neste caso, positiva
7. O caminho de volta é semelhante ao de ida, passando pela linha de comunicação que foi criada
8. O browser recebe os pedaços e monta a tela do site para você
9. Esse processo acontece muitas vezes, pois para cada recurso (html,css, javascript, imagem ...) é feita uma nova conexão
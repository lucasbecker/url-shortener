# URL Shortener
> Um simples encurtador de URL desenvolvido com NodeJS e MongoDB.

## Overview
Este projeto é um simples encurtador de URL, sendo esse uma API REST e que foi desenvolvido utilizando **NodeJS** com **Typescript** e banco de dados **MongoDB**, principalmente. Outras bibliotecas/framework foram utilizadas, como *Express* para auxiliar no desenvolvimento da API, *ShortID* para criação das hashs utilizadas para o encurtamento das URLs e *Mongoose* com *Typegoose* para trabalhar com o MongoDB, todas as dependências utilizadas podem ser vistas no arquivo [package.json](./package.json).

## Setup
Primeiramente faça o download ou clonagem deste repositório e com o [NodeJS](https://nodejs.org/) instalado execute o comando `npm install` no diretório correspondente para realizar o download das dependências necessárias. Após finalizar com sucesso o comando install, em dois terminais distintos, execute os comandos `npm run build:watch` e `npm run dev` para compilar os arquivos TypeScript em JavaScript e para executar os arquivos JavaScript sempre que o código for alterado, respectivamente.

Para utilizar a API basta realizar uma requisição HTTP POST em `http://localhost:5000/shorten` informando a URL original e a resposta será uma nova URL utilizando um hash, algo como `http://localhost:5000/lg-82DzBk`, que ao ser utilizada realiza uma consulta no banco de dados e redireciona para URL original.

## Next Steps
 - [ ] Refatorar o código.
 - [ ] Simplificar a execução da API.
 - [ ] Desenvolver uma aplicação front-end para consumir essa API.

## Deploy
O desenvolvimento e deploy do projeto está sendo feito com o **MongoDB Atlas**.

## License
[MIT License](./LICENSE) © [Lucas Becker](http://lucasbecker.github.io/) 
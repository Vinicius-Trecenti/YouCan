# Create server.js
- Terminal: npm init -y 
    - Cria o arquivo package.json
- abrir package.json
    - adicionar: "start": "node --watch --no-warnings server.js"
- Terminal: npm install express
- Terminal: npm install dotenv -D
- Abrir server.js
    - Adicionar: 
        
     require('dotenv').config() 

    const express = require('express')

    const server = express()

    server.listen(process.env.PORT, () => {
        console.log(`Conectado em localhost:${process.env.PORT}`)
    })   
- Terminal: npm install mysql2
- Criar arquivo db.js


Rotas

[x] Login
    - Validar se usuário existe
    - Validar senha 
    - Criar token (Função createToken() - Criptografa ID)
    - Retornar dados do usuário 
[x] Cadastro
    - Receber dados
    - Criar hash da senha
    - Criar usuário no banco
    - Retornar resposta
[x] Home
    - Retornar todos as materias do banco
[x] Validar (Verifica token)
    - Recebe token
    - Decodifica o token (Retorna o ID)
    - Verifica id no banco
    - Retorna os dados do usuário
[] Alterar usuário
    - Recebe ID, username e senha
    - Alterar no banco
    - Retorna resposta de sucesso/erro
[] Quizzes
    - Recebe ID da matéria,
    - Verifica no banco todos os quizzes da matéria
    - Retorna esses quizzes 
[] Perguntas
    - Recebe ID do quiz escolhido
    - Verifica no banco as perguntas desse quiz
    - Retorna as perguntas e alternativas
[] Criar quiz
    - Recebe todos os dados do quiz, perguntas e alternativas
    - Cria o quiz no banco
    - Cria as perguntas no banco
    - Cria as alternativas no banco
    - Retorna resposta de sucesso/erro
[] Ranking 
[] Histórico 
    - Recebe ID do usuário
    - Retorna informações principais dos quizzes feitos
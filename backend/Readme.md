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
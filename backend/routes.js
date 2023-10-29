const express = require('express')
const database = require('./database-mysql')
const random = require('node:crypto')
const jwt = require('jsonwebtoken')
const bcript = require('bcrypt')

const router = express.Router()

router.get('/quizzes', async (req, res) => {
    const quizzes = await database.searchAll()

    res.status(200).json(quizzes)
})

// validar token e enviar dados do usuario
router.post('/validar', async(req, res) => {
    const { token } = req.body

    const secret = process.env.SECRET
    const { id } = jwt.verify(token, secret)
    const response = await database.userData(id)
    console.log(response)
    const { username, email, dateBirth } = response[0]

    res.status(200).json({ id, username, email, dateBirth })
})

// Tela de login 
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const result = await database.loginAuth(email, password)

    if (result[0].count === 0) {
        res.status(401).json({ message: "Credenciais inválidas!"})
    } else {
        const { id, username, emailUser, dateBirth } = result[0]
        
        try {
            const secret = process.env.SECRET
    
            const token = jwt.sign(
                {
                    id,
                },
                secret
            )
    
            console.log('usuário logado')
            res.status(200).json({ user: {id, username, emailUser, dateBirth}, token })
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }
})

// Tela de cadastro
router.post('/cadastro', async (req, res) => {
    const { username, email, dateBirth, password } = req.body                                     

    await database.createUser(username, email, dateBirth, password)

    res.status(201).json({ message: "Usuário criado" })
})

// Ranking
router.get('/ranking', async (req, res) => {
    const ranking = await database.ranking() 

    res.status(200).json({ ranking })
})

// Alterar usuário
router.put('/alterar', async (req, res) => {
    const { id, username, email, dateBirth, password } = req.body

    await database.alterUser(id, username, email, dateBirth, password)

    res.status(200).json({ message: "Usuário alterado!" })
})

// Historico
router.get('/historico', async (req, res) => {
    const id = req.body

    const historico = await database.historic(id)

    res.status(200).json({ historico })
})

// Criar quiz
router.post('/criarquiz', async (req, res) => {
    const { quiz } = req.body

    // console.log(quiz.pergunta[0].enunciado)

    const idQuiz = random.randomUUID()
    
    await database.createQuiz(idQuiz, quiz.materia, quiz.nivel)

    for (var cont = 0; cont < quiz.pergunta.length; cont++) {
        
        const { enunciado, alternativas, dica, comentario } = quiz.pergunta[cont]
        const idQuestion = random.randomUUID()

        await database.createQuestion(idQuestion, idQuiz, enunciado, dica, comentario)

        for (var ind = 0; ind < alternativas.length; ind++) {
            const { descricao, pontuacao } = alternativas[ind]

            await database.createAlternative(idQuestion, descricao, pontuacao)
        }
    }
    
    res.status(200).json({ message: "Quiz criado!" })
})

module.exports = router
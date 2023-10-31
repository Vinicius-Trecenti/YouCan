const express = require('express')
const database = require('./database-mysql')
const random = require('node:crypto')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const router = express.Router()
const secret = process.env.SECRET

//Home
router.get('/materias', async (req, res) => {
    try {
        const materias = await database.searchAllSubjects()
        res.status(200).json(materias)
    } catch (error) {
        console.error(error)
        res.status(500).send('Erro na requisição das matérias!')
    }
})

// validar token e enviar dados do usuario
router.post('/validar', async (req, res) => {
    const { token } = req.body

    try {
        const { id } = jwt.verify(token, secret)
        const userData = await database.userData(id)

        if (!userData) {
            res.status(498).send('Token Inválido!')
            return
        }

        res.status(200).json({
            user: {
                id,
                username: userData.nome,
                email: userData.email,
                dateBirth: userData.nascimento
            },
            token
        })
    } catch (error) {
        console.error(error)
        res.status(500).send('Erro na validação do token!')
    }
})

// Criar token
const createToken = (id) => {
    try {
        const token = jwt.sign(id, secret)

        return token
    } catch (error) {
        console.error(error)
        res.status(500).send('Erro na criação do token!')
    }
}

// Tela de login 
router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const [userData] = await database.loginAuth(email)

        if (!userData) {
            res.status(401).send('Usuário não encontrado!')
            return
        }

        const verifyPassword = await bcrypt.compare(password, userData.senha)

        if (verifyPassword) {
            const token = createToken(userData.id)

            res.status(200).json({
                user: {
                    id: userData.id,
                    username: userData.nome,
                    email: userData.email,
                    dateBirth: userData.nascimento
                },
                token
            })

        } else {
            res.status(401).send('Senha incorreta!')
        }

    } catch (error) {
        console.error(error)
        res.status(500).send('Erro no login!')
    }
})

// Tela de cadastro
router.post('/cadastro', async (req, res) => {
    const { username, email, dateBirth, password } = req.body

    try {
        const passwordHash = await bcrypt.hash(password, 10)

        await database.createUser(username, email, dateBirth, passwordHash)

        res.status(201).send("Usuário criado!")
    } catch (error) {
        console.error(error)
        res.status(500).send('Erro no cadastro!')
    }
})
// -------------------------------------- VALIDAR
// Ranking 
// router.get('/ranking', async (req, res) => {
//     const ranking = await database.ranking()

//     res.status(200).json({ ranking })
// })

// Alterar usuário
router.put('/alterar', async (req, res) => {
    const { id, username, password } = req.body

    try {

        const passwordHash = await bcrypt.hash(password, 10)

        await database.alterUser(id, username, passwordHash)

        res.status(200).send("Usuário alterado!") 
    } catch (error) {
        console.error(error)
        res.status(500).send("Erro na alteração do usuário!")
    }
})
// ------------------------------------- VALIDAR
// Historico
// router.get('/historico', async (req, res) => {
//     const id = req.body

//     const historico = await database.historic(id)

//     res.status(200).json({ historico })
// })

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
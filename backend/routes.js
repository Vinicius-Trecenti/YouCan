const express = require('express')
const database = require('./database-mysql')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const crypto = require('crypto');

const router = express.Router()
const secret = process.env.SECRET

const generateID = () => {
    const randomBytes = crypto.randomBytes(4); // 4 bytes = 32 bits
    const randomNumber = parseInt(randomBytes.toString('hex'), 16);
    return randomNumber;
}

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

// mostrar quizzes de uma determinada matéria
router.get('/quizzes', async (req, res) => {
    try {
        const { subjectID } = req.body
        const quizzes = await database.searchAllQuizzesOfSubject(subjectID)

        res.status(200).json(quizzes)
    } catch (error) {
        console.error(error)
        res.status(500).send('Erro na requisição dos quizzes!')
    }
})

router.post('/ranking', async (req, res) => {
    try {
        const { userID } = req.body
        const principalRanking = await database.ranking()
        const userRanking = principalRanking.find(ranking => ranking.usuario_id === userID)

        res.status(200).json({ principalRanking, userRanking })
    } catch (error) {
        console.error(error)
        res.status(500).send('Erro na requisição das matérias!')
    }
})

router.post('/finalizar/quiz', async (req, res) => {
    try {
        const { userID, quizID, points, hits, dayAccomplished } = req.body

        await database.realizedQuiz(userID, quizID, points, hits, dayAccomplished)

        res.status(200).json({ message: "Quiz finalizado!" })
    } catch (error) {
        console.error(error)
        res.status(500).send('Erro na requisição de finalização do quiz!')
    }
})

// validar token e enviar dados do usuario
router.post('/validar', async (req, res) => {
    const { token } = req.body
    console.log(token)

    try {
        const id = jwt.verify(token, secret)
        const [userData] = await database.userData(id)
        const { username, email, dateBirth } = userData

        if (!userData) {
            res.status(401).send('Token Inválido!')
            return
        }

        res.status(200).json({
            user: {
                id,
                username,
                email,
                dateBirth
            },
            token
        })
    } catch (error) {
        console.error(error)
        res.status(500).send('Erro na validação do token!')
    }
})

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
router.get('/historico', async (req, res) => {
    const id = req.body

    const historico = await database.historic(id)

    res.status(200).json({ historico })
})

// Criar quiz
router.post('/criarquiz', async (req, res) => {
    const quiz = req.body
    const totalQuestions = quiz.perguntas.length

    try {
        const idQuiz = generateID()

        await database.createQuiz(idQuiz, quiz.materia_id, quiz.nome, quiz.nivel)

        for (var cont = 0; cont < totalQuestions; cont++) {
            const { enunciado, dica, comentario, alternativas } = quiz.perguntas[cont]
            const idQuestion = generateID()

            await database.createQuestion(idQuestion, idQuiz, enunciado, dica, comentario)

            for (var ind = 0; ind < alternativas.length; ind++) {
                const { descricao, pontuacao } = alternativas[ind]

                await database.createAlternative(idQuestion, descricao, pontuacao)
            }
        }

        res.status(200).json({ message: "Quiz criado!" })
    } catch (error) {
        console.error(error)
        res.status(500).send("Erro na criação do quiz!")
    }
})

//Consulta de enunciado da tela Questões
router.get('/questao/:id', async (req, res) => {
    try {
        const { id } = req.params
        const pergunta = await database.questions(id)
        console.log(pergunta)
        res.status(200).json(pergunta)


    } catch (error) {
        console.error(error)
        res.status(500).send("Erro na obtenção de questões!")
    }

})

router.get('/alternativas', async (req, res) => {
    const idQuest = req.body;
    try {
        const results = await database.answers(idQuest);
        res.json(results);
        console.log('na rota ta certo')
    } catch (error) {
        console.error('Erro ao buscar alternativas:', error);
        res.status(500).json({ error: 'Erro ao buscar alternativas' });
    }
})
;
module.exports = router
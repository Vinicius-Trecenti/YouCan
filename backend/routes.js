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
router.get('/materias/selecionadas', async (req, res) => {
    try {
        const materias = await database.searchAllSubjectsWithQuizzes()
        res.status(200).json(materias)
    } catch (error) {
        console.error(error)
        res.status(500).send('Erro na requisição das matérias!')
    }
})

// 
router.get('/materias/todas', async (req, res) => {
    try {
        const materias = await database.searchAllSubjects()
        res.status(200).json(materias)
    } catch (error) {
        console.error(error)
        res.status(500).send('Erro na requisição das matérias!')
    }
})

// mostrar quizzes de uma determinada matéria
router.post('/quizzes', async (req, res) => {
    try {
        const { subjectID } = req.body
        const quizzes = await database.searchAllQuizzesOfSubject(subjectID)

        console.log(quizzes)
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
    // console.log(token)

    try {
        const id = jwt.verify(token, secret)
        const [userData] = await database.userData(id)
        const { username, email, dateBirth } = userData

        if (!userData) {
            res.status(401).send('Token Inválido!')
            return
        }

        res.status(200).json({
                id,
                username,
                email,
                dateBirth
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

// Historico
router.get('/historico', async (req, res) => {

    // const [id] = req.body
    const id = 1
    const [historico] = await database.historic(id)

    res.status(200).json(historico)
})

router.get('/quantidade', async (req, res) => {
    const [quantidade] = await database.qtdQuiz()

    res.status(200).json(quantidade)
})

router.get('/questionCount', async (req, res) => {
    const [questionCount] = await database.questionQtd()

    res.status(200).json(questionCount)
})

// Criar quiz
router.post('/criarquiz', async (req, res) => {
    const {quiz} = req.body

    console.log(quiz)
    const totalQuestions = quiz.questions.length

    try {
        const idQuiz = generateID()

        await database.createQuiz(idQuiz, quiz.subject, quiz.name, quiz.level)

        for (var cont = 0; cont < totalQuestions; cont++) {
            const { statement, alternatives} = quiz.questions[cont]
            const idQuestion = generateID()

            await database.createQuestion(idQuestion, idQuiz, statement)

            for (var ind = 0; ind < alternatives.length; ind++) {
                const { description, points } = alternatives[ind]

                await database.createAlternative(idQuestion, description, points)
            }
        }

        res.status(200).json({ message: "Quiz criado!" })
    } catch (error) {
        console.error(error)
        res.status(500).send("Erro na criação do quiz!")
    }
})

//Consulta de enunciado da tela Questões
// router.get('/questao/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const pergunta = await database.questions(id)
//         console.log(pergunta)
//         res.status(200).json(pergunta)

//     } catch (error) {
//         console.error(error)
//         res.status(500).send("Erro na obtenção de questões!")
//     }
// })

// router.get('/alternativas', async (req, res) => {
//     try {
//         const {idQuestion} = req.body
//         console.log('idquestion no routes',idQuestion)
//         const alternativa = await database.answers(idQuestion)
//         console.log(alternativa)
//         res.status(200).json(alternativa)
       
//     } catch (error) {
//         console.error('Erro ao buscar alternativas:', error);
//         res.status(500).send('Erro ao buscar alternativas' )
//     }
// })
router.get('/questao/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const pergunta = await database.questions(id);
    // Extrai os IDs das perguntas para buscar as alternativas
      const perguntaIds = pergunta.map((question) => question.id);
  
      // Busca as alternativas com base nos IDs das perguntas
      const alternativas = await database.alternativas(perguntaIds);
  
      // Mapeia as alternativas para as perguntas correspondentes
      const perguntasComAlternativas = pergunta.map((question) => {
        return {
          ...question, Answers: alternativas.filter(
            (alternativa) => alternativa.pergunta_id === question.id
          ),
        };
      });
  
      res.status(200).json(perguntasComAlternativas);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro na obtenção de questões!');
    }
  });

module.exports = router
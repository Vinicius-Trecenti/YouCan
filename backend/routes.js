const express = require('express')
const database = require('./database-mysql')

const router = express.Router()

router.get('/quizzes', async (req, res) => {
    const quizzes = await database.searchAll()

    console.log(quizzes)

    res.status(200).json(quizzes)
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    const result = await database.loginAuth(email, password)

    if (result[0].count == 0) {
        return res.status(401).json({ message: "Credenciais inválidas!"})
    }

    res.json({ message: "Parametros recebidos", user: email})
})

module.exports = router
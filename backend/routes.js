const express = require('express')
const database = require('./database-mysql')

const router = express.Router()

router.get('/quizzes', async () => {
    const quizzes = await database.searchAll()

    console.log(quizzes)

    return quizzes
})

router.get('/login/:email/:password', async (req, res) => {
    const { email, password } = req.params

    const result = await database.loginAuth(email, password)

    console.log(result)

    res.send("Parametros recebidos")
})

module.exports = router
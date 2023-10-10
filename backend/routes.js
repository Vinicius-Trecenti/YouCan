const express = require('express')
const database = require('./database-mysql')

const router = express.Router()

router.get('/quizzes', async () => {
    const quizzes = await database.searchAll()

    console.log(quizzes)

    return quizzes
})

module.exports = router
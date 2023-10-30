const db = require('./db')

module.exports = {
    userData: (id) => {
        return new Promise((acept, rejected) => {
            db.query('SELECT nome, email, nascimento FROM usuario WHERE id = ?', [id], (error, results) => {
                { error ? rejected(error) : acept(results) }
            })
        })
    },

    searchAllSubjects: () => {
        const sql = `
            SELECT mat.id, mat.nome, COUNT(*) as total
            FROM materia mat
                INNER JOIN quiz ON mat.id = quiz.materia_id
            GROUP BY mat.nome`

        return new Promise((acept, rejected) => {
            db.query(sql, (error, results) => {
                { error ? rejected(error) : acept(results) }
            })
        })
    },

    loginAuth: (email) => {
        return new Promise((acept, rejected) => {
            db.query('SELECT * FROM usuario WHERE email = ?', [email], (error, results) => {
                { error ? rejected(error) : acept(results) }
            })
        })
    },

    createUser: (username, email, dateBirth, password) => {
        return new Promise((acept, rejected) => {
            db.query('INSERT INTO usuario (nome, email, nascimento, senha) VALUES (?, ?, ?, ?)', [username, email, dateBirth, password], (error, results) => {
                { error ? rejected(error) : acept(results) }
            })
        })
    },

    ranking: () => {
        return new Promise((acept, rejected) => {
            db.query(`SELECT usuario_id, nome, SUM(pontuacao) as soma
                        FROM  usuarioquiz
                            INNER JOIN usuario ON usuario.id = usuarioquiz.usuario_id
                        GROUP BY usuario_id
                        ORDER BY soma DESC
                        LIMIT 10`, (error, results) => {
                { error ? rejected(error) : acept(results) }
            })
        })
    },

    alterUser: (id, username, email, dateBirth, password) => {
        return new Promise((acept, rejected) => {
            db.query(`UPDATE usuario
                        SET nome = ?, email = ?, senha = ?, nascimento = ? 
                        WHERE id = ?     
                    `, [username, email, password, dateBirth, id], (error, results) => {
                { error ? rejected(error) : acept(results) }
            })
        })
    },

    historic: (id) => {
        return new Promise((acept, rejected) => {
            db.query(`SELECT * 
                        FROM usuarioquiz
                        INNER JOIN quiz ON usuarioquiz.quiz_id = quiz.id
                        WHERE usuarioquiz.usuario_id = ?
                    `, [id], (error, results) => {
                { error ? rejected(error) : acept(results) }
            })
        })
    },

    createQuiz: (id, materia, nivel) => {
        return new Promise((acept, rejected) => {
            db.query(`INSERT INTO quiz (id, materia, nivel) VALUES (?, ?, ?)`, [id, materia, nivel], (error, results) => {
                { error ? rejected(error) : acept(results) }
            })
        })
    },

    createQuestion: (idQuestion, idQuiz, enunciado, dica, comentario) => {
        return new Promise((acept, rejected) => {
            db.query(`INSERT INTO pergunta (id, quiz_id, enunciado, dica, comentario) 
                        VALUES (?, ?, ?, ?, ?)
                    `, [idQuestion, idQuiz, enunciado, dica, comentario], (error, results) => {
                { error ? rejected(error) : acept(results) }
            })
        })
    },

    createAlternative: (idQuestion, descricao, pontuacao) => {
        return new Promise((acept, rejected) => {
            db.query(`INSERT INTO alternativa (pergunta_id, alternativas, pontuacao) 
                        VALUES (?, ?, ?)
                    `, [idQuestion, descricao, pontuacao], (error, results) => {
                { error ? rejected(error) : acept(results) }
            })
        })
    },

}
const db = require('./db')

module.exports = {
    userData: (id) => {
        return new Promise((acept, rejected) => {
            db.query('SELECT nome as username, email, nascimento as dateBirth FROM usuario WHERE id = ?', [id], (error, results) => {
                { error ? rejected(error) : acept(results) }
            })
        })
    },

    searchAllSubjectsWithQuizzes: () => {
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

    searchAllSubjects: () => {
        const sql = `
            SELECT mat.id, mat.nome as name
            FROM materia mat`

        return new Promise((acept, rejected) => {
            db.query(sql, (error, results) => {
                { error ? rejected(error) : acept(results) }
            })
        })
    },

    searchAllQuizzesOfSubject: (subjectID) => {
        const sql = `
            SELECT quiz.id, quiz.nome, quiz.nivel
            FROM quiz 
                INNER JOIN materia ON materia.id = quiz.materia_id
            WHERE materia.id = ?`

        return new Promise((acept, rejected) => {
            db.query(sql, [subjectID], (error, results) => {
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
                    `, (error, results) => {
                { error ? rejected(error) : acept(results) }
            })
        })
    },

    realizedQuiz: (userID, quizID, points, hits, dayAccomplished) => {
        const sql = `INSERT INTO usuarioquiz (usuario_id, quiz_id, pontuacao, acertos, dia_realizado) VALUES (?, ?, ?, ?, ?)`

        return new Promise((acept, rejected) => {
            db.query(sql, [userID, quizID, points, hits, dayAccomplished], (error, results) => {
                { error ? rejected(error) : acept(results) }
            })
        })
    },

    alterUser: (id, username, password) => {
        return new Promise((acept, rejected) => {
            db.query(`UPDATE usuario
                        SET nome = ?, senha = ? 
                        WHERE id = ?     
                    `, [username, password, id], (error, results) => {
                { error ? rejected(error) : acept(results) }
            })
        })
    },








    historic: (id) => {
        return new Promise((acept, rejected) => {
            db.query(`SELECT COUNT(*) AS QtdQuiz, SUM(acertos) AS TotalAcertos  
                        FROM usuarioquiz
                        INNER JOIN quiz ON usuarioquiz.quiz_id = quiz.id
                        WHERE usuarioquiz.usuario_id = ?
                    `, [id], (error, results) => {
                { error ? rejected(error) : acept(results) }
            })
        })
    },

    qtdQuiz: () => {
        return new Promise((acept, reject) => {
            db.query(`SELECT COUNT(*) AS qtdQuizes FROM quiz`, (error, results) => {
                error ? reject(error) : acept(results)
            })
        })
    },

    questionQtd: () => {
        return new Promise((acept, reject) => {
            db.query(`SELECT COUNT(*) AS qtdQuestion FROM pergunta`, (error, results) => {
                error ? reject(error) : acept(results)
            })
        })
    },




















    createQuiz: (id, idMateria, nome, nivel) => {
        return new Promise((acept, rejected) => {
            db.query(`INSERT INTO quiz (id, materia_id, nome, nivel) VALUES (?, ?, ?, ?)`, [id, idMateria, nome, nivel], (error, results) => {
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

    //consulta no banco de dados para a requisição das perguntas
    questions: (idQuiz) => {
        return new Promise((accept, reject) => {
            db.query(
                `SELECT * FROM pergunta WHERE quiz_id = ?`,
                [idQuiz], (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        const questions = results.map((question) => {
                            return {
                                ...question,
                                Answers: [], 
                            };
                        });
                        accept(questions);
                    }
                }
            );
        });
    },

    //consulta no banco de dados para a requisição das alternativas
    alternativas: (perguntaIds) => {
        return new Promise((accept, reject) => {
            db.query(
                `SELECT * FROM alternativa WHERE pergunta_id IN (?)`,
                [perguntaIds],
                (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        accept(results);
                    }
                }
            );
        });
    },


};
const db = require('./db')

module.exports = {
    searchAll: () => {
        return new Promise ((acept, rejected) => {
            db.query('SELECT * FROM pergunta', (error, results) => {
                if (error) {
                    rejected(error)
                    return
                }

                acept(results)
            })
        }
    )},

    loginAuth: (email, password) => {
        return new Promise ((acept, rejected) => {
            db.query('SELECT count(*) FROM usuario WHERE email = ? AND senha = ?', [email, password], (error, results) => {
                if (error) {
                    rejected(error)
                    return 
                }

                acept(results)
            })
        }) 
    }
}
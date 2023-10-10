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
    )}
}
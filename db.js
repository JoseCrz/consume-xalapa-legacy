const db = require('mongoose')

const dbConfig = require('./config/dbConfig')

const mongoURI = `mongodb+srv://${dbConfig.dbUser}:${dbConfig.dbPassword}@${dbConfig.dbHost}/${dbConfig.dbName}?retryWrites=true&w=majority`

db.Promise = global.Promise

const connect = () => {
    db.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('[db] connected succesfully!'))
    .catch(error => console.log(`[db] ${error}`))
}

module.exports = {
    connect
}
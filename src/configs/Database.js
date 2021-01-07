import mongoose from 'mongoose'
require('dotenv').config()

const config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    pwd: process.env.DB_PWD,
    dbName: process.env.DB_NAME,
}

const MODE = process.env.NODE_ENV || 'development'
export const db = () => {
    mongoose.Promise = global.Promise
    const opt = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
    if (MODE === 'production') {
        mongoose.connect(`mongodb://${config.user}:${config.pwd}@${config.host}:${config.port}/${config.dbName}?authSource=admin&w=1`, opt, (err) => {
            if (err) {
                console.log('Not connected Trying 5 sec');
                setTimeout(() => db(), 5000);
            } else {
                console.log("database connected");
            }
        })
    } else {
        mongoose.connect(`mongodb://${config.host}/${config.dbName}`, opt, (err) => {
            if (err) {
                console.log('Not connected Trying 5 sec');
                setTimeout(() => db(), 5000);
            } else {
                console.log("database connected");
            }
        })
    }
}





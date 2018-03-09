import express from 'express'
const app = express()
app.configure(() => {
    app.set('port', process.env.PORT, 1004)
    
})

app.configure('development', () => {
    app.use(express.errorHandler())
})
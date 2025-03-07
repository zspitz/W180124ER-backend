console.log(process.env.NODE_ENV)

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send(`Hello ${process.env.HELLO || ''}`)
})

app.listen(PORT, () => {
    console.log(`Server running on port:${PORT}`)
})

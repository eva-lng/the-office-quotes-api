const express = require('express')
const app = express()
const quotes = require('./public/data')
const cors = require('cors')
const PORT = 8000

app.use(cors())
app.use(express.static('public'))

// Display homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// Display documentation page
app.get('/docs', (req, res) => {
    res.sendFile(__dirname + '/public/docs.html')
})

// Fetch a random quote
app.get('/api/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    res.json(quotes[randomIndex])
})

// Fetch all quotes from one character
app.get('/api/all/:char', (req, res) => {
    const char = req.params.char.toLowerCase()
    const charQuotes = quotes.filter(obj => obj.character.toLowerCase().split(' ').includes(char))
    res.json(charQuotes)
})

// Fetch a random quote from one character
app.get('/api/random/:char', (req, res) => {
    const char = req.params.char.toLowerCase()
    const charQuotes = quotes.filter(obj => obj.character.toLowerCase().split(' ').includes(char))
    const randomIndex = Math.floor(Math.random() * charQuotes.length)
    res.json(charQuotes[randomIndex])
})

// Create the server and listen on port
app.listen(process.env.PORT || PORT, () => {
    console.log(`The Office Quotes API is running on port ${PORT}!`)
})
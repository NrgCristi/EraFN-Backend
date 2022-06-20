const express = require('express')
const app = express()
const port = 2022
app.get('/', (req, res) => {
    res.send('https://discord.gg/erafn')
})

app.listen(port, () => {
    console.log(`EraFN Backend started listening on port ${port}`)
})
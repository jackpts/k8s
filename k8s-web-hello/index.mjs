import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    const helloMsg = `VERSION2: Hello from ${os.hostname()}`
    console.log(helloMsg)
    res.send(helloMsg)
})

app.listen(PORT, () => {
    console.log(`Web server is listening on port ${PORT}`)
})

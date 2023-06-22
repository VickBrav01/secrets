import express from 'express'

const app = express();
const PORT = 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(PORT, (req, res) => {
    console.log(`Your server is running at http://localhost:${PORT}`)
    // res.render(`Your server is running at ${PORT}`)

})

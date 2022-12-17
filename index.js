import express from 'express'

const app = express()

app.get('/',  (req, res) => {
    res.send('Hola mundo🗺️')
})

app.listen(8000, () => {
    console.log("El servidor está corriendo en http://localhost:8000")
}) 

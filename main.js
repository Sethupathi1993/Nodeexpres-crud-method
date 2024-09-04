import express from "express"
import Routers from './routes/routesfile.js'
const app= express()
const PORT=4100

app.get('/', (req, res )=>{
    res.json(`{Welcome to Second try in this app}`)

})
app.use('/method', Routers)
app.listen(PORT, ()=>{
    console.log(`Server is running:http://localhost:${PORT}`)
})
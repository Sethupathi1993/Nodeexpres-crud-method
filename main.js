import express from "express"
const app= express()
const PORT=4100

app.get('/', (req, res )=>{
    res.json(`{Welcome to Second try in this app}`)

})
app.listen(PORT, ()=>{
    console.log(`Server is running:http://localhost:${PORT}`)
})
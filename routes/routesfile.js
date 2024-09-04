import express from "express"

const router= express.Router()

router.get('/', (req, res)=>{
    res.send(`This is Get method`)
})
router.post('/', (req, res)=>{
    res.send(`This is Post method`)
})
router.put('/', (req, res)=>{
    res.send(`This is Updated method`)
})
router.delete('/', (req, res)=>{
    res.send(`This is Delete method`)
})

export default router
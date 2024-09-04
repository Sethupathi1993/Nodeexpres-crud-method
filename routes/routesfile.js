import express from "express"
import { GetMethods,
    PostMethod,
    PutMethod,
    DeleteMethod
 } from "../controller/method-controler.js"


const router= express.Router()

router.get('/',GetMethods )
router.post('/',PostMethod)
router.put('/:id', PutMethod)
router.delete('/:id',  DeleteMethod)

export default router
import express from 'express'
import { MouseController } from './mouse.controller'

const router =express.Router()

router.post('/create-product' , MouseController.createMouseProduct)

export const MouseRoutes = router ;
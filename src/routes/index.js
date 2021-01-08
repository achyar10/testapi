import { Router } from 'express'
import { verify } from '../middlewares/AuthMiddleware'
import AuthController from '../controllers/AuthController'
import HomeController from '../controllers/HomeController'


const route = Router()

route.route('/home').get(verify, HomeController.index)

// Auth
route.route('/login').post(AuthController.login)

export default route
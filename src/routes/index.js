import { Router } from 'express'
import AuthController from '../controllers/AuthController'
import HomeController from '../controllers/HomeController'


const route = Router()

route.route('/home').get(HomeController.index)

// Auth
route.route('/login').post(AuthController.login)

export default route
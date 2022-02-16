// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {

    async login( {request, auth }) {
        const { email, password } = request.all()
        const token = await auth.use('api').attempt(email, password)
        return token
    }
    async register({ request }){
        const { email, password } = request.all()
        await User.create({
            email,
            password,
            username: email,
        })
        return this.login(...arguments)
    }
}
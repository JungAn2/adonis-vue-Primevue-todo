// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

const User = use('app/models/User')

export default class UsersController {
    public async register({ request }){
        const {email, password} = request.all()
        console.log(email, password)
        return 'GET users'
    }
}
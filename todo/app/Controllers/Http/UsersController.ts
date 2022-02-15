// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async index(){
        return 'GET users'
    }

    public async store(){
        return 'POST users'
    }
}

// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Projects from 'App/Models/Project'

export default class ProjectsController {
    async index({ auth }){
        await auth.use('api').authenticate()
        const user = auth.use('api').user
        return await user.projects
    }

    async create({auth, request}){
        await auth.use('api').authenticate()
        const user = auth.use('api').user
        const { title } = request.all()
        const project = new Projects()
        project.fill({
            title
        })
        await user.save({projects: project})
        return project
    }
}

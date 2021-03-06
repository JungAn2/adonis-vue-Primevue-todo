/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

//Can use Route.group(()=>{}).prefix("") to have all the prefix

Route.group(()=> {
  Route.post('auth/register', 'UsersController.register')
  Route.post('auth/login', 'UsersController.login')
  
  Route.get('projects', 'ProjectsController.index').middleware('auth')
  Route.post('projects', 'ProjectsController.create').middleware('auth')
}).prefix('api')
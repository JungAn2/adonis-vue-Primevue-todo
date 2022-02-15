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

Route.get('/', async () => {
  return { hello: 'world' }
})

//Using params
Route.get('/posts/:postId', async({params}) => {
  return 'Id: ' + params.postId
})

//Connectes the controller to Routes
//apiOnly() Only get crud
Route.resource('/users', 'UsersController.index').apiOnly()

Route.post('users', 'UserController.index').prefix('api')

/*
can nest route
Route.resource('/users.name', 'UsersController.index').apiOnly()
*/
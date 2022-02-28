# adonis-vue-Primevue-todo 배우기

For some reason, I can't clone this on my windows pc and run it.
check for Errorlog.md for detail

Using two youtube for adonis
> https://www.youtube.com/watch?v=bSvw887ptKI&t=482s
> https://www.youtube.com/watch?v=dfEZlcPvez8&t=608s

To start up the adonis project
> - npm init adonis-ts-app@latest {Project name}
> - Only did it for api
> - True on eslint(analysis tool for identifying problematic pattern)
> - True on prettier(typescript addon)

To start the server
> - First go to the project folder
> - node ace serve --watch
> - or check package.json
> - look for a key that uses node ace serve --watch
> - in this case it's dev
> - npm run dev
> - Just do ctrl+c to exit the server

Creating controller
> - node ace make:controller {controller name}
> - the name is automatically plural

can nest route.resource
> - Route.resource('/users.name', 'UsersController.index')

This took me the longest to figure out.
The when implementing different you need to install two and configure them.
> - npm i @adonisjs/lucid
> - - node ace configure @adonisjs/lucid
> This will create the database config
>
> - npm i @adonisjs/auth
> - - node ace configure @adonisjs/auth
> This will create the model folder with the default one
> you can also create model using
>  - node ace make:model User

Difference in using code for user
> In video
>  - const User = use('App/Models/User')
>
> New way
> - import User from 'App/Models/User'

Since the username is not added,
add the @column in the App/Models/User.ts

for hashing the password from App/Models/User.ts
Need to install whichever the terminal requires
in my case it was argon
> npm i phc-argon2
If not its bcrypt
> npm i phc-bcrypt

When migrating,
The database/migrations data does not have the columns that is needed to store the data
Make sure to add the name of the column that the data is being stored

## For auth
installed auth with
The auth uses oat which you can see from config/auth.ts
> npm i @adonisjs/auth
> node ace configure @adonisjs/auth
> lucid
> api token
> model: user / created migration
> sore database /created migration

To authenticate login on postman
> do auth
> bearer token
> put in token

In regards to projectController,
> return await user.project().fetch()
can be changed to
This is part of the project from model/user.ts
> return await user.project



Terminal commands
- node ace list:routes


Changed to learning express instead of adonis,
Will finish this whenI get the chance
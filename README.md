# adonis-vue-Primevue-todo 배우기

Using two youtube for adonis
https://www.youtube.com/watch?v=bSvw887ptKI&t=482s
https://www.youtube.com/watch?v=dfEZlcPvez8&t=608s

To start up the adonis project
- npm init adonis-ts-app@latest {Project name}
- Only did it for api
- True on eslint(analysis tool for identifying problematic pattern)
- True on prettier(typescript addon)

To start the server
- First go to the project folder
- node ace serve --watch
- or check package.json
- look for a key that uses node ace serve --watch
- in this case it's dev
- npm run dev
- Just do ctrl+c to exit the server

Creating controller
- node ace make:controller {controller name}
- the name is automatically plural

can nest route.resource
- Route.resource('/users.name', 'UsersController.index')
- 


Terminal commands
- node ace list:routes
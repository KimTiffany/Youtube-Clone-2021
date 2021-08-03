/users.logout# Youtube Clone Plan:

- The domains of the project
  - users and videos
- Different Pages Needed

### Global Router

- / -> Home
- /join -> Join
- /logig -> Login
- /search -> Search

### Users Router

- /users/:id -> See User Profile
- /users/logout -> Log Out
- /users/edit -> Edit MY Profile
- /users/delete -> Delete MY Profile

### Videos Router

- /videos/:id -> Watch Video
- /videos/:id/edit -> Edit Video
- /videos/:id/delete -> Delete Video
- /videos/upload -> Upload Video

  - these ones later

- /videos/comments -> Comment on a video
- /videos/comments/delete -> Delete comment of a video

  - the best way to handle these different domains is to put them inside of a router, to organize them
  - routers allow you to group urls based on the subjects

# Review

### **Middleware:**

- is inbetween the request and the response from the browser, after request and before response
- handlers "controlers" are middlewares
- has 3 arguments

  - **request** - the request from the user to the browser
  - response - the response from the browser to the users request
  - next - calls the next function
  - something that is asked to the server

- handle home is the final wear because it is the last function
- when request sees a request it will start calling the handlers
- the middle ware just allows the request to continue
- the middle ware doesn't respond, it just sends the function to the next one

- app.use(): allows you to make middlewares that work in any url
  - order is important, need to have the app.use() then app.get(), first we use the middlewear and then we get the url
  - essentially the different middleware are used to help stop or continue a user
    -middleware is ust like a regular controler

## **package.json**

- is how you put information about your node js project
- is just text
- if you put things in certain places in the package.json then it can be used
- if you add a _script_ then you can use that on the console to run somehting
  - example would be "npm run dev" with _dev_ being the same of a script
  - you can come up with very complicated scripts to run through a nickname
- _dependencies_: these are the packages that your program needs in order to run
  - in this program that would be something like _express_ which is used to create the server
    - express is under node_modules and has a bunch of files and packages of it's own that are used for it to run properly
    - DO NOT NEED TO UPLOAD THE NODE*MODULES FOLDER TO GITHUB: can go inside of the file .gitignore
      -npm will automatically install the dependent files into the system when it reads the \_package.json* and _npm i_ is run
- _devDependencies_: also goes to node modules like regular dependencies
  - is condidered as more of an organizational taktik in order to keep the files looking clean and so they are easy to read
  ### _dependencies_:
  - what are needed in order for the project to run
  ### _devDependencies_:
  - what are needed in order for the developer to code the project

## Babel

- use babel to run the code and be able to have to the code look more organized understand "sexy Javascript"
- in order to use babel we need to crate _babel.config.json_ and install the plug in
- {
  "presets" : `["@babel/preset-env"]`: this preset specifically is used to allow the user to use the latest JS things
  }

## Server

- is a computer that is always on and is connected to the internet and is listening to requests
- can only send requests to browsers that are listening to you

  - importing express from node_modules
  - next we create an _app_ variable, which in the case of this program atm calls to express(), and it will then return the express application ready to be configured
  - PORT because the server cannot listen into the entire computer, so in this code we are using PORT 4000, we are opening a window to our server, and you can use another PORT but higher ones are usually avaiable
  - the server starts listening and always listens until you turn it off
  - express does a lot of things for us so all we need to do is create a server and we are good to go
  - we direct the requests on the browsers by using urls such as
    - /login, /changepassword etc...
  - the "doors" (routes) are selected with the urls
  - the browser is getting things, calling the servers and getting a response
  - `app.get("/", handler)` is used to get the request
    - two arguments: first is the route
    - second: is a handler which is just a function
  - if we don't reply with something than the browser will wait forver for a response

## Controllers

- they have request and response (given by express)
- request is how we get information about the request
- the response is the response from the server, and how we responsd to the given request, we have to respond with something, otherwise the browser will load forever
- going to create routes and then create controllers
- if you don't put a function on the controller part you will have an error
- with controllers it is not wise to mix them in the same class as the routers, so the best thing to do is to export each controller from it's own class to the routers

## Middleware

- the middleware is essentially a software in the middle of the req and the res
- middlewares have 3 arguments, _req, res, next_
- the middleware will continue to send the req to the next function until one of the functions can respond, and then the connection will die
- you can make as many middlewares as you want
- everything is a middleware until someone responds
- usually the last function is the one that will resopond
- you can name the arguments anything you want but the order is what is imporant, it's not about the name of the arguments but the order and number
  - req is first
  - res is second
  - next is third
- however the default and widly used way is the typical _req, res, next_
- on the last controller next is removed since it is not needed
- can use `app.use` which can be used above `app.get` in order for the middlewares to work when using `app.get`
- code works from top to bottom
- middlewares should be used at the top so that they can be used globally

### Morgan

- a request logger middleware for node.js
- we need to call the function morgan because the funciton morgan has some configuration
- when you call it, it returns a middleware
- morgan is more sophisticated
- morgan has different configurantions and they essentially tell the browser different bits of information
- in this course we will use a lot of middlewares
  can code it in two ways

1. - `const logger = morgan("dev");`
   - `app.use(logger);`
2. - `app.use(morgan("dev"));`

- either one works, it's one line vs two lines of code

## Routers

- routers allow you to organize your controllers and your urls in an easier way, essentially allow you to create "mini-applications"
- you need to think about the data in the project
- How to make a router?
  - `const globalRouter = express.Router()`
  - `const handleHome = (req, res) => res.send("Home");`
  - `globalRouter.get("/", handleHome);`
- this will come together and will make the home page of

  - `localhost:4000/Home`
  - this also works for other parts as well such as making the page
    - `localhost:4000/videos/edit`

- should write ugly code first and then clean the code up after
- divide and conquor
- every file in nodejs is a module and every file is a bubble, they opperate on the their own and indpendantly of each other and need to be imported to be used with other parts
- every file is it's own universe and if you want to communitcate with the outside you need to export and import
- if you want to import a file you also need to export a file (import the router)
- the router is just the beginning of the url

#### default export: `export default globalRouter;`

#### Import: `import globalRouter from "./routers/globalRouter";`

## Importing and Exporting

- when you are importin and exporitng it's important to note that each class can only have one default export
- need to write like this when exporting
  - `const join = (req, res) => res.send("Join");`
- need to write the import like this
  - `import { join } from "../controllers/userControllers";`
-

## Router Recap

- we started using the `app.use` within the server in order to be able to organize the code in a better way
- without organizing the urls, the urls become very complex
- instead we use routers: a way to organize the urls based on how they start sure as `/user, or /login`
- you don't want to write your "user" urls next to your "video" urls
- when using the routers we don't need to repeat ourselves with the names for the urls. don't need to write `/videos/edit`, we can just write `/edit` for the router

## Architecture Recap

- in order to organize the code we created two folders to hold the controllers and the routers
- before you can import you need to export
- each individual file is a bubble and each thing that you want to share needs to be specified
- when using the `export default` node js automatically knows what you are refering to when exporting
- same with express, knows that even if you change the same `import apple"from "express"`, it knows you are refering to the default import inside of express
- using just `export` means that you can export more than one thing. `export default` only allows you to export one thing within the codw
- so when using just `export` you can write the code as such for the import
  - `import { edit, remove } from "..controllers/userControllers";`
  - this will import these functions from the userController
  - you have to use the same name unlike `export default`
- seperate, divide and conquor
- on the server seperate based on how the urls starts
  - inside of the router we are completeing the url and importing the controller functions
  - `../` means to get out of the where you are, such as `../controllers/videoControllers` so it means:
    - get out of this folder, go to this next folder and access the file inside of there. In the case of this code we are inside or `videoRouters` folder and we want to leave that folder, access the `controllers` folder and then access the file `videoControllers`

## What is the ':' used for?

- ### Parameters:

- when writing the urls for certain things, we come across something that has a ':' sign in front of it. such as:
  - `videoRouter.get("/:id/edit", edit);`
- what is the purpose of the ':' in front of id?
  - first, the name "id" can be anything and is not required to be named "id"
  - second, it is a parameter, argument, variable
    - it allows you to have urls that have variables inside of them
  - without the variable parameter, a route would have to be created for each individual connection, in our case, the videos
    - it's impossible to create all the connections for each thing, which is why this is useful
- express understands that the url has a variable and gives us the video with the unique url

  - upload above the other parts with id, otherwise upload is viewed as a valid id
  - so if upload is first, upload is not seen as and id

  ## Regular Expressions

  - he is talking about the different types of regular expressions that can be used when creating urls
  - talks about how the ids in our project will be different due to the database system we will be using
  - regular expressions: a way of extracting information from a string
    - can use these to target certain words or numbers
      - `/tiffany/` or `/(d+)` d = digit

## Lets return HTML

- sending html to the browser
- but using html to send is not a good solution for the long run with what he showed lmfao

### This is where PUG comes in

- pug is a template engine
- pug will be a view engine
  - `app.set("view engine", "pug");`
  - this is how we set pug up to be the view engine, this code is located inside of the server
- pug will turn the writting into html

## Views on Express

- making pug work on the browser
- `app.set("views", process.cwd() + "/src/views");`
- this code fixes the error so that the views folder can be used which contains the pug file, this code is found in server.js
- pug allows us to write well organized html code
- can include js in out html
- don't need to repeat ouselves and can include files

## Inheritance

- what does inheritance do?
  - allows you to define a base of a layout, then all other files will extend the base
  - `extends base.pug` this allows you to extend from one common file and have all the other files extend from there

## Learning the concept of blocks

- it is useful when you want to go to as .pug file that extends the base.pug and you want to add something
  - `block content`
  - we create a block content on the base.pug
  - because we extend base.pug, we can fill up the block content
  - It's the same as essentially copying and pasting everything from base.pug to each extension of base.pug, but makes it easier to amend content and to add things without having to change everything

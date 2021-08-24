/users.logout# Youtube Clone Plan:

- The domains of the project
  - users and videos
- Different Pages Needed

<details><summary><b>Global Router</b></summary>

<p>

</p>
</details>

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
  - we need to understand the block, you become the file when yu extend it
  - why is extend cool?
    - it allows us to have a base with certain parts that we can modify
    - blocks can have somehting put in them, they are the windows and the doors to putting content inside of a template that you extend from
    - if we extend from base then somehting like edit becomes a clone of base but we can but somehting inside of the block content
    - blocks when you want to add your custom html
    - when want to add a variable in pug, need to use this syntax
      - `#{putVariablenameHere}`

## Recap

- Pug is nice cause you can write code that looks like Python and it's simpliar, based on tabs and distances
- we learn how to render this by telling express and give it to the user with `res.respond(nameOfThe.pugFile )`
- we do this through the server.js where we can communicate with express where is automatically looks for the pug files we program it to
- programmers are lazy and want to make the programs as short as possible and write as little code as possible
- so we put the code together in a way where we need to do minimal work
  - we create individual .pug files for various elements so we don't need to update on every file that includes the same file, we only update the one file and it automatically updates
  - don't want to copy paste the base structure for the html, so we created a base.pug file where we used the code for `block content`
    - we never render this file directly
    - instead we used the `block content` to edit the content inside the `block content` for each .pug file that uses the base template
    - so in order to connect the base template to the other templates we use `extends base.pug` on the files we want to extend to.
      - so if we want to `extend base.pug` to go to `edit.pug` we will tpye the code `extends base.pug` onto the top of the file of `edit.pug`
    - once this is done we then get the entierty of the base.pug design and then we can add things in the areas that are defind by the `block content`
  - what are blocks?
    - they are ways for the base files to have a window/door to put content there
    - we want to personalize the file, add our own things but get the good things from the previous files
    - we don't want to just copy, we want to extend so that we can add our own things to it
    - gives you a way to communicate back from the file you extended from
  - looking for variable?
    - we use the code in .pug `#{putVariablenameHere}` to add a variable
    - we get the variable from the `res.render( )` which is located inside of the controllers
    - it takes two arguments,
      - 1: name of the file
      - 2: an object that can have as many variables as we want
    - so in this case the variable name needs to be the same
    - EX:
      - base.pug calls for ` title #{pageTitle} | Youtube`
      - so inside of the video controller we write:
      - `res.render("home", { pageTitle: "Home" });` with the name of the variable now being "Home"

## How is the course set up?

- we go a lot of stuff later lmfao
- scss later
  -MVP CSS which is a temp solution to help make the website look a little better until we add our own touches

  ## Conditionals on Pug

  - conditionals include else if, if else, etc
  - `h1=pageTitle` you can write this is you just want to include the variable and you do not want to include other text
  - `title #{pageTitle} | Youtube` if you want to unclude other text outside of the variable then you should write it like this
  - we are extending from `base.pug`
  - he is using thre example of whether or not a user is logged in
  - so in this case we want to create a conditional to show if the user is logged in, then it will show the log out button, and vice versa
  - EX:
  - `body`
    - `header`
      - `if fakeUser.loggedIn`
        - `small Hello #{fakeUser/username}`
      - ` nav`
        - ` ul`
          - `if fakeUser.loggedIn`
        - ` li`
          - ` a(href="/login") Log out`
        - ` else`
          - `li`
            - ` a(href="/login") Login`

- the other part of this code that it reads from is implimented in the videoController
  - const fakeUser = {
    username: "Tiffany",
    loggedIn: true,
    };
- then connect through the trending (home) controller
  - `res.render("home", {pageTitle: "Home", fakeUser: fakeUser});`
  - if we use the short cut ES6 then we can write it like this
  - `res.render("home", {pageTitle: "Home", fakeUser});`

## Iterations on Pug: Arrays

- right now he is discussing returning arrays
- in this case we are talking about returning an array located inside of the `trending` controller which is the same location as the precious example
- EX: this example is located inside of the brackets of the trending controller. i.e `trending = (req, res) => {`
  - `const videos = [1, 2, 3, 4, 5];`
  - `res.render("home", {pageTitle: "Home", videos});`
  - `}`
- after writting this code we then want to connect it to the `home.pug` file
  - 1st: we need to make sure that there is a variable that is the array object in order to create and show a list
  - then we say
    - `each video in videos` (video is random name we pick assigned to this particular line of code, it is just the name that represents each item in the array)
    - the name that has to be the same as the variable in the one that follows the word `in` in the line of code, this is how you are able to call to that varibale and access the itmes inside of it
    - if the name is not the same you will get an error message saying that the name is undefined since it needs to match
    - `ul`
      - `each video in videos`
        - `li=video`
  - so what we are doing is we are saying for each item in the videos array, create a list and put the video inside of the list
  - if the array is empty and we are unable to find what we are looking for, we can add an else statement:
    - `ul`
    - `each video in videos`
      - `li=video`
    - `else`
      - `li Sorry, no videos were found`
  - this is all considered pug and no javascript
  - it doesn't necessarily have to be an array either, but it needs to be either an array or an object in order for it to work
  - if you go onto pugs website there are a lot of examples of different iterations that can be used, so it's a good place to get a references fir what you are trying to do

## Iterations on Pug: Mixins (Objects)

- Ex:
- `trending = (req, res) => {`
  - `const videos = {{title: "Hi",}, title: "Apple",}, {title: "Grape",}}`
  - `res.render("home", {pageTitle: "Home", videos});`
  - `}`
- this above example shows objects written instead of an array, so the way to impliment this is simple
  - `ul`
  - `each video in videos`
    - `li=video.title` <- this fixes it
  - `else`
    - `li Sorry, no videos were found`
- now we discuss mixins, they are like partials
  - it's a partial that receives data
  - what do we do when html has same shape but not same data?
    - this are mixins "smart partials"
- EX:
- `const videos = {`
  - `{title: "Hi", rating: 5, comments: 2, createdAt: "22 minutes ago"}, views: 59, id: 1 `
  - `{title: "Apple",rating: 5, comments: 2, createdAt: "22 minutes ago"}, views: 59, id: 1 },`
  - ` {title: "Grape",rating: 5, comments: 2, createdAt: "22 minutes ago"}, views: 59, id: 1 }}`
  - so what we can do is alternate the code for pug:
  - `each video in videos`
  - `div` -` h4= video.title`
    - `ul`
      - `li #{video.rating}/5`
      - `li #{video.comments} comments.`
      - `li Posted #{createdAt}`
      - `li #{video.views} views.`
  - `else`
    - `li Sorry, no videos were found`
- so on youtube, the template for each video is the same meaning that youtiube re-uses the shape and the way the videos are
- we want to copy paste less, but we want to use the same structure
  - this where mixins come in
  - on my code I created and used the code above, and then added it to my current html
  - I created the `video.pug` file and saved the template inside of there, this was created within the folder `mixins`
  - I then added it to my `home.pug` file using these three lines of code
    - `include mixins.video`
    - then we create the code to actually use the template
    - `each view in videos`
      - `+video(view)`
      - the plus is how we call the mixins

## Recap: Iterations and Mixins

- When is comes to front end development of our code, we will be using iterations a lot, and also sometimes using mixins

### - Iteration:

- means we want to do an actions for every element on an array
- is an array and or an array of objects
- something that we will do a lot
- if you do not iterate on an array there will be an error stating that the object is not defined
- the else condition when the array is empty
- we then need to return the values in the videoControllers(in this case, it could be from somewhere else in other code) and this is done by calling the array name in the line like this
  - `res.render("home", {pageTitle: "Home", videos});`

### - Mixins:

- each "x" in videos is an object, so what we do is we apply a mixin to show each value
- youtube uses video blocks, and they are everywhere, we want to show the same html shape in serveral places
- the mixin is a pre-made html shape that will take information form the ouside world
- in our case, the `video.pug` file is like a partial, like `footer.pug` except that it gathers information unlike `footer.pug`
- the content is the thing that changes
- so in order to make sure that the data is not undefined (is not a function), we need to send it to `video.pug`
- and once this is done, the video template will display things the way we want
- code example is above
- return the same shape with different data

# DataBase Ch 6

## Array Database

- the first thing we are going to learn is about post
- the first thing that he does is take the fake database that we created and post it ouside of the trending controller, and posts in at the beginning of the controllers (outside of all of the controllers)
- also chanes `const` to `let`
- the goal for now is to be able to click the video title and be able to go to the page with the url
  `localhost:4000/videos/(video id)`
- in order to do this we need to change the mixin
- we do this by writting the line of code like this:
  - `a(href=`/videos/${video.id}` )=video.title`
  - with adjusting the code that is inside of the videoController, we were able to render the watch page, add the new title, and console log the video id

### - absolute vs relative urls

- if you put a slash in front of the href
  - `a(href="/edit") Edit Video &rarr;`
  - this will go to the root of the url and then the added url after the slash
    - `localhost:4000/edit`
- now when you remove the slash in front, you get a relatice url
  - `a(href="edit") Edit Video &rarr;`
  - this means that because there is no slash, the browser will change the ending
  - `localhost:4000/videos/edit`
- in the our case atm we want a relative url

## Editing the Videos: 6.2

- get request vs a post request?

  - give name to input to see what is the diff
  - the method is get by default
  - get is when you are retriving information from the database while
  - post is when you are changing somehting within the database

  - the best thing to think about is what is the data going to do in the backend
  - are you going to do something with the data to change the database? then you use POST
  - if you are just going to retrieve the information than you use GET

  - we need to use the code
    - `express.urlencoded()` this understand the body of the forms
    - has some options, but we will use `extended`
      - basically formats the information on the body in a cool way

- in side of the server.js, we impliment the following code
- ` app.use(express.urlencoded({ extended: true }));`
  - this makes the express application understand and transform the forms values into cool java script that can be used later

## Recap 6.4

- we need to send data to our backend, and we do this by using forms

  - we use the method POST inside of the form
    - this will send a post request to the backend
  - so in order to deal with that, we create the `videoRouter.route` inside of the videoRouter to send the request as either get or post
    - tend to use route if there is two or more http "verbs"
  - `req.body` this is the JS representaiton of the values in your form
  - this is possible because we created a middleWare inside of the `server.js`

    - `app.use(express.urlencoded({ extended: true }));`
    - this middleware understands html forms and it translates html forms into js objects
    - this middleware is also posted before the routers, there will already be a req.body so we can get the information about the request
    - in order for the req.body to show, you need to name the input that you are getting the information from in the form

    - What are we using for the database?
      - MongoDB and Mongoose

## MongoDB

- it's a database that is easy to work with and easy to understand, ecpecially as a beginner
- document-based database system: stores data in JSON-like documents
- the data-base doesn't save in rows and collums
- easier to find stuff in the database system

## Mongoose

- Mongoose is the bridge between js and MongoDB
- we want to communicate with MongoDB using JS so Mongoose is the mediator
- the bridge between nodeJS and Mongoose
- we connect to the databnase by installing and running both MongoDB and Mongoose
- We do then write the code necessary to connect inside of `db.js`

## CRUD

- Create
- Read
- Update
- Delete
- these are the differnt functions that we will be making and using as we make the project
- we will now practice and make the plan using mongoose
- we need to tell mongoose what our data looks like

## Query

- what is an example of a callback?

  - a function that is called after something happens
  - do this then when that happens do this
  - when we are using a callback function, we are waiting for something, we are accessing somehting outside if the js, such as the database and therefore we are waiting for a response

  ## Promise for callbacks

  ### Everything in the following parts are all taking place inside of the videoController, postUpload function

  - The differnce between using `callbacks` and `async` and `await`

    - so when you put `await` in front of `find`:
      - `const videos = await Video.find({});`
    - find knows that you don't want the call back:
      - `Video.find({}, (error, videos) => {});`
    - so find will give you the found videos as the result of the find operation
    - so how do we get the errors? Try and Catch
    - there are two methods, the Java Script way with callbacks:
      - 1 :`Video.find({}, (error, videos) => {`
        - `if (error){`
          3: - `return res.render("server-error")`
      - `}`
        -2: `return res.render("home", {pageTitle: "Home", videos});`
    - `});`
    - The other way to do this is by using the Try and Catch method:
    - `try {`
      - 1: `const videos = await Video.find({});`
      - 2: ` return res.render("home", { pageTitle: "Home", videos });`
    - 3: `} catch {` - `return res.render("server-error");`

  - the good thing about `await` is that it waits for the database
  - when we use the `await` function, it forces js to wait or the response form the db which causes the order the be correct in a way
  - in the call
  - with the callback function the order is different because js doesn't wait, so the order is more like 1, 3, 2, where the middle part does not execute first since js doesn't wait for the response from the db
  - so `await` reads the code from top to bottom the way we want
  - also, when using `await` it must be used inside of a function that is async, so we add async in the beginning like such:
    - `export const home = async (req, res) => `
  - in terms of the callback function, when you put return inside of another functions, i.e the 1st fucntion which is: `export const home = async (req, res) => {`
  - and then you add the other function => ` Video.find({}, (error, videos) => {`
  - the the return function located inside of `Video` does not return anything to the `home` function
  - so inside of express, it doesn't matter if we use return or not, what matter is the function we call
  - cannot `res.render` something twice, so express will not allow it, so when we use the line of code,
    - `res.render(etc...)` we can only call this once within the function
    - do we cannot res twice within a function
    - so, return is not a requirment but we use it to make sure that the function finishes
  - 1 :`Video.find({}, (error, videos) => {` - `if (error){`
  - 3: ` return res.render("home", { pageTitle: "Home", videos });`
  - `}`
    -2: `return res.end());`
  - `});`
  - so within this callback funciton, the last line of code will execute first, so the one labeled 2, and because of this the home function will never be callled and the connection to the host will end

## Creating a Video

### Everything in the following parts are all taking place inside of the videoController, postUpload function

- Schema which is the shape of the video
- we can use the function `split` to break apart each word in a string, so when we impliment the hashtags, we can tag each of them
- example: `"apple, chicken, cheese".split(",")`
- this then becomes and array seperated by the commas
  - `["apple", "chicken", "cheese"]`
    so to add the hashtag in front, we can use the funciton map
    - `"apple, chicken, cheese".split(",").map((word) => `#${word}1`)`
      - which then gives us: `["#apple", "#chicken", "#cheese"]`
- {
  - hastags: [ '#apple1', '# cheese1', '# turkey1' ],
  - \_id: 610d6e63d64ca439d86b9b14,
  - title: 'apple ',
  - description: 'apple cheese',
  - createdAt: 2021-08-06T17:16:19.835Z,
  - meta: { views: 0, rating: 0 }
- }

- when we console log the video, this is what is shown, we are getting and id thanks to mongooose, which connects us to mongodb. and documents need and id, so we are given a random one

### Now we created the video! Now what?

### Everything in the following parts are all taking place inside of the videoController, postUpload function

- we need to add the video to the database
  - so with Mongoose, we are being protected, so if we enter the wrong type of data into certain ares, it won't save that data to the document, or when we have a string object, i.e the title of the video and we enter a number, it will automatically turn the number into a string. and if we enter in a string into a number, it will not add that into the document
- Mongoose is helping to validate the type of the data
  - thats the advantage of defining the shape of the data, so Mongoose helps us so we do not have false data
- so now lets save this to the data base
  - so in our case we can write, `video.save()`
    - now because this is a function that needs to wait for the database, it is not just in js, js happens automatically, but this will pause and cause the code to wait for the response from Mongoose
    - in order to wait for the video to save, we once again need to use `async` and `await`
    - so when using these two lines of code, it cause save to return a `Promise` which we have to await and then it returns thre created document
- and now we have a video! :D
- now it is on the DataBase!
- a colleciton is a group of documents (can see this in the computers terminal)

  - there is also another way to save the video,
  - inside the `postUpload` function we can alter the code, and instead of saying `video.save();` we can instead in the beginning, ` await Video.create` and then it will work just the same

  - in order to offer the most protection for the program, the user, the browser etc, it is best to specify certain things in both the Schema and the html.
    - what I mean is that for an example: We want the description to be a maxLength of 240 characters, so we should specify this in the upload.pug and also inside of the Video.js files so that way if someone were to hack the wesite, they cannot effect the database
  - the Video.js is the power of defining the VideoSchema
  - we need to use a regular expression in order for the browser to read the hexidecimal value assigned as the id for the videos in the browser.
    - we do this with the expression ([0-9a-f]{24})
    - this means zero through 9, a through f, and the 24 characters it is compreished of

- put the error code inside of the if statement inside of the functions in order to kill the code early if there is an error

## Editing the Video:

- we need to send a POST request to the /videos/id/edit in order to post the edited material
- the uppercase `Video` is the model. from Video.pug, and the lowercase `video` is the video object found in the databasse
- mongoose also has the middleware option where you are a able to validate or check something before you save a value
- `exists` requires a filter which could be anything, but in our cause it is ` ({_id:id})`

## Middlewares in Mongoose

- it does not interupt the flow, it will do something and then it will continue the flow

  - an example for this is to use a middleware before saving something or removing something
  - we have to create out middleware before we create our model
  - inside of the middleware type that we will be using, there is a keyword called `this`, `this` refers to the document that we are about to save
  - the middleware in this section is located inside of Video.js and is the `videoSchema.pre`

  - there is a better way to save the video because in our case we meed to save it when it is initially created but also when it is edited

### Statics

- videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
  .split(",")
  .map((word) => (word.startsWith("#") ? word : `#${word}`));
  });

## Section 7.0 User login

- we are going to be implimenting user login and will be able to remember the user, and we will also be able to enable git hub login
- using CRUDE
- going to make passwords, users and sessions

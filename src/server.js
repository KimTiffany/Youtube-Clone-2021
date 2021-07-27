import express from "express";

const PORT = 4000;
const app = express();
//after express and before the handlelistening is where we will configure the applicaiton "sandwich"
//request: the user is asking something of you, such as a "get request" like get the website
const handleHome = (req, res) => {
  return res.send("I want ice cream");
};
const handleLogin = (req, res) => {
  return res.send("Login here");
};

app.get("/", handleHome);
app.get("/login", handleLogin);
//teaches the app that when someone sends a get request to "certain route" we will create a callback
//need to send a function as pictured above
//the browser is the one making the get request
const handleListening = () =>
  //first argument is the request and the second argument is the response, express handles this under the hood
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);

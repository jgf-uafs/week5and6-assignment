const express = require("express"); // require express for the server
const app = express(); 
const PORTNO = 3000;

// ** Required Middlewate
// Add here app.use statements
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//*** Routes

app.get("/", function(req, res){
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/search", function(req, res){
  let keyword = req.query.keyword;
  res.send(`<p>You searched for ${keyword}</p>`);
});

app.post("/register", function(req, res){
  let user = req.body.username;
  let email = req.body.email;
  res.send(`
    <h3>Account Created!</h3>
    <p>New account created with username ${user} and email ${email}</p>
    `);
});

app.listen(PORTNO, function () {
  console.log(`Listening on Port: ${PORTNO}`);
});

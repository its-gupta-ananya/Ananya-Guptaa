const express = require("express");
const app = express();
const ejs = require("ejs");
const port = process.env.PORT || 8000;
const path = require("path");
const flash = require("connect-flash");
const CustomMiddleware = require("./config/flash-middleware");
const session = require("express-session");
app.use(session({ cookie: { maxAge: 60000 }, 
  secret: 'woot',
  resave: false, 
  saveUninitialized: false}));
// const sassMiddleware = require("node-sass-middleware");

// app.use(
//     sassMiddleware({
//       src: path.join(__dirname,'./assets','scss'),
//       dest: path.join(__dirname,'./assets','css'),
//       debug: true,
//       outputStyle: "extended",
//       prefix: "/css",
//     })
//   );

app.use(express.urlencoded());
app.use(express.static('./assets'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(flash());
app.use(CustomMiddleware.setFlash);

app.use("/", require("./router"));
app.listen(port, function (err) {
    if (err) {
      res.end("Cannot connect");
    }
    console.log("Connected to server");
    return;
  });


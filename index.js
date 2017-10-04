var express = require("express");
var app = express();

// tat ca moi duong dan khach hang goi len di vao public tim nha
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);

// "/" co nghia la khach hang truy cap http://localhost:3000/
// req la tham so khach hang goi len
// res la nhung gi server node tra ve
app.get("/", function(req, res){
  res.render("home");
});

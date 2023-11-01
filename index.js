var con = require("./connection");
var ex = require("express");
let app = ex();

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine",'ejs')

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let cont = req.body.contact;
  let soloEvent = req.body.soloEvent;
  let teamEvent = req.body.teamEvent;
  let token = req.body.tokenResult;

  con.connect(function (err) {
    if (err) throw err;

    let sql =
      "INSERT INTO registrationtable2(name, email, mobile, soloEvent,teamEvent,token) VALUES ?";

        let val = [
            [name, email, cont, soloEvent, teamEvent, token]
        ];

    con.query(sql,[val],function (err, result) {
      res.send("Register Listner Succesfull" + result.insertId);
    });
  });
});

app.get('/registrationtable2',function(req,res) {

        var sql = "select * from registrationtable2";
        con.query(sql, function(err, res) {
            console.log(res);
        })
    })    

app.listen(3000);

const express = require("express");
const app = express();
const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용

var connection = mysql.createConnection({
  host: "116.45.105.122",
  user: "root", //mysql의 id
  password: "", //mysql의 password
  database: "testdb", //사용할 데이터베이스
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("혁이는 코딩 중!");
});

app.post("/idplz", (req, res) => {
  const id = req.body.post_id;
  const password = req.body.post_password;
  const name = req.body.post_name;
  const email = req.body.post_email;
  const phone = req.body.post_phone;
  const birth = req.body.post_birth;

  console.log(req.body);
  connection.query(
    "INSERT INTO user (User_ID, User_Password, User_Name, User_Birth, User_Phonenum, User_Email) values (?,?,?,?,?,?)",
    [id, password, name, birth, phone, email],
    function (err, rows, fields) {
      if (err) {
        console.log("실패");
        console.log(err);
      } else {
        console.log("성공");
        console.log(rows);
      }
    }
  );
});

app.post("/callbody", (req, res) => {
  const check_id = req.body.check_id;
  var ck = 0;
  connection.query("SELECT * FROM user ", function (err, rows, fields) {
    if (err) {
      console.log("불러오기 실패");
    } else {
      console.log(rows[0].User_ID);
      for (var key in rows) {
        if (check_id == rows[key].User_ID) {
          console.log(rows[key].User_ID);
          ck = 1;
          break;
        } else {
          continue;
        }
      }
      if (ck == 1) {
        res.send({ ck: "True" });
      } else {
        res.send({ ck: "False" });
      }
    }
  });
});
app.post("/callbody_find", (req, res) => {
  const fcheck_birth = req.body.check_birth;
  const fcheck_name = req.body.check_name;
  var idf = 0;
  var idfid;
  connection.query("SELECT * FROM user ", function (err, rows, fields) {
    if (err) {
      console.log("불러오기 실패");
    } else {
      for (var key in rows) {
        if (
          fcheck_birth == rows[key].User_Birth &&
          fcheck_name == rows[key].User_Name
        ) {
          console.log(rows[key].User_ID);
          idf = 1;
          idfid = rows[key].User_ID;
          console.log(idfid);
          break;
        } else {
          continue;
        }
      }
      if (idf == 1) {
        res.send({ ck: "True", ckh: idfid });
      } else {
        res.send({ ck: "False" });
      }
    }
  });
});

app.post("/login", (req, res) => {
  const check_id = req.body.post_id;
  const check_password = req.body.post_password;
  var login = 0;

  console.log(req.body);
  connection.query("SELECT * FROM user ", function (err, rows, fields) {
    if (err) {
      console.log("불러오기 실패");
    } else {
      console.log(rows[0].User_ID);
      for (var key in rows) {
        if (
          check_id == rows[key].User_ID &&
          check_password == rows[key].User_Password
        ) {
          console.log(rows[key].User_ID + " " + rows[key].User_Password);
          login = 1;
          break;
        } else {
          continue;
        }
      }
      if (login == 1) {
        res.send({ login: "True" });
        connection.query(
          "UPDATE user SET Login_State = 'True' WHERE User_ID = (?)",
          [check_id]
        );
      } else {
        res.send({ login: "False" });
        connection.query(
          "UPDATE user SET Login_State = 'False' WHERE User_ID = (?)",
          [check_id]
        );
      }
    }
  });
});

app.post("/session", (req, res) => {
  const check_id = req.body.se_id;
  var login = 0;
  var name = "";

  console.log(req.body);
  connection.query("SELECT * FROM user", function (err, rows, fields) {
    if (err) {
      console.log("불러오기 실패");
    } else {
      console.log(rows[0].User_ID);
      for (var key in rows) {
        if (check_id == rows[key].User_ID && rows[key].Login_State == "True") {
          console.log(rows[key].User_ID);
          login = 1;
          name = rows[key].User_Name;
          break;
        } else {
          continue;
        }
      }
      if (login == 1) {
        res.send({ login: "True", user: name });
        console.log(name);
      } else {
        res.send({ login: "False" });
      }
    }
  });
});

app.post("/logout", (req, res) => {
  const check_id = req.body.out_id;

  console.log(req.body);
  connection.query(
    "UPDATE user SET Login_State = 'False' WHERE User_ID = (?)",
    [check_id],
    function (err, rows, fields) {
      if (err) {
        console.log("불러오기 실패");
      } else {
        console.log("불러오기 성공");
        res.send({ out: "logout" });
      }
    }
  );
});

app.post("/locate", (req, res) => {
  console.log(req.body);
  connection.query(
    "SELECT * FROM ttable ORDER BY incre DESC LIMIT 1",
    function (err, rows, fields) {
      if (err) {
        console.log("불러오기 실패");
      } else {
        console.log(rows[0].loc_latitude, rows[0].loc_longtitude);
        console.log("불러오기 성공");
        res.send({
          loc_latitude: rows[0].loc_latitude,
          loc_longtitude: rows[0].loc_longtitude,
        });
      }
    }
  );
});

app.post("/modifyuser", (req, res) => {
  const check_id = req.body.ck_id;
  const name = req.body.post_name;
  const birth = req.body.post_birth;
  const mail = req.body.post_mail;
  const phone = req.body.post_phone;

  console.log(req.body);
  connection.query(
    "UPDATE user SET User_Name=(?), User_Birth=(?), User_Phonenum=(?), User_Email=(?) WHERE User_ID = (?)",
    [name, birth, mail, phone, check_id],
    function (err, rows, fields) {
      if (err) {
        console.log("불러오기 실패");
      } else {
        console.log("불러오기 성공");
        res.send({ modi: "True" });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Connect at http://localhost:${port}`);
});

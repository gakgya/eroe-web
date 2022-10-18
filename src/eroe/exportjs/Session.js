export function Session(id){
    var ck_login = "False"
    const idpost = {
        se_id: id,
      };
      fetch("http://localhost:3001/session", {
        method: "post", // 통신방법
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(idpost),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          /*
          if (json.login == "True") {
            ck_login = "True"
            console.log(ck_login)
          } else {
            ck_login = "False"
          }*/
          ck_login = json.login;
          console.log("ck_login" + ck_login)
        });
        return ck_login;
}

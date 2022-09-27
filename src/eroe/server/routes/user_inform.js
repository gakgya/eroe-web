router.post('/onLogin', (req, res) => {
    console.log(`= = = > req : ${util.inspect(req)}`)
   	// user_id, user_pw 변수로 선언
    const user_id = req.query.user_id
    const user_pw = req.query.user_pw
    // 입력된 id 와 동일한 id 가 mysql 에 있는 지 확인
    const sql1 = 'SELECT COUNT(*) AS result FROM user_inform WHERE user_id = ?'
    db.query(sql1, user_id, (err, data) => {
        if(!err) {
        	// 결과값이 1보다 작다면(동일한 id 가 없다면)
            if(data[0].result < 1) {
                res.send({ 'msg': '입력하신 id 가 일치하지 않습니다.'})
            } else { // 동일한 id 가 있으면 비밀번호 일치 확인
                const sql2 = `SELECT 
                                CASE (SELECT COUNT(*) FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                    WHEN '0' THEN NULL
                                    ELSE (SELECT user_id FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                END AS userId
                                , CASE (SELECT COUNT(*) FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                    WHEN '0' THEN NULL
                                    ELSE (SELECT user_pw FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                END AS userPw`;
                // sql 란에 필요한 parameter 값을 순서대로 기재
                const params = [user_id, user_pw, user_id, user_pw, user_id, user_pw, user_id, user_pw]
                db.query(sql2, params, (err, data) => {
                    if(!err) {
                        res.send(data[0])
                    } else {
                        res.send(err)
                    }
                })
            }
        } else {
            res.send(err)
        }
    })
});
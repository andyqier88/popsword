const mysql = require('mysql')
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'baimiaosql'
})

var query = (sql, val) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      connection.query('SELECT * FROM users', (error, results, fields) => {
        if (error) {
          return resolve(err)
        }else {
          connection.query(sql, val, (err, rows) => {
            if (err) {
              reject(err)
            }else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  })
}
let users =
`create table if not exists users(
     id INT NOT NULL AUTO_INCREMENT,
     username VARCHAR(100) NOT NULL,
     password VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
		);`
let createTable = (sql) => {
  return query(sql, [])
}

createTable(users)
console.log(createTable(users))
// 查找用户
let findUser = (name) => {
  var _sql = `select * from users where username="${name}"; `
  return query(_sql)
}
module.exports = {findUser}

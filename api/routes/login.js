const connection = require("../connection");
const express = require('express');
const router = express.Router();

module.exports = router;

router.post('/api/login/', (req, res, next) => {

  console.log(req.body.email + '||' + req.body.password)

  if (!req.body.email || !req.body.password) {
    return res.status(500).send('Missing Body')
  }
  const bcrypt = require('bcrypt');
  const query = "SELECT id, password FROM user WHERE email = '"+req.body.email+"';"
  console.log(query)

  connection.query(query, null, (err, result) => {
    // bcrypt.hash('abc123', 10).then(function(hash) {
    //     console.log(hash)
    // });
    //
    console.log("query ran")
      if (err) {
        console.log("query ran err")
        return res.status(500).send('Failed to SELECT from database')
      } else {
        console.log("query ran success")
        if (result.length == 1 && result[0].password && bcrypt.compareSync(req.body.password, result[0].password)) {
          const hat = require('hat');
          const token = hat();
          const update = "UPDATE user SET token = '"+token+"' WHERE id = "+result[0].id+" LIMIT 1;";
          console.log(update)
          connection.query(update, (updateerr, updateresult) => {
            if (updateerr) {
              return res.status(500).send('Failed to UPDATE database')
            } else {
              const response = { 'success': true, 'token': token }
              return res.json(response);
            }
          });
        } else {
          return res.status(500).send('Failure')
        }
      }
  });
})

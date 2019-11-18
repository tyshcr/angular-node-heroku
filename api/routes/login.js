const connection = require("../connection");
const express = require('express');
const router = express.Router();

module.exports = router;

router.post('/api/login/', (req, res, next) => {
  const bcrypt = require('bcrypt');
  const query = "SELECT id, password FROM user WHERE email = '"+req.body.email+"';"
  connection.query(query, null, (err, result) => {
      if (err) {
        return res.status(500).send('Failed to SELECT from database')
      } else {
        if (bcrypt.compareSync(req.body.password, result[0].password)) {
          const hat = require('hat');
          const token = hat();
          const update = "UPDATE user SET token = '"+token+"' WHERE id = "+result[0].id+" LIMIT 1;";

          connection.query(update, (updateerr, updateresult) => {
            if (updateerr) {
              return res.status(500).send('Failed to UPDATE database')
            } else {
              const response = { 'token': token }
              return res.json(response);
            }
          });
        } else {
          return res.status(500).send('Failure')
        }
      }
  });
})

function login(email, password, callback) {
  var connection = mysql({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'mydb'
  });

  connection.connect();

  var query = "SELECT email, password " +
    "FROM Brands WHERE email = ?";

  connection.query(query, [email], function (err, results) {
    if (err) return callback(err);
    if (results.length === 0) return callback(new WrongUsernameOrPasswordError(email));
    var user = results[0];

    bcrypt.compare(password, user.password, function (err, isValid) {
      if (err) {
        callback(err);
      } else if (!isValid) {
        callback(new WrongUsernameOrPasswordError(email));
      } else {
        callback(null, {
          email: user.email
        });
      }
    });

  });
}

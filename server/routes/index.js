var express = require('express');
var router = express.Router();
var user = require('../controllers/AuthenticationController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/register', user.add)
// router.post('/register', user.add)
router.route('/register')
  .post(user.add)
  .get(user.get)
  .put(user.update)
  .delete(user.deleteUser)

module.exports = router;

var router = require("express").Router();
var user = require('./controllers/user-controller');

//define routes for api's
router.post('/create', user.create);
router.get('/fetch/:id', user.fetch);
router.post('/update/:id', user.update);
router.get('/delete/:id', user.delete)


module.exports = router;
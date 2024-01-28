var express = require('express');
var router = express.Router();
const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');

router.post('/signup', (req, res) => {
    console.log(req.body.password)
    if (!checkBody(req.body, ["email", "password"])) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return;
    }
    User.findOne({ email: { $regex: new RegExp(req.body.email, 'i') } }).then(dbData => {
        if (dbData === null) {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            newUser.save().then(() => {
                res.json({ result: true })
            })
        } else {
            // City already exists in database
            res.json({ result: false, error: 'User already exists' });
        }
    });
});

router.post('/signin', (req, res) => {
    if (!checkBody(req.body, ["email", "password"])) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return;
    }
    User.findOne({ email: { $regex: new RegExp(req.body.email, 'i') }, password: req.body.password }).then(dbData => {
        if (dbData === null) {
            res.json({ result: false, error: 'User not found' })
        } else {

            res.json({ result: true });
        }
    });
});
module.exports = router;

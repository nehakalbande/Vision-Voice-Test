const jwt = require('jsonwebtoken');


exports.checkTokenMW = (req, res, next) => {

    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        req.token = bearerHeader.split(' ')[1];
        next();
    } else {
        res.sendStatus(403);
    }
};


exports.verifyToken = (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            return req.authData = authData;
        }
    })
};


exports.signToken = (req, res) => {
    jwt.sign({ userId: req.user._id }, 'secretkey', { expiresIn: '5 min' }, (err, token) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.json({ token });
        }
    });
}
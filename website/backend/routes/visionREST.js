const router = require("express").Router();
const Vision = require("../models/vision");

router.post('/visionpost', (req, res) => {
    Vision.findOne({ 'googleId': req.body.googleId }, (err, result) => {
        if (err)
            throw err;
        if (result)
            return res.send(result)
        else {
            const newResult = new Vision({
                googleId: req.body.googleId,
                question1: req.body.q1,
                question2: req.body.q2,
                question3: req.body.q3,
                question4: req.body.q4,
            })
            newResult.save(newResult).then(data => {
                res.send(data)
            })
        }

    })
})



router.post('/getres', async (req, res) => {
    const query = { googleId: req.body.googleId };
    const response = await Vision.findOne(query, {});
    console.log(response)
    if (response) {
        return res.send(response);
    } else {
        return res.status(500).send({ error: 'no matching result' });
    }
});


module.exports = router
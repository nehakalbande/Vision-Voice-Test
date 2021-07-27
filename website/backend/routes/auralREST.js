const router = require("express").Router();
const Aural = require("../models/aural");

router.post('/addres', (req, res) => {
    Aural.findOne({ 'googleId': req.body.googleId }, (err, result) => {
        if (err)
            throw err;
        if (result)
            return res.send(result)
        else {
            const newResult = new Aural({
                googleId: req.body.googleId,
                question1: req.body.q1,
                question2: req.body.q2,
                question3: req.body.q3,
                question4: req.body.q4,
            })
            newResult.save(newResult).then(data => {
                res.send(data)
            }).catch(err => {
                res.status(500).send({ error: "Server error" })
            })
        }

    })
})

// router.post('/getres', (req, res) => {
//     Aural.findOne({
//         'googleId': req.body.googleId,
//     },
//         (err, results) => {
//             console.log({ err, results })
//             if (err)
//                 return res.status(500, { error: 'no matching result' });
//             if (!results)
//                 return res.status(500, { error: 'no matching result' });
//             else {
//                 return res.send(results);
//             }
//         })
// })

router.post('/getres', async (req, res) => {
    const query = { googleId: req.body.googleId };
    const response = await Aural.findOne(query, {});
    console.log(response)
    if (response) {
        return res.send(response);
    } else {
        return res.status(500).send({ error: 'no matching result' });
    }
});

module.exports = router
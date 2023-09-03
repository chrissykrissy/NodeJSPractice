const express = require('express');
const router = express.Router();
const minnieful = require('../controller/minnieController');

router.post('/commission-request', async function(req, res) {
    console.log(`route/minnieRoute::/commission-request::req::`, req.body);
    const result = await minnieful.artCommissionRequest(req)
    .catch(err => {
        console.log(`route/minnieRoute::/commission-request::err::`, err);
        return res.send(err);
    });
    console.log(`route/minnieRoute::/commission-request::result::${result}::`, result);
    return res.send(result);
});

router.get('/getAllCommissions', async function(req, res) {
    const result = await minnieful.getAllCommissions()
    .catch(err => {
        console.log(`route/minnieRoute::/getAllCommissions::err::`, err);
        return res.send(err);
    });
    console.log(`route/minnieRoute::/getAllCommissions::result::${result}::`, result);
    return res.send(result);
});

router.get('/getSpecificCommission/:tag/:value', async function(req, res) {
    console.log(`route/minnieRoute::/getSpecificCommissions::req.params::`, req.params);
    const result = await minnieful.getSpecificCommission(req.params.tag, req.params.value)
    .catch(err => {
        console.log(`route/minnieRoute::/getSpecificCommissions::err::`, err);
        return res.send(err);
    });
    console.log(`route/minnieRoute::/getSpecificCommissions::result::${result}::`, result);
    return res.send(result);
});

router.get('/minnieful-test', async function(req, res) {
    return res.send({
        code:  200,
        message:  "I hope whoever bought this sound alert is making their life MINNIEFUL TODAAAAYYYYYyyyy....suffering...SUFFERIINNNNG!!!"
    });
});

router.get('/dontgetit', async function(req, res) {
    return res.send({
        code: 500,
        message: "She doesn't get it.  She REALLY doesn't get it.  'idunno, leab me alone' - Minnieful"
    });
});

module.exports = router;
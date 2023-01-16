const db = require('../database')

async function getConditions(req, res, next) {
    const resort = req.params.resort;
    console.log('getting conditions for resort: ' + resort + ' ...');
    const conditions = db.getConditions(resort);
    console.log('conditions aquired')
    res.json(conditions);
};

module.exports = {
    getConditions
};
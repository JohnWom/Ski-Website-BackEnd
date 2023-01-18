const db = require('../database')

async function getConditions(req, res, next) {
    const resort = req.params.resort;
    console.log('getting conditions for resort: ' + resort + ' ...');

    const ResortID = await connection.query(`SELECT ResortID id FROM Resorts WHERE ResortName = '${resort}'`, (err, rows) => {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log(rows);
        return rows;
    });
    
    const conditions =  await connection.query(`SELECT Date, LiftsOpen, LiftsTotal, TrailsOpen, TrailsTotal, TerrainOpen FROM Conditions WHERE ResortID = ${id}`, (err, rows, fields) => {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log(rows);
        return rows;
    });
    
    console.log('conditions aquired');

    res.json(conditions);
    console.log("Conditions sent");
};

module.exports = {
    getConditions
};
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ski',
    database: 'SKI_CONDITIONS',
    port: 3306
});

function writeCondition(information) {
    connection.query(
        `INSERT INTO Conditions (ResortID, LiftsOpen, LiftsTotal, TrailsOpen, TrailsTotal, TerrainOpen) VALUES (${information.ResortID}, ${information.LiftsOpen}, ${information.LiftsTotal}, ${information.TrailsOpen}, ${information.TrailsTotal}, ${information.TerrainOpen})`,
        function (err, result) {
            if (err){
                console.log(`Error for resort ID: ${information.ResortID}`)
                throw err;
            } 
            console.log(`Record Inserted for resort ID: ${information.ResortID}`)
            console.log(result)
        }
    );

};

module.exports = {writeCondition}
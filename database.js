
require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Function to write conditions used by the scraper
function writeCondition(information) {
    connection.query(
        `INSERT INTO Conditions (ResortID, LiftsOpen, LiftsTotal, TrailsOpen, TrailsTotal, TerrainOpen) VALUES (${information.ResortID}, ${information.LiftsOpen}, ${information.LiftsTotal}, ${information.TrailsOpen}, ${information.TrailsTotal}, ${information.TerrainOpen})`,
        function (err, result) {
            if (err){
                console.log(`Error for resort ID: ${information.ResortID}`);
                throw err;
            } 
            console.log(`Record Inserted for resort ID: ${information.ResortID}`);
            console.log(result);
        }
    );

};

function setValue(r) {
    let a = r
}

// Function to get Conditions for the API
function getConditions(resort) {
    let conditions;
    function setValue(value) {
        conditions = value;
    };

    connection.query(`SELECT ResortID id FROM Resorts WHERE ResortName = '${resort}'`, (err, rows, fields) => {
        id = rows[0].id;
        const conditions = connection.query(`SELECT Date, LiftsOpen, LiftsTotal, TrailsOpen, TrailsTotal, TerrainOpen FROM Conditions WHERE ResortID = ${id}`, (err, rows, fields) => {
            setValue(rows)
        });
    });
    console.log(conditions)
    return conditions;
};





module.exports = {
    writeCondition,
    getConditions
}
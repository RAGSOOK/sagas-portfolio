const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    // return all projects
    const queryText = `SELECT * FROM projects ORDER BY name ASC`;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`Error on project GET ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;
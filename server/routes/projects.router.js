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

router.post('/', (req, res) => {
    const newProject = req.body;
    const queryText = `INSERT INTO "projects" ("name", "description", "website", "github", 
                       "date_completed", "tag_id")
                       VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(queryText, [newProject.name, newProject.description,
                           newProject.wurl, newProject.gurl,
                           newProject.date, newProject.category] )
    .then((response) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req,res) => {
    const queryText = `DELETE FROM "projects" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id]).then((response) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;
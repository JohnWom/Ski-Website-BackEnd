const { next } = require("cheerio/lib/api/traversing");
const express = require("express"); //import express
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get('/api/conditions/:resort', UserController.getConditions(res, req, next))

module.exports = router;
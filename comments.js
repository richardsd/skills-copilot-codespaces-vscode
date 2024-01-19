// Create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

// GET /comments
// Get all comments
router.get('/', function(req, res, next) {
  Comment.find(function(err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

// POST /comments
// Create a new comment
router.post('/', function(req, res, next) {
  Comment.create(req.body, function(err, comment) {
    if (err) return next(err);
    res.json(comment);
  });
});
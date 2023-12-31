const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

//App Routes

router.get('/', recipeController.HomePage);
router.get('/categories', recipeController.exploreCategories);


module.exports = router;
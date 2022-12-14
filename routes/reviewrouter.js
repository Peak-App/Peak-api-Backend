const express = require('express')
const router = express.Router()
const reviewController = require('../controllers/reviewControllers')

router.get('/companies/:id/reviews/', reviewController.getAllReviews)//get company review
router.post('/reviews', reviewController.postAReview) //create a single company review
module.exports = router

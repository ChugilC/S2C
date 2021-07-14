const express = require('express');
const router = express.Router();
const {
    getColleges,
    getCollege,
    createCollege,
    updateCollege,
    deleteCollege
} = require('../controllers/colleges')

// Multiple routing
router.route('/')
    .get(getColleges)
    .post(createCollege)

router.route('/:id')
    .get(getCollege)
    .put(updateCollege)
    .delete(deleteCollege)


module.exports = router;
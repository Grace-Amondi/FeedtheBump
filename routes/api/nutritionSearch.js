const router = require('express').Router();
const nutritionSearchController = require('../../controllers/nutritionSearchController');

// Matches with "/api/nutritionix"
router
  .route('/')
  .get(nutritionSearchController.search)
  // .post(nutritionSearchController.create);

router.route("/userSearch")

module.exports = router;

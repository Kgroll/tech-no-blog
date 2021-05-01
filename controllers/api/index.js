const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;

// const router = require('express').Router();

// const userRoutes = require('./user-routes.js');
// const postRoutes = require('./story-routes');
// const commentRoutes = require('./comment-routes');
// const budgetRoutes = require('./budget-routes');
// //const financeRoutes = require('./finance-routes');

// router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);
// router.use('/budgets', budgetRoutes);
// //router.use('/finances', financeRoutes);

// module.exports = router;
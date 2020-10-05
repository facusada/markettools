const { Router } = require('express');
// import all routers;
const clientsRouter = require('./Client.js');
const ordersRouter = require('./Order.js');
const toolsRouter = require('./Tools.js');
const categoryRouter = require('./Category.js');


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/clients', clientsRouter);
router.use('/orders', ordersRouter);
router.use('/tools', toolsRouter);
router.use('/category', categoryRouter);

module.exports = router;
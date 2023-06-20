import express from 'express';

const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource and again e é');
});

export default router;

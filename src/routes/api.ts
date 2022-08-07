import express from 'express';
const router = express.Router();

import apiController from '../controllers/apiController';

router.get('/teste', apiController.findAll);

export default router;

import express from 'express';
const router = express.Router();

import apiController from '../controllers/routineController';

router.get('/', apiController.findAll);
router.get('/:id', apiController.findOne);
router.post('/', apiController.create);

export default router;

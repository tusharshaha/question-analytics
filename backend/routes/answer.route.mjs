import express from 'express';
import {
  getAgeAnalytics,
  getLocationAnalytics,
  getSinghaBeerAnalytics
} from '../controllers/answer.controller.mjs';

const router = express.Router();

router.get('/age', getAgeAnalytics);
router.get('/location', getLocationAnalytics);
router.get('/singhaBeer', getSinghaBeerAnalytics);

export default router;

import express from 'express';
import {
  createChallenge,
  getAllChallenges,
  getChallengeById,
  updateChallenge,
  deleteChallenge,
} from '../controllers/realWorldChallenges.controller.js';

const router = express.Router();

router.post('/', createChallenge);
router.get('/', getAllChallenges);
router.get('/:id', getChallengeById);
router.put('/:id', updateChallenge);
router.delete('/:id', deleteChallenge);

export default router;

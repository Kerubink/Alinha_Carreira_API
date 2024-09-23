import Challenge from '../models/challenges.models.js';

export const getChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.findAll();
    res.json(challenges);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching challenges', error });
  }
};

export const getChallengeById = async (req, res) => {
  try {
    const challenge = await Challenge.findByPk(req.params.id);
    if (challenge) {
      res.json(challenge);
    } else {
      res.status(404).json({ message: 'Challenge not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching challenge', error });
  }
};

export const createChallenge = async (req, res) => {
  try {
    const newChallenge = await Challenge.create({
      title: req.body.title,
      description: req.body.description,
      difficulty: req.body.difficulty,
      solution: req.body.solution,
      points: req.body.points,
    });
    res.status(201).json(newChallenge);
  } catch (error) {
    res.status(500).json({ message: 'Error creating challenge', error });
  }
};

export const updateChallenge = async (req, res) => {
  try {
    const challenge = await Challenge.findByPk(req.params.id);
    if (challenge) {
      challenge.title = req.body.title;
      challenge.description = req.body.description;
      challenge.difficulty = req.body.difficulty;
      challenge.solution = req.body.solution;
      challenge.points = req.body.points;
      await challenge.save();
      res.json(challenge);
    } else {
      res.status(404).json({ message: 'Challenge not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating challenge', error });
  }
};

export const deleteChallenge = async (req, res) => {
  try {
    const challenge = await Challenge.findByPk(req.params.id);
    if (challenge) {
      await challenge.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Challenge not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting challenge', error });
  }
};

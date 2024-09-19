import RealWorldChallenge from '../models/realWorldChallenges.models.js';

export const createChallenge = async (req, res) => {
  try {
    const challenge = await RealWorldChallenge.create(req.body);
    res.status(201).json(challenge);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar desafio', error });
  }
};

export const getAllChallenges = async (req, res) => {
  try {
    const challenges = await RealWorldChallenge.findAll();
    res.status(200).json(challenges);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter desafios', error });
  }
};

export const getChallengeById = async (req, res) => {
  try {
    const challenge = await RealWorldChallenge.findByPk(req.params.id);
    if (challenge) {
      res.status(200).json(challenge);
    } else {
      res.status(404).json({ message: 'Desafio não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter o desafio', error });
  }
};

export const updateChallenge = async (req, res) => {
  try {
    const updated = await RealWorldChallenge.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: 'Desafio atualizado com sucesso' });
    } else {
      res.status(404).json({ message: 'Desafio não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar o desafio', error });
  }
};

export const deleteChallenge = async (req, res) => {
  try {
    const deleted = await RealWorldChallenge.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(200).json({ message: 'Desafio deletado com sucesso' });
    } else {
      res.status(404).json({ message: 'Desafio não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar o desafio', error });
  }
};

import Comment from '../models/comment.models.js';

export const createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar comentário', error });
  }
};

export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter comentários', error });
  }
};

export const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (comment) {
      res.status(200).json(comment);
    } else {
      res.status(404).json({ message: 'Comentário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter o comentário', error });
  }
};

export const updateComment = async (req, res) => {
  try {
    const updated = await Comment.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: 'Comentário atualizado com sucesso' });
    } else {
      res.status(404).json({ message: 'Comentário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar o comentário', error });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const deleted = await Comment.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(200).json({ message: 'Comentário deletado com sucesso' });
    } else {
      res.status(404).json({ message: 'Comentário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar o comentário', error });
  }
};

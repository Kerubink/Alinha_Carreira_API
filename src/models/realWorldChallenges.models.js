import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

const RealWorldChallenge = sequelize.define('RealWorldChallenge', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  difficulty: {
    type: DataTypes.ENUM('easy', 'medium', 'hard'),
    allowNull: false,
  },
  estimatedTime: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  technologies: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('solo', 'squad'),
    allowNull: false,
  },
  resources: {
    type: DataTypes.JSON, 
    allowNull: true,
  },
  solution: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: '',
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default RealWorldChallenge;

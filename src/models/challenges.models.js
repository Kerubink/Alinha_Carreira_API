import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';  

const Challenge = sequelize.define('Challenge', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
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
  solution: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  points: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'challenges', 
  timestamps: true,
});

export default Challenge;

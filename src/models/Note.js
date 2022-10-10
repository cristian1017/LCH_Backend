import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Note = sequelize.define('note', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  note: {
    type: DataTypes.STRING
  }
}, {
  timestamps: true
});
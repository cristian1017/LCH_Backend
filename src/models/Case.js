import { DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js';
import { Note } from './Note.js'

export const Case = sequelize.define('case',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  case: {
    type: DataTypes.STRING
  }
}, {
  timestamps: true
});

Case.hasMany(Note, {
  foreingKey: 'caseId',
  sourceKey: 'id'
})

Note.belongsTo(Case, {
  foreingKey: 'caseId',
  targetId: 'id'
})
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Budget extends Model { }

Budget.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    budget_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    incomeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    incomeAmount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expenseName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expenseAmount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_budget: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    current_balance: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'budget'
  }
);

module.exports = Budget;
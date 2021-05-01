const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contents: {
      type: DataTypes.STRING,
<<<<<<< HEAD
      allowNull: false,
      validate: {
        len: [1]
      }
=======
      allowNull: false    
>>>>>>> fa9160cc4f7f1b52dee850e6161eff035ea8b3b9
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
    modelName: 'post'
  }
);

module.exports = Post;
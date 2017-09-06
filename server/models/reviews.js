export default (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
      required: true,
       allowNull: false
    },
    recipeId: {
      type: DataTypes.INTEGER,
      required: true,
       allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      required: true,
       allowNull: false
    },
  }); 

    Review.associate = (models) => {
      // associations can be defined here

      Review.belongsTo(models.Recipe, {
        foreignKey: {
          name: 'recipeId',
          key: 'id'
        },
      });
       
  };
  return Review;
};

module.exports = (sequelize, DataTypes) => {
  const MyRecipes = sequelize.define('MyRecipes', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
    },
    content: DataTypes.STRING
   },
   
MyRecipes.associate = (models) => {
    MyRecipes.belongsTo(models.Signup, {
      foreignKey: 'signupId',
      onDelete: 'CASCADE',
    });
  
  return MyRecipes;
})};
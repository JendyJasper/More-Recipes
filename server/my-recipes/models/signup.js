module.exports = (sequelize, DataTypes) => {
  const Signup = sequelize.define('Signup', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: DataTypes.STRING
  },
  );
  Signup.associate = (models) => {
    Todo.hasMany(models.MyRecipes, {
      foreignKey: 'signupId',
      as: 'myrecipes',
    });
  };

  return Todo;
};
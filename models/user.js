module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = function(db) {
    db.User.hasMany(db.User, {
      as: "friends",
      foreignKey: {
        allowNull: true
      }
    });
  };
  //create something to tell who sent a message---keeps track of who sent messages
};

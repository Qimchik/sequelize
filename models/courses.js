'use strict';
module.exports = (sequelize, DataTypes) => {
  var Courses = sequelize.define('Courses', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: DataTypes.STRING,
    time: DataTypes.STRING,
    descrition: DataTypes.STRING,
    date: DataTypes.STRING,
  });

  return Courses;
};

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const User = sequelize.define('user', {
    name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    lastname: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: {
          args: true,
          message: "Email must be unique.",
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

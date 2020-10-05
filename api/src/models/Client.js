const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Client = sequelize.define('client', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
    	type: DataTypes.TEXT,
      allowNull: false,
      unique: {
        args: true,
        message: "Email must be unique.",
    },
  },
    phoneA: {
    	type: DataTypes.INTEGER,
    	allowNull: false,
    },
    phoneB: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    city: {
    	type: DataTypes.STRING,
    	allowNull: false,
    },
    adress:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    bussiness: {
    	type: DataTypes.STRING,
    	allowNull: false,
    },
  });
};

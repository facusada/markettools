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
    password: {
      type: DataTypes.STRING
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
    	type: DataTypes.STRING,
    },
    phoneB: {
      type: DataTypes.STRING,
    },
    city: {
    	type: DataTypes.STRING,
    },
    address:{
      type: DataTypes.STRING,
    },
    bussiness: {
    	type: DataTypes.STRING,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
};

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Tools = sequelize.define('tools', {
    name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = function (sequelize, DataTypes) {
    let alias = "Genero"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false,
            notNull : true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }
    let config = {
        tableName: "generos",
        timestamps: false,
        underscored: false
    }
    let Genero = sequelize.define(alias, cols, config);

    Genero.associate = function (models){
    Genero.hasMany(models.Cancion, {
        as: "canciones",
        foreingKey: "genero_id"
    })}; 
    return Genero
}
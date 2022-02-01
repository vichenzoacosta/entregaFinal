module.exports = function (sequelize, DataTypes) {
    let alias = "Album"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duracion: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        
    }
    let config = {
        tableName: "albumes",
        timestamps: false,
        underscored: false
    }
    let Album = sequelize.define(alias, cols, config);

    Album.associate = function (models) {
     Album.hasMany(models.Cancion, {
        
        })}; 
        return Album
       
}
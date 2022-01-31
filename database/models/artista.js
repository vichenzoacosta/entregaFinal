module.exports = function (sequelize, DataTypes) {
    let alias = "Artista"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }
    let config = {
        tableName: "artistas",
        timestamps: false,
        underscored: false
    }
    let Artista = sequelize.define(alias, cols, config);

   // Artista.associate = function (models){
   // Artista.hasMany(models.Cancion, {
       //  as: "canciones",
    ///     foreingKey: "artista_id"
 //  })
 return Artista
}
 
    

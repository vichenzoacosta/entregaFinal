module.exports = function (sequelize, DataTypes) {
    let alias = "Cancion"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false,
            
            notNull: true
        },
        titulo: {
            type: DataTypes.STRING,
            
        },
        duracion: {
            type: DataTypes.INTEGER,
            
        },
        genero_Id: {
            type: DataTypes.INTEGER,
            
        },
        album_Id: {
            type: DataTypes.INTEGER,
           
        },
        artista_Id: {
            type: DataTypes.INTEGER,
            
        }

    }
    let config = {
        tableName: "canciones",
        timestamps: false
    }

    let Cancion = sequelize.define(alias, cols, config);


    Cancion.associate = function (models) {
        
         Cancion.belongsTo(models.Album, {
                as: "albumes",
                foreingKey: "album_id"
            }); 
        Cancion.belongsTo(models.Artista, {
                as: "artistas",
                foreingKey: "artista_id"
            }); 
      
       Cancion.belongsTo(models.Genero, {
                    as: "genero",
                    foreingKey: "genero_id"
                })}; 


    return Cancion
 }
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
        genero_id: {
            type: DataTypes.INTEGER,
            
        },
        album_id: {
            type: DataTypes.INTEGER,
           
        },
        artista_id: {
            type: DataTypes.INTEGER,
            
        }

    }
    let config = {
        tableName: "canciones",
        timestamps: false,
        underscored: true
        
    }

    let Cancion = sequelize.define(alias, cols, config);
  console.log(Cancion, 'hola soy la cancion')

    Cancion.associate = function (models) {
        
         Cancion.belongsTo(models.Album, {
                as: "albumes",
                foreingKey: "album_id",
                underscored: true
            }),
        Cancion.belongsTo(models.Artista, {
                as: "artistas",
                foreingKey: "artista_id",
                unerscored: true
            }),
      
        Cancion.belongsTo(models.Genero, {
                    as: "genero",
                    foreingKey: "genero_id",
                    underscored: true
                })
            }; 


    return Cancion
 }
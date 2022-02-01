module.exports = function (sequelize, DataTypes) {
    let alias = "Cancion"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.STRING,
            
        },
        duracion: {
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
        
         Cancion.belongsTo(models.Album, 
                
            ),
        Cancion.belongsTo(models.Artista),
      
        Cancion.belongsTo(models.Genero, 
                   
                    
                )
            
            }
    return Cancion
}
 
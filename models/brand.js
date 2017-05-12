'use strict';

//Exports the brand model to the pages that need the tables.
module.exports = function(sequelize, DataTypes){
	//For the Brands table.
	var Brand = sequelize.define("Brand",{
		brand_name: {
			type: DataTypes.STRING,
			allowNull: false
		
		},
		//Is this brand active? Default is true.
		active: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		company_logo: {
			type: DataTypes.STRING
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}   
	},
		{
      		classMethods: {
        		associate: function(models) {
               		Brand.belongsToMany(models.User, {
               			as: "adSource",
               			through: "brand_influencers",
						foreignKey:  {
							allowNull: false
						}
					});
				}
        	}
      	}
  	);
	return Brand;
};
//Exports the brand model to the pages that need the tables.
module.exports = function(sequelize, DataTypes){
	//For the Brands table.
	var Brand = sequelize.define("Brand",{
		brand_name: {
			type: DataTypes.STRING,
			validate: {
				len: [1]
			}
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
			allowNull: false,
		},
		loggedIn: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
	},
		{
      		classMethods: {
        		associate: function(models) {
               		Brand.belongsToMany(models.User, {
               			through: "brand_influencers",
						foreignKey: "brandId"
					});
				}
        	}
      	}
  	);
	return Brand;
};
//Sends the Users table where it needs to go.
module.exports = function(sequelize, DataTypes){
	var Influencer = sequelize.define("Influencer",{
		display_name: {
			type: DataTypes.STRING,
			validate: {
				len: [1]
			}
		},
		//If the User is active or not. Default is true.
		active_influencer: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
		followers: {
			type: DataTypes.BIGINT,
			allowNull: false	
		},
		views: {
			type: DataTypes.BIGINT,
			allowNull: false	
		},
		twitch_id: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		twitch_url: {
			type: DataTypes.STRING	
		},
		influencer_logo: {
			type: DataTypes.STRING,
			allowNull: true
		},
		game: {
			type: DataTypes.STRING	
		},
		language: {
			type: DataTypes.STRING
		},
	});
	return Influencer;
}
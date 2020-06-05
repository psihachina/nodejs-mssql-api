module.exports = function() {
  return {
		poolConfig: {
			min: 0,
			max: 20,
			log: false,
			idleTimeout: 30000
		},
		connectionConfig:{
			userName: 'psihachina',
			password: 'psih2210!',
			server: 'rpg-shema-api.database.windows.net', 
			options: {
				database: 'rpg_schema', 
				useColumnNames: true,
				encrypt: true
			}  
		}
  };
}
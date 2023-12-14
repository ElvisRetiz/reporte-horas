const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');

let config = JSON.parse(fs.readFileSync(path.join(__dirname, '../config.json'), 'utf8'));

const sequelize = new Sequelize(config.db_name, config.db_user, config.db_password, {
    host: config.db_host,
    dialect: 'mssql',
    dialectOptions: {
        options: {
            instanceName: config.db_instance
        }
    }
});

module.exports = sequelize;

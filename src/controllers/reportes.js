const fs = require('fs');
const path = require('path');
const sequelize = require('../config/db');
const dayjs = require('dayjs');

const controller = {
    getHoursByProductionLine: async (req, res) => {
        try {
            const { fechaInicio, fechaFin } = req.query;
            const result = await sequelize.query(`EXEC Kit_ReporteHoras2 '${dayjs(fechaInicio).format('YYYYMMDD')}', '${dayjs(fechaFin).format('YYYYMMDD')}'`, { type: sequelize.QueryTypes.SELECT });
            res.status(200).json({
                type: 'success',
                data: result
            });
        } catch (error) {
            console.log(error);
            fs.appendFileSync(path.join(__dirname, '../../logs/error.log'), `${dayjs().format('DD/MM/YYYY hh:mm:ss a')} - ${__filename} - ${error}\n`);
            res.status(500).json({
                type: 'error',
                message: error.message
            });
        }
    },

    test: async (req, res) => {
        try {
            const result = await sequelize.query("Select * from Test", { type: sequelize.QueryTypes.SELECT });
            console.log(result);

            res.status(200).json({
                type: 'success',
                data: result
            });
        }
        catch (error) {
            console.log(error);
        }
    }
};

module.exports = controller;


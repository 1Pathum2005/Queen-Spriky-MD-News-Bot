const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'RnkmCIiK#CMcNc4XjbmWe3yQLuby9CYzLHhpBRPCs_3OROA1ah3M', // Enter Your Session ID
    MONGODB: process.env.MONGODB || '',    // Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94756106661',    // Enter Your Owner Number
    BotNumber: process.env.BotNumber || '94756106661'    // Enter Your Bot Number
};

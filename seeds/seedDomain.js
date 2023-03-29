const { Domain } = require("../models");
const fs = require("fs");

const seedDomains = async () => {
    fs.readFile("./seeds/domains.csv", 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    
        const dataArray = data.split('\r\n');
        seeding(dataArray);
    })
    
}

const seeding = async (array) => {
    for(let i = 1; i < array.length; i++) {
        await Domain.create({name: array[i]});
    }
}

module.exports = seedDomains;
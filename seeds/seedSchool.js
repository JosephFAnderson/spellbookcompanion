const { School } = require("../models");
const fs = require("fs");

const seedSchools = async () => {
    fs.readFile("./seeds/schools.csv", 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    
        const dataArray = data.split('\n');
        seeding(dataArray);
    })
    
}

const seeding = async (array) => {
    for(let i = 1; i < array.length; i++) {
        await School.create({name: array[i]});
    }
}

module.exports = seedSchools;
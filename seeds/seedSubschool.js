const { Subschool } = require("../models");
const fs = require("fs");

const seedSubschools = async () => {
    fs.readFile("./seeds/subschools.csv", 'utf8', (err, data) => {
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
        await Subschool.create({name: array[i]});
    }
}

module.exports = seedSubschools;
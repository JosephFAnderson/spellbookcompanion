const { Class } = require("../models");
const fs = require("fs");

const seedClasses = async () => {
    fs.readFile("./seeds/classes.csv", 'utf8', (err, data) => {
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
        await Class.create({name: array[i]});
    }
}

module.exports = seedClasses;
const { Descriptor } = require("../models");
const fs = require("fs");

const seedDescriptors = async () => {
    fs.readFile("./seeds/descriptors.csv", 'utf8', (err, data) => {
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
        await Descriptor.create({name: array[i]});
    }
}

module.exports = seedDescriptors;
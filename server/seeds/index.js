const seedClasses = require('./seedClass');
const seedDomains = require('./seedDomain');
const seedSchools = require('./seedSchool');
const seedSubschools = require('./seedSubschool');
const seedDescriptors = require('./seedDescriptor');
const sequelize = require('../config/connection');

const createSeeds = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----');
    await seedClasses();
    console.log('\n----- CLASSES SEEDED -----')
    await seedDomains();
    console.log('\n----- DOMAINS SEEDED -----')
    await seedSchools();
    console.log('\n----- SCHOOLS SEEDED -----')
    await seedSubschools();
    console.log('\n----- SUBSCHOOLS SEEDED -----')
    await seedDescriptors();
    console.log('\n----- DESCRIPTORS SEEDED -----')
}


createSeeds();
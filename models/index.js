const User = require("./User");
const Character = require("./Character");
const Class = require("./Class");
const Spell = require("./Spell");
const Domain = require("./Domain");
const School = require("./School");
const Subschool = require("./Subschool");
const Descriptor = require("./Descriptor");
const CharacterSpell = require("./CharacterSpell");
const ClassSpell = require("./ClassSpell");
const SpellSchool = require("./SpellSchool");
const SpellSubschool = require("./SpellSubschool");
const SpellDescriptor = require("./SpellDescriptor");
const DomainSpell = require("./DomainSpell");

//Table Associations Will Be Definied Here
User.hasMany(Character, { foreignKey: "user_id" });
Character.belongsTo(User, { foreignKey: "user_id" });

Class.hasMany(Character, { foreignKey: "class_id" });
Character.belongsTo(Class, { foreignKey: "class_id" });

Character.belongsToMany(Spell, { through: CharacterSpell, foreignKey: "character_id" });
Spell.belongsToMany(Character, { through: CharacterSpell, foreignKey: "spell_id" });

Class.belongsToMany(Spell, { through: ClassSpell, foreignKey: "class_id" });
Spell.belongsToMany(Class, { through: ClassSpell, foreignKey: "spell_id" });

Domain.belongsToMany(Spell, { through: DomainSpell, foreignKey: "domain_id" });
Spell.belongsToMany(Domain, { through: DomainSpell, foreignKey: "spell_id" });

Descriptor.belongsToMany(Spell, { through: SpellDescriptor, foreignKey: "descriptor_id" });
Spell.belongsToMany(Descriptor, { through: SpellDescriptor, foreignKey: "spell_id" });

School.belongsToMany(Spell, { through: SpellSchool, foreignKey: "school_id" });
Spell.belongsToMany(School, { through: SpellSchool, foreignKey: "spell_id" });

Subschool.belongsToMany(Spell, { through: SpellSubschool, foreignKey: "subschool_id" });
Spell.belongsToMany(Subschool, { through: SpellSubschool, foreignKey: "spell_id" });

module.exports = {
    User,
    Character,
    Class,
    Spell,
    Domain,
    School,
    Subschool,
    Descriptor,
    CharacterSpell,
    ClassSpell,
    SpellSchool,
    SpellSubschool,
    SpellDescriptor,
    DomainSpell
}
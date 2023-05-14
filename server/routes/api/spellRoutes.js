const router = require('express').Router();
const { Op } = require('sequelize');
const { Spell, Class, Domain, School, Subschool, Descriptor } = require('../../models');

/* Routes to get all spells
 * When used with no query parameters will grab all spells from database
 * Allowed query params:
 * - name
 * - className
 * - domain
 * - school
 * - descriptor
*/
router.get('/', async (req, res) => {
    try{
        const filter = req.query;
        const { name, className, domain, school, descriptor } = filter;

        /* Gets all spells when no filters are applied
         *
         * Could use a switch case for each possible combination of query params
         * Not very efficent
         * 
        */
        if(Object.keys(filter).length === 0){
            const spells = await Spell.findAll({
                include: [{
                    model: Class,
                    attributes: {
                        exclude: "id"
                    },
                    through: {
                        attributes: ["level"]
                    }
                }, {
                    model: Domain,
                    attributes: {
                        exclude: "id"
                    },
                    through: {
                        attributes: ["level"]
                    }
                }, {
                    model: School,
                    attributes: {
                        exclude: "id"
                    },
                    through: {
                        attributes: []
                    }
                }, {
                    model: Subschool,
                    attributes: {
                        exclude: "id"
                    },
                    through: {
                        attributes: []
                    }
                }, {
                    model: Descriptor,
                    attributes: {
                        exclude: "id"
                    },
                    through: {
                        attributes: []
                    }
                }]
                });
            res.status(200).json(spells);
            return;
        } else if ( descriptor != undefined ) {
            const spells = await Descriptor.findAll({
                where: {
                    name: descriptor
                },
                include: {
                    model: Spell,
                    include: [{
                        model: Class,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: ["level"]
                        }
                    }, {
                        model: Domain,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: ["level"]
                        }
                    }, {
                        model: School,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: []
                        }
                    }, {
                        model: Subschool,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: []
                        }
                    }, {
                        model: Descriptor,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: []
                        }
                    }]
                }
            })

            res.status(200).json(spells);

        } else if ( name != undefined ) {
            const spell = await Spell.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                },
                include: [{
                    model: Class,
                    attributes: {
                        exclude: "id"
                    },
                    through: {
                        attributes: ["level"]
                    }
                }, {
                    model: Domain,
                    attributes: {
                        exclude: "id"
                    },
                    through: {
                        attributes: ["level"]
                    }
                }, {
                    model: School,
                    attributes: {
                        exclude: "id"
                    },
                    through: {
                        attributes: []
                    }
                }, {
                    model: Subschool,
                    attributes: {
                        exclude: "id"
                    },
                    through: {
                        attributes: []
                    }
                }, {
                    model: Descriptor,
                    attributes: {
                        exclude: "id"
                    },
                    through: {
                        attributes: []
                    }
                }]
            })
            res.status(200).json(spell);
        } else if ( className != undefined ) {
            const spells = await Class.findAll({
                where: {
                    name: className
                },
                include: {
                    model: Spell,
                    include: [{
                        model: Class,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: ["level"]
                        }
                    }, {
                        model: Domain,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: ["level"]
                        }
                    }, {
                        model: School,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: []
                        }
                    }, {
                        model: Subschool,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: []
                        }
                    }, {
                        model: Descriptor,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: []
                        }
                    }]
                }
            })

            res.status(200).json(spells);
        } else if ( domain != undefined ) {
            const spells = await Domain.findAll({
                where: {
                    name: domain
                },
                include: {
                    model: Spell,
                    include: [{
                        model: Class,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: ["level"]
                        }
                    }, {
                        model: Domain,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: ["level"]
                        }
                    }, {
                        model: School,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: []
                        }
                    }, {
                        model: Subschool,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: []
                        }
                    }, {
                        model: Descriptor,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: []
                        }
                    }]
                }
            })

            res.status(200).json(spells);
        } else if ( school != undefined ) {
            const spells = await School.findAll({
                where: {
                    name: school
                },
                include: {
                    model: Spell,
                    include: [{
                        model: Class,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: ["level"]
                        }
                    }, {
                        model: Domain,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: ["level"]
                        }
                    }, {
                        model: School,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: []
                        }
                    }, {
                        model: Subschool,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: []
                        }
                    }, {
                        model: Descriptor,
                        attributes: {
                            exclude: "id"
                        },
                        through: {
                            attributes: []
                        }
                    }]
                }
            })

            res.status(200).json(spells);
        } else {
            res.status(200).json("Something else");
        }

        
    }catch (err) {
        res.status(500).json("Error");
    }
});

module.exports = router;
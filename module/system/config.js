export const System = {};

System.label = "Rolemaster Classic 5";
System.name = "rmc5";
System.rootPath = "/systems/" + System.name;
System.dataPath = System.rootPath + "/data";
System.templatesPath = System.rootPath + "/templates";
System.debugMode = true;

export const RM = {};

RM.newSpell = {
    "name" : "RM.spell.newSpell",
    "level": 0,
    "description": "",
    "aoe" : "",
    "duration" : "",
    "range" : "",
    "type" : ""
};

RM.newSkill = {
    "name" : "RM.skill.newSkill",
    "cost1": null,
    "cost2": null,
    "star" : false,
    "rank": 0,
    "rankBonus": -25,
    "statBonus": 0,
    "levelBonus": 0,
    "item": 0,
    "special1": 0,
    "special2": 0,
    "misc": 0,
    "total": 0
};
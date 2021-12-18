// Import Modules
import {RMActorSheet} from "./actor/actor-sheet.js";
import {RMItemSheet} from "./item/item-sheet.js";
import {RMActor} from "./actor/actor.js";
import {RMItem} from "./item/item.js";
import {registerSystemSettings} from "./system/settings.js";
import {preloadHandlebarsTemplates} from "./system/templates.js";
import {registerHandlebarsHelpers} from "./system/helpers.js";
import registerHooks from "./system/hooks.js";
import {RM} from "./system/config.js";
import {TABLES} from "./tables/weapons/tables.js";

Hooks.once('init', async function () {

    game.rmc5 = {
        config:RM,
        tables:TABLES
    };

    /**
     * Set an initiative formula for the system
     * @type {String}
     */
    // formula: "2d10+@attributes.mind.value+@aptitudes.init.value",
    CONFIG.Combat.initiative = {
        formula: "2d10",
        decimals: 0
    };

    // Define custom Entity classes
    CONFIG.Actor.documentClass = RMActor;
    CONFIG.Item.documentClass = RMItem;
    // Register sheet application classes
    Actors.unregisterSheet("core", ActorSheet);
    Items.unregisterSheet("core", ItemSheet);
    Actors.registerSheet("rmc5", RMActorSheet, {makeDefault: true});
    Items.registerSheet("rmc5", RMItemSheet, {makeDefault: true});
    // Register System Settings
    registerSystemSettings();
    await preloadHandlebarsTemplates();
    registerHandlebarsHelpers();
    registerHooks();
});


/**
 * Ready hook loads tables, and override's foundry's entity link functions to provide extension to pseudo entities
 */

Hooks.once("ready", async () => {
    console.debug("Importing data");
    console.info("System Initialized.");
});

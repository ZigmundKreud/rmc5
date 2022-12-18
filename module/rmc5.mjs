// Import Modules
import {RMActorSheet} from "./actor/actor-sheet.mjs";
import {RMItemSheet} from "./item/item-sheet.mjs";
import {RMActor} from "./actor/actor.mjs";
import {RMItem} from "./item/item.mjs";
import {registerSystemSettings} from "./system/settings.mjs";
import {preloadHandlebarsTemplates} from "./system/templates.mjs";
import {registerHandlebarsHelpers} from "./system/helpers.mjs";
import registerHooks from "./system/hooks.mjs";
import {RM} from "./system/config.mjs";
import {Tables} from "./tables/weapons/tables.mjs";

Hooks.once('init', async function () {

    game.rmc5 = {
        config:RM,
        tables:Tables
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
    // console.debug("Importing data");
    // console.info("System Initialized.");
});

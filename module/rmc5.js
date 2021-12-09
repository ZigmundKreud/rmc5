// Import Modules
Hooks.once('init', async function () {

    // Define custom Entity classes
    CONFIG.Actor.documentClass = BoLActor;
    CONFIG.Item.documentClass = BoLItem;

    // Register sheet application classes
    Actors.unregisterSheet("core", ActorSheet);
    Items.unregisterSheet("core", ItemSheet);
    Actors.registerSheet("rmc5", RMActorSheet, {makeDefault: true});
    Items.registerSheet("rmc5", RMItemSheet, {makeDefault: true});

    // Register System Settings
    registerSystemSettings();

    // Preload Handlebars Templates
    await preloadHandlebarsTemplates();

    // Register Handlebars helpers
    registerHandlebarsHelpers();

    // Register hooks
    registerHooks();

    // // If you need to add Handlebars helpers, here are a few useful examples:
    // Handlebars.registerHelper('concat', function() {
    //   var outStr = '';
    //   for (var arg in arguments) {
    //     if (typeof arguments[arg] != 'object') {
    //       outStr += arguments[arg];
    //     }
    //   }
    //   return outStr;
    // });
    //
    // Handlebars.registerHelper('toLowerCase', function(str) {
    //   return str.toLowerCase();
    // });
});


/**
 * Ready hook loads tables, and override's foundry's entity link functions to provide extension to pseudo entities
 */

Hooks.once("ready", async () => {
    console.debug("Importing data");
    console.info("System Initialized.");
});

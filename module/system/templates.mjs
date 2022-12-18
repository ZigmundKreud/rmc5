/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {

    // Define template paths to load
    const templatePaths = [
        // ACTOR
        "systems/rmc5/templates/actors/actor-sheet.hbs",
        "systems/rmc5/templates/actors/parts/actor-skills-partial.hbs",
        "systems/rmc5/templates/actors/parts/actor-stats-partial.hbs",

        // DIALOGS
        "systems/rmc5/templates/dialogs/statsgen-dialog.hbs",
        "systems/rmc5/templates/dialogs/skillroll-dialog.hbs",

        // ITEM
        "systems/rmc5/templates/items/item-sheet.hbs",
        "systems/rmc5/templates/items/parts/skill-partial.hbs"
    ];

    // Load the template parts
    return loadTemplates(templatePaths);
};

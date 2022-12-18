export class StatsGenDialog extends Dialog {
    constructor(skillRoll, html, options) {
        super(conf, options);
    }
    activateListeners(html) {
        super.activateListeners(html);
        html.find(".bonus-item").click(this._onToggleCheckSkillBonus.bind(this));
        html.find(".bonus-item").contextmenu(this._onContextBonusItem.bind(this));
        // html.find(".bonus-item").mouseover(this._onHoverBonusItem.bind(this));
    }

    static async create(skillRoll, dialogTemplateData) {
        let options = { classes: ["rmc5", "dialog", "stats-gen"], height: "fit-content", "z-index": 99999 };
        let html = await renderTemplate("systems/rmc5/templates/dialogs/statsgen-dialog.hbs", dialogTemplateData);

        return new CoSkillRollDialog(skillRoll, html, options);
    }

}
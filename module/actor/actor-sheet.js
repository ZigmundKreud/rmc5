/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class RMActorSheet extends ActorSheet {

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["rmc5", "sheet", "actor"],
      template: "systems/rmc5/templates/actor/actor-sheet.hbs",
      width: 600,
      height: 600,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "stats" }]
    });
  }

  /* -------------------------------------------- */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);
    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;

    // // Add Inventory Item
    // html.find('.item-create').click(this._onItemCreate.bind(this));
    //
    // // Update Inventory Item
    // html.find('.item-edit').click(ev => {
    //   const li = $(ev.currentTarget).parents(".item");
    //   const item = this.actor.items.get(li.data("itemId"));
    //   item.sheet.render(true);
    // });
    // html.find('.roll-attribute').click(ev => {
    //   this.actor.rollAttributeAptitude( $(ev.currentTarget).data("attr-key") );
    // });
    // html.find('.roll-career').click(ev => {
    //   const li = $(ev.currentTarget).parents(".item");
    //   this.actor.rollCareer( li.data("itemId") );
    // });
    // html.find('.roll-weapon').click(ev => {
    //   const li = $(ev.currentTarget).parents(".item");
    //   this.actor.rollWeapon( li.data("itemId") );
    // });
    //
    // // Equip/Unequip item
    // html.find('.item-equip').click(this._onToggleEquip.bind(this));
    //
    // // Delete Inventory Item
    // html.find('.item-delete').click(ev => {
    //   const li = $(ev.currentTarget).parents(".item");
    //   this.actor.deleteEmbeddedDocuments("Item", [li.data("itemId")])
    //   li.slideUp(200, () => this.render(false));
    // });
    //
    // // Rollable abilities.
    // html.find('.rollable').click(this._onRoll.bind(this));
  }

  /* -------------------------------------------- */

  /** @override */
  getData(options) {
    const actorData = super.getData(options);
    return actorData;
  }
  /* -------------------------------------------- */

  /** @override */
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find(".sheet-body");
    const bodyHeight = position.height - 192;
    sheetBody.css("height", bodyHeight);
    return position;
  }
}

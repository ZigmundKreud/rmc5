/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class RMActorSheet extends ActorSheet {

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["rmc5", "sheet", "actor"],
      template: "systems/rmc5/templates/actors/actor-sheet.hbs",
      top: 0,
      left: 0,
      width: 800,
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
    html.find(".item-edit").click(this._onEditItem.bind(this));
    html.find(".item-delete").click(this._onDeleteItem.bind(this));
    html.find(".ranks").click(this._onIncreaseRank.bind(this));
    html.find(".ranks").contextmenu(this._onDecreaseRank.bind(this));
  }

  /* -------------------------------------------- */

  /** @override */
  getData(options) {
    const actorData = super.getData(options);
    actorData.stats = this.actor.system.stats;
    actorData.skills = actorData.items.filter((item) => item.type === game.rmc5.config.itemTypes.SKILL);
    return actorData;
  }
  /* -------------------------------------------- */

  /** @override */
  // {left, top, width, height, scale}={}
  setPosition(options = {}) {
    // options = {left:0, top:0};
    const position = super.setPosition(options);
    // const sheetBody = this.element.find(".sheet-body");
    // const bodyHeight = position.height - 50;
    // sheetBody.css("height", bodyHeight);
    return position;
  }


  /**
   * @description Open the item sheet
   * For capacity, open the source of the item or the embededd item depending of OPEN_TYPE value
   * @param event
   * @private
   */
  _onEditItem(event) {
    event.preventDefault();
    const li = $(event.currentTarget).closest(".item");
    const id = li.data("itemId");
    let document = this.actor.items.get(id);
    return document.sheet.render(true);
  }

  /**
   * @description Delete the selected item
   * @param event
   * @private
   */
  _onDeleteItem(event) {
    event.preventDefault();
    const li = $(event.currentTarget).parents(".item");
    const itemId = li.data("itemId");
    this.actor.deleteEmbeddedDocuments("Item",[itemId]);
  }

  /**
   * @description Delete the selected item
   * @param event
   * @private
   */
  _onIncreaseRank(event) {
    event.preventDefault();
    const li = $(event.currentTarget).parents(".item");
    const itemId = li.data("itemId");
    let document = this.actor.items.get(itemId);
    return this._onUpdateRank(document, false);
  }

  _onDecreaseRank(event) {
    event.preventDefault();
    const li = $(event.currentTarget).parents(".item");
    const itemId = li.data("itemId");
    let document = this.actor.items.get(itemId);
    return this._onUpdateRank(document, true);
  }

  _onUpdateRank(document, down) {
    let rank = document.system.rank;
    if(down && rank > 0) rank = document.system.rank - 1;
    if(!down && rank < 25) rank = document.system.rank + 1;
    return document.update({"system.rank": rank});
  }
}

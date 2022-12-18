/**
 * Extend the basic Item with some very simple modifications.
 * @extends {Item}
 */
export class RMItem extends Item {
  /**
   * Augment the basic Item data model with additional dynamic data.
   */
  prepareData() {
    super.prepareData();
    // console.debug("Item prepareData");
    // Get the Item's data
    const itemType = this.type;
    const itemData = this.system;
    console.log(itemData);
    switch(itemType){
      case "skill" : this.prepareSkillData();  break;
      default: break;
    }
    // const actorData = this.actor ? this.actor.data : {};
    // const data = itemData.data;
  }

  prepareDerivedData() {
    const itemType = this.type;
    switch(itemType){
      case "skill" : this.prepareSkillDerivedData();  break;
      default: break;
    }
  }

  prepareSkillData(){
    this.system.rankBonus = this.computeRankBonus(this.system.rank);
    if(this.system.star) this.system.cost = this.system.cost1 + "/*";
    else this.system.cost = this.system.cost1 + "/" + this.system.cost2;
    // this.system.levelBonus = 0;
    this.system.itemBonus = this.system.itemBonus1 + this.system.itemBonus2 + this.system.itemBonus3;
    this.system.specialBonus = this.system.special1 + this.system.special2 + this.system.special3;
    this.system.total = this.system.rankBonus + this.system.levelBonus + this.system.itemBonus + this.system.specialBonus + this.system.misc;
    this.system.stat = game.i18n.localize("RM.stats.abbr."+ this.system.stat1)
        + "/" + game.i18n.localize("RM.stats.abbr."+ this.system.stat2)
        + "/" + game.i18n.localize("RM.stats.abbr."+ this.system.stat3);

  }
  prepareSkillDerivedData(){
  }
  computeRankBonus(rank){
    if(rank ==0) return -25;
    if(rank <= 10) return rank*5;
    if(rank <= 20) return 50 + (rank-10)*2;
    if(rank > 20) return 70 + rank;
  }
}

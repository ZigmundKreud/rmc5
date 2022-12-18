/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class RMActor extends Actor {
  
  /** @override */
  prepareData() {
    console.log(this);
    super.prepareData();
    const actorData = this.system;
    console.log(actorData);
    // const data = actorData.data;
    // const flags = actorData.flags;
    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.
    // if (actorData.type === 'character') {
    //   this._prepareCharacterData(actorData);
    // }
  }

  prepareDerivedData(){
    // const actorType = this.type;
    // switch(actorType){
    //   case "character" : this._prepareCharacterDerivedData();  break;
    //   default: break;
    // }
  }
  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(actorData) {
  }
  _prepareCharacterDerivedData(actorData) {

  }
}
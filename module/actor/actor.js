/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class RMActor extends Actor {
  
  /** @override */
  prepareData() {
    super.prepareData();
    const actorData = this.data;
    console.log(actorData);
    // const data = actorData.data;
    // const flags = actorData.flags;
    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.
    if (actorData.type === 'character') {
      this._prepareCharacterData(actorData);
    }
  }

  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(actorData) {
  }
}
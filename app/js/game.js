/**
 * @class {} GameManager
 * Used to manage the game instance
 */
class GameManager {
  constructor(gameGridId) {
    this.gameGrid = null;

    this.init(gameGridId);
  }

  init(gameGridId) {
    this.gameGrid = document.getElementById(gameGridId);

    console.log('Game Grid', this.gameGrid);
  }

}
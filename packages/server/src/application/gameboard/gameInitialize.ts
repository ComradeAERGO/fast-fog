import { createGameBoard, GameBoard, setCell } from "../../domain/gameboard/gameboard";
import { createPlayer, Player } from "../../domain/players/player";
import { createProperty, Property } from "../../domain/properties/property";
import { createArmy } from "../../domain/combat/army";
import { createUnit } from "../../domain/combat/unit";
import { createPropertyCell } from "../../domain/gameboard/cells";

export interface GameOptions {
  numberOfPlayers: number;
  // Add other options as needed
}

export interface GameState {
  gameBoard: GameBoard;
  players: Player[];
  turnOrder: string[];
  currentTurn: number;
}

export function initializeGame(options: GameOptions): GameState {

  // Creating base Units
  const unit1 = createUnit( "infantry");
  const unit2 = createUnit( "infantry");
  const unit3 = createUnit( "infantry");
  const unit4 = createUnit( "infantry");

  // Creating base Armies
  const army1 = createArmy([unit1, unit2]);
  const army2 = createArmy([unit3, unit4]);

  // Defining player colors
  const pink = "EB455F";
  const navy = "2B3467";

  // Creating base Players
  const player1 = createPlayer( "Rogue Leader", pink, army1.id, []);
  const player2 = createPlayer("Lord Nelson", navy, army2.id, []);

  // Creating array of players
  const players = [player1, player2];
  const turnOrder = players.map((player) => player.id);
  const gameBoard = createGameBoard(23, turnOrder) satisfies GameBoard;

  // Defining current turn
  const currentTurn = 0;

  // Creating Properties
  const propertyEmpty = createProperty("Start", "White")
  const cellEmpty = createPropertyCell({x: 0, y: 0}, propertyEmpty.id, [])
  setCell(gameBoard, cellEmpty)

  const property1 = createProperty("Shadowy Forest Path", "Brown")
  const cell1 = createPropertyCell({x: 0, y: 1}, property1.id, [])
  setCell(gameBoard, cell1)

  const property2 = createProperty("Misty Hollow Trail", "Brown")
  const cell2 = createPropertyCell({x: 0, y: 2}, property2.id, [])
  setCell(gameBoard, cell2)

  const property3 = createProperty("Silverleaf Glade", "Light Blue")
  const cell3 = createPropertyCell({x: 0, y: 3}, property3.id, [])
  setCell(gameBoard, cell3)

  const property4 = createProperty("Soaring Heights Passage", "Light Blue")
  const cell4 = createPropertyCell({x: 0, y: 4}, property4.id, [])
  setCell(gameBoard, cell4)

  const property5 = createProperty("Serpent's Spine Path", "Light Blue")
  const cell5 = createPropertyCell({x: 0, y: 5}, property5.id, [])
  setCell(gameBoard, cell5)

  const property6 = createProperty("Sunset Promenade", "Pink")
  const cell6 = createPropertyCell({x: 1, y: 0}, property6.id, [])
  setCell(gameBoard, cell6)

  const property7 = createProperty("Ivory Citadel", "Pink")
  const cell7 = createPropertyCell({x: 1, y: 1}, property7.id, [])
  setCell(gameBoard, cell7)

  const property8 = createProperty("Dawnstar Way", "Pink")
  const cell8 = createPropertyCell({x: 1, y: 2}, property8.id, [])
  setCell(gameBoard, cell8)

  const property9 = createProperty("Arcane Archway", "Orange")
  const cell9 = createPropertyCell({x: 1, y: 3}, property9.id, [])
  setCell(gameBoard, cell9)

  const property10 = createProperty("Enchanted Grove", "Orange")
  const cell10 = createPropertyCell({x: 1, y: 4}, property10.id, [])
  setCell(gameBoard, cell10)

  const property11 = createProperty("Whispering Winds Avenue", "Orange")
  const cell11 = createPropertyCell({x: 1, y: 5}, property11.id, [])
  setCell(gameBoard, cell11)

  const property12 = createProperty("Emberstone Street", "Red")
  const cell12 = createPropertyCell({x: 2, y: 0}, property12.id, [])
  setCell(gameBoard, cell12)

  const property13 = createProperty("Wyrmfire Boulevard", "Red")
  const cell13 = createPropertyCell({x: 2, y: 1}, property13.id, [])
  setCell(gameBoard, cell13)

  const property14 = createProperty("Dragon's Roost Plaza", "Red")
  const cell14 = createPropertyCell({x: 2, y: 2}, property14.id, [])
  setCell(gameBoard, cell14)

  const property15 = createProperty("Celestial Plaza", "Yellow")
  const cell15 = createPropertyCell({x: 2, y: 3}, property15.id, [])
  setCell(gameBoard, cell15)

  const property16 = createProperty("Starfall Promenade", "Yellow")
  const cell16 = createPropertyCell({x: 2, y: 4}, property16.id, [])
  setCell(gameBoard, cell16)

  const property17 = createProperty("Astral Crescent", "Yellow")
  const cell17 = createPropertyCell({x: 2, y: 5}, property17.id, [])
  setCell(gameBoard, cell17)

  const property18 = createProperty("Regal Gardens", "Green")
  const cell18 = createPropertyCell({x: 3, y: 0}, property18.id, [])
  setCell(gameBoard, cell18)

  const property19 = createProperty("Mage's Walk", "Green")
  const cell19 = createPropertyCell({x: 3, y: 1}, property19.id, [])
  setCell(gameBoard, cell19)

  const property20 = createProperty("Enchanter's Avenue", "Green")
  const cell20 = createPropertyCell({x: 3, y: 2}, property20.id, [])
  setCell(gameBoard, cell20)

  const property21 = createProperty("Elysian Fields", "Dark Blue")
  const cell21 = createPropertyCell({x: 3, y: 3}, property21.id, [])
  setCell(gameBoard, cell21)

  const property22 = createProperty("Sovereign's Sanctuary", "Dark Blue")
  const cell22 = createPropertyCell({x: 3, y: 4}, property22.id, [])
  setCell(gameBoard, cell22)

  return { gameBoard, currentTurn, turnOrder, players }
}

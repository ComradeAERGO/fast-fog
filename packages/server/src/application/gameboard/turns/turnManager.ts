import { GameState } from "../gameInitialize";
import { BoardCoordinates } from "../../../domain/gameboard/boardCoordinates";
import { Cell } from "../../../domain/gameboard/cells";
import { GameBoard } from "../../../domain/gameboard/gameboard";

export function advanceTurn(gameState: GameState): GameState {
  const nextTurn = (gameState.currentTurn + 1) % gameState.turnOrder.length;
  return { ...gameState, currentTurn: nextTurn };
}

export function isPlayersTurn(gameState: GameState, playerId: string): boolean {
  return gameState.turnOrder[gameState.currentTurn] === playerId;
}

export function movePlayer(
  gameState: GameState,
  playerId: string,
  steps: number
): GameState {
  if (!isPlayersTurn(gameState, playerId)) {
    throw new Error("It's not this player's turn.");
  }

  const calculateNewPosition = (previousPosition: BoardCoordinates, steps: number, gameBoard: GameBoard): BoardCoordinates => {
    const mover = (remainingSteps: number, currentPosition: BoardCoordinates, cells: GameBoard["cells"]): BoardCoordinates => {
      if (remainingSteps === 0) {
        return currentPosition;
      }

      if (cells[currentPosition.x][currentPosition.y] === undefined) {
        const nextPosition = {x: currentPosition.x + 1, y: 0}
        return mover(remainingSteps, nextPosition, cells);
      }
      const nextPosition = { x: currentPosition.x, y: currentPosition.y + 1 };
      return mover(remainingSteps - 1, nextPosition, cells);
    };
  };


  const playerIndex = gameState.players.findIndex(
    (player) => player.id === playerId
  );
  const updatedPlayer = {
    ...gameState.players[playerIndex],
    position: calculateNewPosition(
      gameState.players[playerIndex].position,
      steps,
      gameState.gameBoard
    ),
  };

  const updatedPlayers = [...gameState.players];
  updatedPlayers[playerIndex] = updatedPlayer;

  return { ...gameState, players: updatedPlayers };
}

export enum ActionType {
  MOVE,
  // PURCHASE_PROPERTY,
  // TRADE,
  // ATTACK,
  END_TURN,
}

export function executeAction(
  gameState: GameState,
  playerId: string,
  actionType: ActionType,
  actionParams: any
): GameState {
  if (!isPlayersTurn(gameState, playerId)) {
    throw new Error("It's not this player's turn.");
  }

  switch (actionType) {
    case ActionType.MOVE:
      return movePlayer(gameState, playerId, actionParams.steps);
    case ActionType.END_TURN:
      return endTurn(gameState);
    default:
      throw new Error("Invalid action type.");
  }
}

export function endTurn(gameState: GameState): GameState {
  // Perform any end-of-turn actions or checks
  // ...

  // Advance to the next player's turn
  return advanceTurn(gameState);
}

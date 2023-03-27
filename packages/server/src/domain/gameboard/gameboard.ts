import { BoardCoordinates } from "./boardCoordinates";
import { Cell } from "./cells";
import { z } from "zod";

// AGGREGATE
export const GameBoard = z.object({
  cells: z.array(z.array(Cell)),
});

export type GameBoard = z.infer<typeof GameBoard>;

export function createGameBoard(size: number): GameBoard {
  const cells = new Array(size)
    .fill(null)
    .map(() => new Array(size).fill(null));
  return { cells };
}

export function setCell(gameBoard: GameBoard, cell: Cell): void {
  const x = cell.coordinates.x;
  const y = cell.coordinates.y;
  gameBoard.cells[x][y] = cell;
}

export function getCell(
  gameBoard: GameBoard,
  coordinates: BoardCoordinates
): Cell | null {
  const x = coordinates.x;
  const y = coordinates.y;
  return gameBoard.cells[x][y];
}

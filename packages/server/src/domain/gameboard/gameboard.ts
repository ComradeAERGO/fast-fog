import { BoardCoordinates } from "./boardCoordinates";
import { Cell } from "./cells";
import { z } from "zod";

// AGGREGATE
export const GameBoard = z.object({
  cells: z.array(z.array(Cell)),
  players: z.array(z.string().uuid()),
});

export type GameBoard = z.infer<typeof GameBoard>;

export function createGameBoard(size: {x: number, y: number}, players: string[]): GameBoard {
  const cells = new Array(size.x)
    .fill(null)
    .map(() => new Array(size.y).fill(null));
  return { cells, players };
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

import { IGameboardRepository } from "../../domain/gameboard/repository";
import { supabase } from "../../config/supabaseClient";
import { GameBoard } from "../../domain/gameboard/gameboard";

export class GameboardSupabaseAdapter implements IGameboardRepository {
  private table = "gameboard";

  async getById(id: string): Promise<GameBoard | null> {
    const { data, error } = await supabase
      .from(this.table)
      .select()
      .eq("id", id)
      .single<GameBoard>();

    if (error) {
      throw error;
    }

    return data;
  }

  async create(gameboard: GameBoard): Promise<GameBoard> {
    const { data, error } = await supabase
      .from(this.table)
      .insert(gameboard)
      .single<GameBoard>();

    if (error) {
      throw error;
    }

    return data;
  }

  async update(id: string, gameboard: GameBoard): Promise<void> {
    const { data, error } = await supabase
      .from(this.table)
      .update(gameboard)
      .eq("id", id)

    if (error) {
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    const { error } = await supabase.from(this.table).delete().eq("id", id);

    if (error) {
      throw error;
    }
  }
}

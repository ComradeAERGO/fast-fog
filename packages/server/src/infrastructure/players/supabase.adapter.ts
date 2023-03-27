import { supabase } from "../../config/supabaseClient";
import { IPlayerRepository } from "../../domain/players/repository";
import { Player } from "../../domain/players/player";

export class PlayerSupabaseAdapter implements IPlayerRepository {
  private table = "player";

  async getById(id: string): Promise<Player | null> {
    const { data, error } = await supabase
      .from(this.table)
      .select("*")
      .eq("id", id)
      .single<Player>();

    if (error) {
      throw error;
    }

    return data;
  }

  async create(player: Player): Promise<Player> {
    const { data, error } = await supabase
      .from(this.table)
      .insert([player])
      .single<Player>();

    if (error) {
      throw error;
    }

    return data;
  }

  async update(id:string, player: Player): Promise<void> {
    const { data, error } = await supabase
      .from(this.table)
      .update(player)
      .eq("id", player.id)

    if (error) {
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from(this.table)
      .delete()
      .eq("id", id)

    if (error) {
      throw error;
    }
  }
}

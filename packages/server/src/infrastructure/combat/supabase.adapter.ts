import { supabase } from "../../config/supabaseClient";
import { IArmyRepository } from "../../domain/combat/armyRepository";
import { Army } from "../../domain/combat/army";

export class ArmySupabaseAdapter implements IArmyRepository {
  private table = "army";

  async getById(id: string): Promise<Army | null> {
    const { data, error } = await supabase
      .from(this.table)
      .select()
      .eq("id", id)
      .single<Army>();

    if (error) {
      throw error;
    }

    return data;
  }

  async create(unit: Army): Promise<Army> {
    const { data, error } = await supabase
      .from(this.table)
      .insert(unit)
      .single<Army>();

    if (error) {
      throw error;
    }

    return data!;
  }

  async update(id: string, unit: Army): Promise<void> {
    const { data, error } = await supabase
      .from(this.table)
      .update(unit)
      .eq("id", id);

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

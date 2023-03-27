import { supabase } from "../../config/supabaseClient";
import { IUnitRepository } from "../../domain/combat/unitRepository";
import { Unit } from "../../domain/combat/unit";

export class UnitSupabaseAdapter implements IUnitRepository {
  private table = "unit";

  async getById(id: string): Promise<Unit | null> {
    const { data, error } = await supabase
      .from(this.table)
      .select()
      .eq("id", id)
      .single<Unit>();

    if (error) {
      throw error;
    }

    return data;
  }

  async create(unit: Unit): Promise<Unit> {
    const { data, error } = await supabase
      .from(this.table)
      .insert(unit)
      .single<Unit>();

    if (error) {
      throw error;
    }

    return data!;
  }

  async update(id: string, unit: Unit): Promise<void> {
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

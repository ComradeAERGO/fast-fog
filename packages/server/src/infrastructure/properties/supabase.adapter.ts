import { Property } from "../../domain/properties/property";
import { IPropertyRepository } from "../../domain/properties/repository";
import { supabase } from "../../config/supabaseClient";

export class PropertySupabaseAdapter implements IPropertyRepository {
  private table = "property";
  async getById(id: string): Promise<Property | null> {
    const { data, error } = await supabase
      .from(this.table)
      .select("*")
      .eq("id", id)
      .single<Property>();

    if (error) {
      throw error;
    }

    return data;
  }

  async create(property: Property): Promise<Property> {
    const { data, error } = await supabase
      .from(this.table)
      .insert([property])
      .single<Property>();

    if (error) {
      throw error;
    }

    if (!data) {
      throw new Error("Failed to create property");
    }

    return data;
  }

  async update(id: string, property: Partial<Property>): Promise<void> {
    const { error } = await supabase
      .from(this.table)
      .update(property)
      .eq("id", id)

    if (error) {
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from(this.table)
      .delete()
      .eq("id", id);

    if (error) {
      throw error;
    }
  }
}
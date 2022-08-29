import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { Client } from './client.model';
import { Service } from './models/service.model';
import { initsupabase, } from './uilis/unitsupabse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  supabase: SupabaseClient = createClient(initsupabase.supabaseUrl, initsupabase.supabaseKey)
  constructor() { }

  async AddClient(client: Client) {

    const { data, error } = await this.supabase
      .from<Client>('client')
      .insert(client)
    return { data, error };

  }

  async getClient() {
    let { data: client, error } = await this.supabase
      .from<Client>('client')
      .select('*')
    return { client, error }
  }

  async getService() {
    let { data: service, error } = await this.supabase
      .from<Service>('service')
      .select('*')
    return { service, error }
  }
}

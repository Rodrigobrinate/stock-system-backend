import * as mongoose from 'mongoose';

export const ClientsSchema = new mongoose.Schema({
  client_key: String,
  name: String,
  telefone: Number,
  addres: String,
  district: String,
  city: String,
  state: String,
  cpf: Number,
  rg: Number,

  
});
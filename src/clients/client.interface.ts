import { Document } from "mongoose";


export interface Client extends Document  {
    
   
    readonly client_key: String,
    readonly name: String,
    readonly telefone: Number,
    readonly addres: String,
    readonly district: String,
    readonly city: String,
    readonly state: String,
    readonly cpf: Number,
    readonly rg: Number,

}
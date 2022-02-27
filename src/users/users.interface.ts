import { Document } from "mongoose";


export interface Users extends Document  {
    
    readonly name: String,
    readonly email: String,
    readonly password: String,
    

}
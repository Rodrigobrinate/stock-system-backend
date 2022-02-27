import { Document } from "mongoose";


export interface Seals extends Document  {
    
    readonly product_key: String,
    readonly name: String,
    readonly quantities: Number,
    readonly price: Number,
    

}
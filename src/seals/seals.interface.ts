import { Document } from "mongoose";


export interface Seals extends Document  {
    
   readonly product_id: Object,
   readonly client_id: String,
   readonly price: Number,
    

}
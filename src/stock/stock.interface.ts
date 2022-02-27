import { Document } from "mongoose";


export interface Stock extends Document  {
    
    readonly product_key: String,
    readonly name: String,
    readonly brand: String,
    readonly quantities: Number,
    readonly sale_price: Number,
    readonly cost_price: Number,
    readonly quatities_sold: Number,
    readonly categories: String,

}
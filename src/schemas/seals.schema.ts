import * as mongoose from 'mongoose';

export const SealsSchema = new mongoose.Schema({

    product_key: String,
    name: String,
    quantities: Number,
    price: Number,

})
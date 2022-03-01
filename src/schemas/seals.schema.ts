import * as mongoose from 'mongoose';

export const SealsSchema = new mongoose.Schema({
    product_id: Object,
    client_id: String,
    price: Number,

})
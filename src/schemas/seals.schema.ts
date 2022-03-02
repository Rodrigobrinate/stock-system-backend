import * as mongoose from 'mongoose';
const Schema = mongoose.Schema

export const SealsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product_id: [{type: Schema.Types.ObjectId, ref: "clients"}],
    client_id: { type: Schema.Types.ObjectId, ref: "clients" },
    price: Number,

})
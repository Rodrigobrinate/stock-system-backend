import * as mongoose from 'mongoose';

export const StockSchema = new mongoose.Schema({
  product_key: String,
  name: String,
  brand: String,
  quantities: Number,
  sale_price: Number,
  cost_price: Number,
  quatities_sold: Number,
  categories: String,
});
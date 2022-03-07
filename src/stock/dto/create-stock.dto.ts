

export class CreateStockDto {

product_key: string;
  name: string;
  quantities: number;
  sale_price: number;
  cost_price: number;
  location: string;
  quatities_sold: number;
  category: object;
  brand: object;
  fornecedores: object;
  created_date: Date;
}

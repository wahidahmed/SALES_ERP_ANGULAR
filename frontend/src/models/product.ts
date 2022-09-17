import { IProduct } from "src/app/interfaces/IProduct";

export class Product implements IProduct{
  Id: number;
  ProdcutCode: string;
  ProdcutName: string;
  ModelId?: number;
  CostPrice: number;
  SalesPrice: number;
  VAT?: number;
  CatagoryId?: number;
  UnitId: number;

}

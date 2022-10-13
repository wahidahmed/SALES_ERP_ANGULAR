import { IpurchaseDetail } from "../interfaces/ipurchaseDetail";
import { IPurchaseMaster } from "../interfaces/ipurchaseMaster";

export class Purchase implements IPurchaseMaster{
  PurchaseDate: Date;
  PurchaseMasterId: number;
  SupplierId: number;
  GrandTotal: number;
  Amount: number;
  Cost: number;
  Discount: number;
  ItemList: IpurchaseDetail[];
}

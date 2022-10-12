import { IpurchaseDetail } from "../interfaces/ipurchaseDetail";
import { IPurchaseMaster } from "../interfaces/ipurchaseMaster";

export class Purchase implements IPurchaseMaster{
  PurchaseDate: Date;
  PurchaseMasterId: number;
  SupplierId: number;
  GrandTotal: number;
  ItemList: IpurchaseDetail[];
}

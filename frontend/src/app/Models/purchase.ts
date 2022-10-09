import { IpurchaseDetail } from "../interfaces/ipurchaseDetail";
import { IPurchaseMaster } from "../interfaces/ipurchaseMaster";

export class Purchase implements IPurchaseMaster{
  PurchaseMasterId: number;
  SupplierId: number;
  GrandTotal: number;
  ItemList: IpurchaseDetail[];
}

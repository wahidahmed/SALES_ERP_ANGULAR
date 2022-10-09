import { IpurchaseDetail } from "../interfaces/ipurchaseDetail";
import { IPurchaseMaster } from "../interfaces/ipurchaseMaster";

export class Purchase implements IPurchaseMaster{
  purchaseMasterId: number;
  supplierId: number;
  grandTotal: number;
  itemList: IpurchaseDetail[];
}

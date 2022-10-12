export interface IpurchaseDetail {
  PurchaseDetailId:number;
  ProductId:number;
  ItemPrice:number;
  Qty:number;
  OtherCost?:number;
  Discount?:number;
  Total:number;
}

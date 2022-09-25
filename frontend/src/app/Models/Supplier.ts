import { ISupplier } from "../interfaces/ISupplier";

export class Supplier implements ISupplier{
  SupplierId: number;
  SupplierName: string;
  SupplierAddress?: string;
  SupplierPhone?: string;
}

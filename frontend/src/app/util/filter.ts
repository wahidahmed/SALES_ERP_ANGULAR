export class Filter{
  constructor() {}
public doFilter(dataList:Array<any>,filterBy: string,filterHead:Array<any>): any {

   filterBy = filterBy.toLocaleLowerCase();

    return  dataList.filter((data)=>{
        let filterKeys =filterHead.length==0? Object.keys(data): filterHead;
        console.log(filterKeys)
     return filterKeys.some((keys,i,arr)=>{
        console.log(data[keys])
        return String(data[keys]).toLocaleLowerCase().indexOf(filterBy)!==-1;
      })

        // return data.SupplierName.toLocaleLowerCase().indexOf(filterBy) !== -1
        // || data.SupplierAddress.toLocaleLowerCase().indexOf(filterBy)!==-1
        // || data.SupplierPhone.toLocaleLowerCase().indexOf(filterBy)!==-1
      })

  }

}

export class Search{
  constructor() {}
doFilter(filterBy: string,dataList:Array<any>): any {

   filterBy = filterBy.toLocaleLowerCase();

    return  dataList.filter((data)=>{
        let filterKeys = Object.keys(data);
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

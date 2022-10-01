export class Filter{
  constructor() {}
public doFilter(dataList:Array<any>,filterBy: string,filterHead:Array<any>): any {

    return  dataList.filter((data)=>{
      console.log('filterHead',filterHead)
      let filterKeys =[];
      if(filterHead){
        filterKeys =filterHead;
      }
      else{
        filterKeys =Object.keys(data);
      }

      console.log(filterKeys)
      return filterKeys.some((keys,i,arr)=>{
        console.log(data[keys])
        return String(data[keys]).toLocaleLowerCase().indexOf(filterBy)!==-1;
      })
    })

  }

}

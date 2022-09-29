export class Sort {
  constructor() { }

  private sortOrder = 1;
    private collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: "base",
    })

    public startSort(property, order, type = "") {
      if (order === "desc") {
          this.sortOrder = -1;
      }
      return (a, b) => {
          if (type === "date") {
              return this.sortData(new Date(a[property]), new Date(b[property]));
          } else {
            console.log('property=',property,'a[property]=',a[property],',a=',a,
                                            ',b[property]=',b[property],',b=',b)
              return this.collator.compare(a[property], b[property]) * this.sortOrder;
          }
      }
  }

  private sortData(a, b) {
    if (a < b) {
        return -1 * this.sortOrder;
    } else if (a > b) {
        return 1 * this.sortOrder;
    } else {
        return 0 * this.sortOrder;
    }
}

}

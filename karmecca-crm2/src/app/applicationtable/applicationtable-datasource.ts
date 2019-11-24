import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ApplicationtableItem {
  id: number;
  name: string;
  category: string;
  date: string ;
  email: string;
  phone: string;
  car: string;
  venmo: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ApplicationtableItem[] = [
  {id: 1, name: 'Harry Smith', category: 'Volunteer', date:'Apr 4, 2019',email:'testemail@yahoo.com',phone:'111-1111',car:'Acura RSX',venmo:'TestVenmo' },
  {id: 2, name: 'Janet Rodriguez', category: 'Car', date:'March 4, 2018',email:'testemail@yahoo.com',phone:'111-1111',car:'Acura RSX',venmo:'TestVenmo'},
  {id: 3, name: 'Bobby Styles', category: 'Vendor', date:'Apr 4, 2019',email:'testemail@yahoo.com',phone:'111-1111',car:'Acura RSX',venmo:'TestVenmo'},
  {id: 4, name: 'Jim Bob', category: 'Car', date:'Apr 4, 2019',email:'testemail@yahoo.com',phone:'111-1111',car:'Acura RSX',venmo:'TestVenmo'},
  {id: 5, name: 'Enrique Martin', category: 'Vendor', date:'Jan 26, 2019',email:'testemail@yahoo.com',phone:'111-1111',car:'Acura RSX',venmo:'TestVenmo'},
  {id: 6, name: 'Brandon Roberts', category: 'Car', date:'Feb 9, 2018',email:'testemail@yahoo.com',phone:'111-1111',car:'Acura RSX',venmo:'TestVenmo'},
  {id: 7, name: 'Matthew Cameron', category: 'Volunteer', date: 'Apr 4, 2019',email:'testemail@yahoo.com',phone:'111-1111',car:'Acura RSX',venmo:'TestVenmo'},
  {id: 8, name: 'Sheila Moe', category: 'Volunteer', date:'Apr 4, 2019',email:'testemail@yahoo.com',phone:'111-1111',car:'Acura RSX',venmo:'TestVenmo'},
  {id: 9, name: 'Stephanie Gates', category: 'Car', date:'Apr 4, 2019',email:'testemail@yahoo.com',phone:'111-1111',car:'Acura RSX',venmo:'TestVenmo'},
  {id: 10, name: 'Zane Beaux', category: 'Volunteer', date:'Apr 4, 2019',email:'testemail@yahoo.com',phone:'111-1111',car:'Acura RSX',venmo:'TestVenmo'},

];

/**
 * Data source for the Applicationtable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ApplicationtableDataSource extends DataSource<ApplicationtableItem> {
  data: ApplicationtableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ApplicationtableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ApplicationtableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ApplicationtableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'category': return compare(a.category, b.category, isAsc);
        case 'date': return compare(a.date, b.date, isAsc);
        default: return 0;
      }
    });
  }
  public returnRow(id)
  {
    return this.data.find(x => x.id === id);
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

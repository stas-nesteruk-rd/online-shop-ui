import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

import {CategoriesService} from '../../../shared/services/categories.service';
import {Category} from '../../../shared/interfaces';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit{
  title = 'Categories';
  categories: Category[] = [];
  isFetching = false;
  dataSource: MatTableDataSource<Category>;
  columns: string[] = ['id', 'name', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    console.log(1);
    this.isFetching = true;
    this.categoriesService.fetch().subscribe(categories => {
      this.isFetching = false;
      this.categories = categories;

      this.dataSource = new MatTableDataSource(categories);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  create() {
    this.categoriesService.create({name: 'Phones'}).subscribe(
      () => {
        console.log('succes')
      },
      () => {
        console.log('errpr');
      }
    );
  }
}

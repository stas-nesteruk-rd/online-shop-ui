import {NgModule} from '@angular/core';

import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';

const material = [
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatMenuModule,
];

@NgModule({
  imports: [...material],
  exports: [...material]
})
export class MaterialModule {}

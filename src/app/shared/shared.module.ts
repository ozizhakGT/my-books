import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatExpansionModule,
  MatDialogModule,
  MatDividerModule
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatExpansionModule,
  MatDialogModule,
  MatDividerModule,
  MatSnackBarModule,
  MatTooltipModule
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules]
})
export class SharedModule { }

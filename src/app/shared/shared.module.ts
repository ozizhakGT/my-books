import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatInputModule} from '@angular/material';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatExpansionModule,
  MatDialogModule
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules]
})
export class SharedModule { }

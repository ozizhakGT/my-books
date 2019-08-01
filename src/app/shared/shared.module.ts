import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatInputModule} from '@angular/material';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatExpansionModule
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules]
})
export class SharedModule { }

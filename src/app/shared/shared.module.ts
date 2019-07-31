import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules]
})
export class SharedModule { }

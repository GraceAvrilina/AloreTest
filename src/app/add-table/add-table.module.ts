import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
// import {AddTableComponent} from './add-table.component'
import {MatIconModule} from '@angular/material/icon';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatColorPickerModule } from 'mat-color-picker';

// const routes: Routes = [
//   {
//     path: '',
//     component: AddTableComponent
//   }
// ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    PickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatColorPickerModule,
    NoopAnimationsModule,
    MatColorPickerModule
    // RouterModule.forChild(routes)
  ],
  exports:[],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
   { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ],
})
export class AddTableModule { }

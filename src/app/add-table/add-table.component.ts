import { Component, OnInit , ViewChild} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
// import { FormsModule } from '@angular/forms';
import { AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { NgxMatColorPickerInput, Color } from '@angular-material-components/color-picker';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {
  // @ViewChild(NgxMatColorPickerInput) picker: NgxMatColorPickerInput;
  public disabled = false;
  public color: ThemePalette = 'primary';
  public touchUi = false;

  
  public datas:any = {
    name:'',
    icon:'',
    color:''
  }

  public isEmojiPickerVisible: boolean = false;

  constructor(private dialogRef: MatDialogRef<AddTableComponent>) {
    
    // const temp = this.hexToRgb('#00ff00');
    // this.picker.value = new Color('r', 'g', 'b');
   }

  ngOnInit(): void {
  }
   

  setemoji(){
    this.isEmojiPickerVisible = true
  }

  addEmoji($event:any) {
    this.datas.icon = `${this.datas.icon}${$event.emoji.native}`;
    this.isEmojiPickerVisible = false;
 }

  closeDialog(){
    this.dialogRef.close();
  }

  submitDialog(){
    console.log(this.datas)
    this.dialogRef.close(this.datas );
  }

}

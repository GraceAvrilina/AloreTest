import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-segment',
  templateUrl: './add-segment.component.html',
  styleUrls: ['./add-segment.component.css']
})
export class AddSegmentComponent implements OnInit {
  public disabled = false;
  public color: ThemePalette = 'primary';
  public touchUi = false;

  
  public datas:any = {
    name:'',
    icon:'',
    desc:''
  }

  public isEmojiPickerVisible: boolean = false;
  constructor(private dialogRef: MatDialogRef<AddSegmentComponent>) { }

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
    this.dialogRef.close(this.datas);
  }
}

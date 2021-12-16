import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddTableComponent} from '../add-table/add-table.component'
import {AddSegmentComponent} from '../add-segment/add-segment.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dialogValue:any
  public sendValue:any

  public segments:any=
  [
    {
      name:'Segment 1',
      icon:'😀',
      desc:''
    },
    {
      name:'Segment 2',
      icon:'👍',
      desc:''
    },
    {
      name:'Segment 3',
      icon:'😁',
      desc:''
    },
  ]
  // ['😀 Segment 1','👍 Segment 2','😁 Segment 3']

  public table:any=
  [
    {
      name:'Segment 1',
      icon:'😀',
      color:'red'
    }
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.table)
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddTableComponent, {
      width: '30vw',
      backdropClass: 'dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { pageValue: this.sendValue }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
      this.table.push(result)
      console.log( this.table);
    });
  }

  
  openDialogSegment() {
    const dialogRef = this.dialog.open(AddSegmentComponent, {
      width: '30vw',
      backdropClass: 'dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { pageValue: this.sendValue }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
      this.segments.push(result)
      console.log( this.segments);
    });
  }

}

import { Component } from '@angular/core';
const ELEMENT_DATA: any[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'}
];
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Paste it';
  val:any;
   displayedColumns: string[] ;//= ['position', 'name', 'weight', 'symbol'];
  dataSource: any[] = []; //= ELEMENT_DATA;

  data(event:ClipboardEvent) {
    let clipboardData = event.clipboardData;
  let pastedText = clipboardData.getData('text');
  console.log(pastedText);
  let row_data = pastedText.split('\n');
  this.displayedColumns = row_data[0].split('\t');
  // Create table dataSource
   let row: any[]=[];
 this.displayedColumns.forEach((a, index)=>{row[a]= row_data[1].split('\t')[index]});
 console.log(row);
  this.dataSource = row;
  }
}

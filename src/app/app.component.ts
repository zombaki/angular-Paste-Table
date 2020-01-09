import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
const ELEMENT_DATA: any[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'}
];
export class AppComponent  {
  name = 'Paste it';

   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  
  data(event:ClipboardEvent) {
    let clipboardData = event.clipboardData;
  let pastedText = clipboardData.getData('text');
  console.log(pastedText);
  }
}

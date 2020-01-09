import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Paste it';
  data(event:ClipboardEvent) {
    let clipboardData = event.clipboardData;
  let pastedText = clipboardData.getData('text');
  console.log(pastedText);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-output-property';

  public youtubeName = 'Thapa Technical, data is coming from parent' 
  // step1 for sending data from parent to child component

  public childMessage:any;
  //5th step creating one filed
}

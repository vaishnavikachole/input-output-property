import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent 
{

  // public parentData;  3rd step
  @Input() public parentData : any;

  // public childData = new EventEmitter(); //1st step : creating object of event emiter for sending data
  // from child to parent component

  @Output() public childData = new EventEmitter(); //2nd step: use output decorator for sending data to parent

  sendDataToParent(){
    console.log("send data to parent method called")
    this.childData.emit("sending data from child to parent component")

  }
  //4rd step creating method and emit data into childData

}

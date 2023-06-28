import { Component } from '@angular/core';

@Component({
  selector: 'npst-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowServerAdd: boolean = false;

  serverCreationStatus: string = "No Server Created!"


  serverName = 'Test Server';

  userName:string = ''

  

  constructor(){
    setTimeout(() => {
      this.allowServerAdd  =true
    },5000)
  }

  onChangeServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;

  }

  onClearUserName(){
    this.userName = '';
  }

  onChangeServerCreation(){
    this.serverCreationStatus = 'Server Created and Server Name is ' + this.serverName
  }
}

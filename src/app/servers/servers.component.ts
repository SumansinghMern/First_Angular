import { Component } from '@angular/core';

@Component({
  selector: 'npst-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowServerAdd: boolean = false;

  constructor(){
    setTimeout(() => {
      this.allowServerAdd  =true
    },2000)
  }
}

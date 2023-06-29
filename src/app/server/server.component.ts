import { style } from '@angular/animations';
import {Component} from '@angular/core';

@Component({
    selector: 'npst-server',
    templateUrl: './server.component.html',
    styles  : [`
        .online {
            color: white
        }
    `]
})
export class ServerComponent{
    serverStatus: string = 'offline'

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getColor(){
        return this.serverStatus === 'offline' ? 'red' : 'green'
    }
}
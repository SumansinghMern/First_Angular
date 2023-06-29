import { Component, Input } from "@angular/core";

@Component({
    selector: 'npst-assignment-logs',
    templateUrl:'./logs.component.html',
    styles:[`
        .test {
            background-color: #895a5a
        }
    `]
})
export class LogsComponent {
    @Input() serverLogs: number[]

    constructor(){
        this.serverLogs = []
    }

}
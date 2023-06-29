import { Component} from '@angular/core';

@Component({
    selector:'npst-log',
    templateUrl:'./assignment3.component.html'
})
export class Assignment3Component {
    showData = false
    clickedCount = 0;

    serverLogs: number[] = []

    onDisplay(){
        this.showData = !this.showData;
        this.clickedCount = this.clickedCount + 1;
        this.serverLogs.push(this.clickedCount);
    }
}
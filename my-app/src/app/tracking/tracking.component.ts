import { Component, OnInit,Injectable } from '@angular/core';
// import * as io from 'socket.io-client';
import { Socket } from 'ng-socket-io';


@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})


export class TrackingComponent implements OnInit {
  ngOnInit() {}
}

@Injectable()
export class ChatService {

    constructor(private socket: Socket) { }

    sendMessage(msg: string){
        this.socket.emit("message", msg);
    }
    
    getMessage() {
        return this.socket
            .fromEvent("message")
          }
}

// import { Component, OnInit } from '@angular/core';
// import * as io from 'socket.io-client';
// import * as teste from 'http';

// @Component({
//   selector: 'app-tracking',
//   templateUrl: './tracking.component.html',
//   styleUrls: ['./tracking.component.css']
// })

// export class TrackingComponent implements OnInit {
//     messageText: string;
//     messages: Array<any>;
//     socket: SocketIOClient.Socket;

//   constructor() {
//     teste.get()
//     console.log(io.connect('http://localhost:4200/tracking'),'CONEXAO')
//     this.socket = io.connect('http://localhost:4200/tracking');
    
//   // this.socket = io.connect();
//   }

//   ngOnInit() {
//         this.messages = new Array();

//         this.socket.on('message-received', (msg: any) => {
//             this.messages.push(msg);
//             console.log(msg);
//             console.log(this.messages);
//         });
//       this.socket.emit('event1', {
//           msg: 'Client to server, can you hear me server?'
//       });
//       this.socket.on('event2', (data: any) => {
//         console.log(data.msg);
//         this.socket.emit('event3', {
//             msg: 'Yes, its working for me!!'
//         });
//       });
//       this.socket.on('event4', (data: any) => {
//           console.log(data.msg);
//       });
//    }

//    sendMessage() {
//     const message = {
//       text: this.messageText
//     };
//     this.socket.emit('send-message', message);
//     // console.log(message.text);
//     this.messageText = '';
//   }

// }



import { Component, OnInit,Injectable } from '@angular/core';
// import * as io from 'socket.io-client';
import { Socket } from 'ng-socket-io';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css'],
  providers:[]
})



export class TrackingComponent implements OnInit {
 

  ngOnInit() {

  }


}

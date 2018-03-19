import { Component } from '@angular/core';
import {Parse } from 'parse'
import {NgForm} from '@angular/forms';
import { ChatService } from './chat.service';




// var GameScore = Parse.Object.extend("User");
// var query = new Parse.Query(GameScore);
// query.find({
//   success: function(results) {
//     alert("Successfully retrieved " + results.length + " scores.");
//     // Do something with the returned Parse.Object values
//     console.log(results);
//     for (var i = 0; i < results.length; i++) {
//       var object = results[i];

//       alert(object.id + ' - ' + object.get('playerName'));
//     }
//   },
//   error: function(error) {
//     alert("Error: " + error.code + " " + error.message);
//   }
// });

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService]
})
export class AppComponent {
  title = 'app';
 
  constructor(private chat: ChatService){ }
  msg : string;

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      console.log(msg);
    })
  
  }
  sendMessage() {
    this.chat.sendMsg("Test Message");
  }

  onSubmit(f: NgForm) {
    //cadastrar user

    if(f.valid){
      var CheckInBeacon = Parse.Object.extend("CheckInBeacon");
      var checkInBeacon = new CheckInBeacon();

      checkInBeacon.set("Name",f.value.name);
      checkInBeacon.set("cpf",f.value.cpf);
      
      checkInBeacon.save(null, {
        success: function(gameScore) {
          // Execute any logic that should take place after the object is saved.
          alert('Cadastro Realizado com sucesso ' + gameScore.id);
        },
        error: function(gameScore, error) {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and message.
          alert('Ocorreu um erro ao efetuar o cadastro: ' + error.message);
        }
      });
    }
  }


}

import { Component } from '@angular/core';
import {Parse } from 'parse'
import {NgForm} from '@angular/forms';

var GameScore = Parse.Object.extend("User");
var query = new Parse.Query(GameScore);
query.find({
  success: function(results) {
    alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    console.log(results);
    for (var i = 0; i < results.length; i++) {
      var object = results[i];

      alert(object.id + ' - ' + object.get('playerName'));
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 
  onSubmit(f: NgForm) {
    //cadastrar user

    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }


}

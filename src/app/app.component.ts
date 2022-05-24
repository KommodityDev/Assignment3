import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  showing = false;
  buttonClicks = [];
  count = 0;

  logClicks() {
    this.showing = !this.showing;
    this.count += 1;
    this.buttonClicks.push(new Date())
    //this.buttonClicks.push(this.count);
  }

  getColor() {
    return this.buttonClicks.length >= 5 ? 'blue' : 'white';
  }
}

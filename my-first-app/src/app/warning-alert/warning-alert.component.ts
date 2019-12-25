import { Component } from "@angular/core";

@Component({
  selector: "app-warning-alert",
  template: `
    <button class="btn btn-warning" ngClick="this.console()">Warning!</button>
  `,
  styles: ["button {color: black;}"]
})
export class WarningAlertComponent {
  console = () => console.log(this);
}

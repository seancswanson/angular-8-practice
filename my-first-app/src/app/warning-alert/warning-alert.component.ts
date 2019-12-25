import { Component } from "@angular/core";

@Component({
  selector: "warning-alert-button",
  template: `
    <button class="btn btn-warning">Warning!</button>
  `,
  styles: ["button {color: black;}"]
})
export class WarningAlertComponent {}

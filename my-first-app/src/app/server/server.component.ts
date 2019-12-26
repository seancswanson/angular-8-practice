import { Component, Input } from "@angular/core";
import { serverName } from "../servers/servers.component";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [
    `
      p {
        padding: 10px;
        border-radius: 4px;
        box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.1);
      }
      span {
        display: inline-block;
        font-family: monospace;
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 2px;
        padding: 5px;
      }
      .offline {
        background: lightpink;
      }
      .online {
        background: lightgreen;
      }
    `
  ]
})
export class ServerComponent {
  serverId: string = this.createGuid();
  serverStatus: string = Math.random() > 0.5 ? "online" : "offline";
  @Input() serverName: serverName;

  getServerStatus() {
    return this.serverStatus;
  }

  createGuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

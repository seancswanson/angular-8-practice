import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean;
  serverCreated: boolean;
  serverCreationStatus: string = "No server was created.";
  serverName: string = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
    this.allowNewServer = false;
    this.serverCreated = false;
  }

  onCreateServer(args) {
    this.serverCreated = true;
    this.serverCreationStatus = `Server was created! Name: "${this.serverName}" `;
    this.serverName = "";

    setTimeout(() => {
      this.serverCreated = false;
    }, 2000);
    console.log(args);
  }
}

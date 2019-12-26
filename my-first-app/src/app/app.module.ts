import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { FormsModule } from "@angular/forms";

import { NgxTrimDirectiveModule } from "ngx-trim-directive";

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent],
  imports: [BrowserModule, FormsModule, NgxTrimDirectiveModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

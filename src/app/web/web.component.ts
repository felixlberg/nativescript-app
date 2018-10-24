import { Component } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

@Component({
    moduleId: module.id,
    templateUrl: "./web.component.html",
})

export class WebComponent {
  public webViewSrc: string = "https://www.google.com";
}

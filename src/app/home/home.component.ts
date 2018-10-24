import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { alert, confirm, prompt, login, action, inputType } from "tns-core-modules/ui/dialogs";
import { EventData } from "tns-core-modules/data/observable";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    ngOnInit(): void { }

}

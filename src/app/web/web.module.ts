import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { WebRoutingModule } from "./web-routing.module";
import { WebComponent } from "./web.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        WebRoutingModule
    ],
    declarations: [
        WebComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class WebModule { }

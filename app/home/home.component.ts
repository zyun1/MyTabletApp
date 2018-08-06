import { Component, OnInit } from "@angular/core";
import { DeviceType } from "ui/enums";
import { device } from "platform";
import { Router } from "@angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    readonly isTablet = device.deviceType === DeviceType.Tablet;

    colors = ["Violet", "Indigo", "Blue", "Green", "Cyprus", "Yellow",
        "Orange", "Red",];

    currentColor: string;

    constructor(
        private router: Router
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onItemTap(event) {
        this.currentColor = this.colors[event.index];
        // タブレット以外ならば画面遷移
        if (!this.isTablet) {
            this.router.navigate(["/home/detail", this.currentColor]);
        }
    }
}

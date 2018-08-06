import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "DetailContent",
    templateUrl: "detail-content.component.html",
})
export class DetailContentComponent implements OnInit {

    @Input()
    color: string;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}

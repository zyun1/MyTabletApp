import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "../../node_modules/@angular/router";

@Component({
    selector: "Detail",
    templateUrl: "./detail.component.html",
})
export class DetailComponent implements OnInit {

    color: string;

    constructor(
        private route: ActivatedRoute
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.route.paramMap.subscribe((params: ParamMap) => {
            //
            this.color = params.get('color');
        });
    }
}

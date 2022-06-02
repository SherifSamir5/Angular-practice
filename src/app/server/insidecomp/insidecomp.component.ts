import { Component , Input } from "@angular/core";

@Component({
    selector : 'inside-comp',
    templateUrl : './insidecomp.component.html'
})

export class InsideComp {
    @Input() insideComp = "graph"
}
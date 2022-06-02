import { Component , Input } from "@angular/core";

@Component({
    selector : 'app-servers',
    templateUrl : './servers.component.html',
    styleUrls : ['./servers.component.css']
})

export class ServersComponent {
    servers : string[] = [
        "one",
        "two",
        "three",
        "four",
    ]

    @Input() sweden = "jakob"


    addServer(){
        this.servers.push('new server')
    }

    deleteServer(){
        this.servers.pop()
    }
}
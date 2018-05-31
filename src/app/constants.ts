import { HttpHeaders } from "@angular/common/http";

export class Constants {
    static BASE_URL = 'http://localhost:8080/'
    static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

}
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class LabSeqService {

    valueChanged = new Subject<string>();

    constructor(private httpClient: HttpClient){
    }

    private callServiceToCompute(value: number) {
        this.httpClient.get<any>(`http://localhost:8080/labseq/${value}`).subscribe(resp => {
            this.valueChanged.next(resp);
        });
    }

    public computeSequence(value: number) {
        this.callServiceToCompute(value);
    }

}
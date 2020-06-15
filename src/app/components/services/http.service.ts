import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class HttpService{
    constructor(
        private http: HttpClient
    ){

    }

    private address: string = "https://backend-rank-game.herokuapp.com/";

    requestGet(url:string, accessToken?:string){
        return this.http.get(`${this.address}${url}`,{
            headers: this.appendHeaders(accessToken)
        }).pipe(catchError(err=>this.handelError(err)))
    }

    requestPost(url:string, body:any, file?:any){
        return this.http.post(`${this.address}${url}`,body,file)
        .pipe(catchError(err=>this.handelError(err)));
    }
    
    requestPatch(url:string, accessToken?:string, model?:any){
        return this.http.patch(`${this.address}${url}`,model, {
            headers: this.appendHeaders(accessToken)
        })
        .pipe(catchError(err=>this.handelError(err)));
    }

    requestDelete(url:string, id:any){
        return this.http.delete(`${this.address}${url}`)
            .pipe(catchError(err=>this.handelError(err)));
    }

    requestDeleteFile(url:string, name:any, user:any){
        var data = `${this.address}${url}` + name + "/" + user;
        return this.http.delete(`${this.address}${url}` + name +"/"+user)
            .pipe(catchError(err => this.handelError(err)))
    }

    private handelError(errResponse: HttpErrorResponse): Observable<any>{
        errResponse['Message'] = errResponse.message;
        if(errResponse.error && errResponse.message)
            errResponse['Message'] = errResponse.error.message;
            throw errResponse;
    }

    appendHeaders(accessToken:string){
        const headers = {};
        if(accessToken) headers['Authorization'] = `Bearer ${accessToken}`;
        return new HttpHeaders(headers);
    }
}
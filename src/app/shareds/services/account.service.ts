import { Injectable } from "@angular/core";
import { HttpService } from 'src/app/components/services/http.service';
import { userInfo } from 'os';
import { observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AccountService{
    constructor(
        private http: HttpService
    ){
        
    }

    public UserLogin: IAccount = {} as any;
    public setUserLogin(UserLogin:IAccount){
        this.UserLogin._id = UserLogin._id;
        this.UserLogin.firstname = UserLogin.lastname;
        this.UserLogin.email = UserLogin.email;
        this.UserLogin.postition = UserLogin.postition;
        this.UserLogin.role = UserLogin.role;
        this.UserLogin.image = UserLogin.image;
        this.UserLogin.created = UserLogin.created;
        this.UserLogin.upadted = UserLogin.upadted;
        this.UserLogin.year = UserLogin.year;
    }

    public Observe: IAcademy = {} as any;
    public setAcademyObserve(result:IAcademy){
        this.Observe._id = result._id;
        this.Observe.place = result.place;
        this.Observe.etc = result.etc;
        this.Observe.subdistrict = result.subdistrict;
        this.Observe.district = result.district;
        this.Observe.province = result.province;
        this.Observe.post_code = result.post_code;
    }

    onUpdateProfile(accessToken:string,model:any){
        const x = "user/" + this.UserLogin._id;
        return this.http.requestPatch(x,accessToken,model)
    }

    getUserLogin(accessToken:string){
        return (this.http.requestGet('user/data',accessToken)
        .toPromise() as Promise<IAccount>)
        .then(result=>this.setUserLogin(result));
    }

    getAllMember(accessToken: string){
        return (this.http.requestGet("user",accessToken).toPromise())
    }

    onLogin(model:any){
        return this.http.requestPost('user/login', model)
        .toPromise() as Promise<{accessToken:string}>
    }

    onRegister(model:IRegister){
        return this.http.requestPost('user/signup',model)
        .toPromise() as Promise<IAccount>
    }

    onChangePassword(accessToken:string,model:any){
        return this.http.requestPatch('user/change_password',accessToken,model)
            .toPromise() as Promise<IAccount>
    }
}

export interface IEvaluation{
    totalHour:Number,
    user:IAccount
}

export interface IRegister{
    firstname:string,
    lastname:string,
    email:string,
    password:string,
    cpassword:string
}

export interface IAcademy{
    _id:any;
    place:string;
    etc:string;
    subdistrict:string;
    district:string;
    province:string;
    post_code:string;
}

export interface IAccount{
    firstname: string;
    lastname:string;
    email:string;
    password:string;

    _id?:string;

    postition:string;
    image?:string;
    role?:IRoleAccount;
    created?:Date;
    upadted?:Date;

    coordinator?:string;
    academy?:string;
    telephone?:string;
    year?:Number;
}

export enum IRoleAccount{
    นักศึกษา = 1,
    ครูอาจารย์,
    ผู้ดูแลระบบ
}
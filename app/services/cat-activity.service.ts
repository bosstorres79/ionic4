import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  //อิงมาจากrootหน้าแรก
})
export class CatActivityService {
  apiUrl : string ="http://localhost/BBexpless/process/BB_sent.php"; //Url ที่จะคอลไป

  constructor(public http: HttpClient) {  //ถูกทำงานก่อนอันดับแรกเสมอ
   

   } 

   
   getCatAtivity(){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'select'
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }

  get(IDsentbb : any){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'selectone',
      'IDsentbb' : IDsentbb
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }
  
  insert( IDsentbb: string, namepro: any,catepro:string,statuspro: any){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'insert',
      'IDsentbb': IDsentbb,
      'namepro': namepro,
      'catepro':catepro,
      'statuspro':statuspro
      
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }

  del( IDsentbb : any){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'delete',
      'IDsentbb' : IDsentbb
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
  
  edit( IDsentbb: string, namepro: any,catepro:string,statuspro: any){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'edit',
      'IDsentbb' : IDsentbb ,
      'namepro': namepro,
      'catepro':catepro,
      'statuspro':statuspro
      
     
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
}

import { Injectable } from '@angular/core';
//Peticiones HTTP
import { HttpClient,HttpHeaders } from '@angular/common/http'
//mMdelo
import { Databank } from 'src/app/models/databank/databank'

@Injectable({
  providedIn: 'root'
})
export class DatabankService {

  constructor(private http:HttpClient) { }

  //HTTPOptions
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  API_Url_DataBank='http://127.0.0.1:8888/databank';

  postDataBankFile(form){
    return this.http.post<any>(this.API_Url_DataBank+'/file',form)
  }

  postDataBankInfo(data){
    return this.http.post<Databank[]>(this.API_Url_DataBank,JSON.stringify(data),this.httpOptions)
  }

  getBankImgs(storeId){
    return this.http.get<Databank[]>(this.API_Url_DataBank+`/img/${storeId}`,this.httpOptions)
  }

  getBankVids(storeId){
    return this.http.get<Databank[]>(this.API_Url_DataBank+`/vid/${storeId}`,this.httpOptions)
  }

  getBankPdf(storeId){
    return this.http.get<Databank[]>(this.API_Url_DataBank+`/pdf/${storeId}`,this.httpOptions)
  }

  getBankRar(storeId){
    return this.http.get<Databank[]>(this.API_Url_DataBank+`/rar/${storeId}`,this.httpOptions)
  }

  getBankOther(storeId){
    return this.http.get<Databank[]>(this.API_Url_DataBank+`/other/${storeId}`,this.httpOptions)
  }

}
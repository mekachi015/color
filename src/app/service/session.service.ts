import { Injectable } from '@angular/core';
import * as CryptoJs from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private keys = "1234"


  public saveData (keys: string, data: string): void{
    localStorage.setItem(keys, this.encrypt(data));  
  }

  public getData(keys: string){
    let data = localStorage.getItem(keys) || " ";
    return this.decrypt(data)
  }

  private encrypt(txt: string): string{
    return CryptoJs.AES.encrypt(txt, this.keys).toString()
  }

  private decrypt(txtToDecrypt: string): string{
    return CryptoJs.AES.decrypt(txtToDecrypt, this.keys).toString(CryptoJs.enc.Utf8);
  }



  constructor() { }

  setItem(key:string, value: any): void{
    localStorage.setItem(key, value);
  }

  getItem(key: string): string | null{
    return localStorage.getItem(key)
  }

  removeItem(key: string): void{
    localStorage.removeItem(key)
  }

  
}

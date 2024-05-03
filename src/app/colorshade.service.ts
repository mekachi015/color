import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorshadeService  implements OnInit{

  constructor() { }

  ngOnInit(): void {
    
  }

  private loadBackgroundPreferences(): void {
    this.defaultcolor = this.getBackgroundColor();
    window.document.body.style.backgroundColor = this.getBackgroundColor()
  }
  removePreferences(): void {
    localStorage.removeItem(this.storageKey);
    this.loadBackgroundPreferences();
  }
  saveBackgroundColor(color: string): void {
    localStorage.setItem(this.storageKey, color);
    this.loadBackgroundPreferences();
  }
  private getBackgroundColor(): string {
    return localStorage.getItem(this.storageKey) || this.defaultcolor;
  }
  }
}

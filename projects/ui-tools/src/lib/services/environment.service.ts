import { Injectable } from '@angular/core';
import { THEME } from '../enums/theme.enum';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  private _theme: THEME = THEME.DARK;

  constructor() { }

  public get theme(): THEME {
    return this._theme;
  }
  public set theme(value: THEME) {
    this._theme = value;
  }
}

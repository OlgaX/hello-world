import {Injectable} from '@angular/core';

import {StorageKey} from "../models";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setObjectIntoStorage(key: StorageKey, item: object): void {
    if (key && item instanceof Object) {
      localStorage.setItem(key, JSON.stringify(item));
    }
  }

  public getObjectFromStorage(key: StorageKey): any[] {
    if (key) {
      return JSON.parse(localStorage.getItem(key))
    }
  }
}

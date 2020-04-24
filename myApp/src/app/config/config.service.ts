import { Injectable } from '@angular/core';

let keyLocalStorage = "config";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ConfigService {

  private config = {
    showSlide: false,
    user: "",
    name: ""
  }

  constructor() { }

  getConfigData() {
    return JSON.parse(localStorage.getItem(keyLocalStorage))
  }

  setConfigData(showSlide?: boolean, name?: string, user?: string) {
    let config = {
      showSlide: false,
      user: "",
      name: ""
    }

    if (showSlide)
      config.showSlide = showSlide;

    if (name)
      config.name = name;

    if (user)
      config.user = user;

    localStorage.setItem(keyLocalStorage, JSON.stringify(config))
  }
}

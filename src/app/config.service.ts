import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {   }

  config = {
    user1:{
      name: "Shaneshwar",
      email: "shaneshwarb02@hotmail.com",
      address: "Pune",
      locality: "kasarwadi",
      albm: [
        {id: 1, lablFor: "cb1", albmImage: "../assets/usr1-albm1.jpg", heading: "Album 1", albmName: "Nature"},
        {id: 2, lablFor: "cb2", albmImage: "../assets/usr1-albm2.jpg", heading: "Album 2", albmName: "Cars"},
      ]
    },
    user2:{
      name: "Shani",
      email: "shaneshwarb@hotmail.com",
      address: "PimpriChinchwad",
      locality: "Hinjewadi",
      albm: [
        {id: 1, lablFor: "cb1", albmImage: "../assets/usr1-albm1.jpg", heading: "Album 1", albmName: "Nature"},
        {id: 2, lablFor: "cb2", albmImage: "../assets/usr1-albm2.jpg", heading: "Album 2", albmName: "Cars"},
      ]
    }
  }

  getConfig(){
    return this.config;
  }
}

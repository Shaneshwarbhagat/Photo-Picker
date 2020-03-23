import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {
  album = {};
  constructor(private detail: ConfigService) { }

  ngOnInit() {
    this.album = this.getAlbum();
  }

  getAlbum(){
    return this.detail.config.user2;
  }

}

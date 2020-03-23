import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
// import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  constructor(private detail: ConfigService, private router: Router) { }

  UserDetail:any = ''
  album = {};
  // form: FormGroup;
  allowAfterSelect = true

  ngOnInit() {
    this.album = this.getAlbum();
  }

  getAlbum(){
    return this.detail.config.user1;
  }
}

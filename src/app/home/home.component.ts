import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Photo-Keeper';
  // var $: any;
  slogan= 'We keep all your photos at one place'
  description = 'One place where you can keep your all photos safely with ease of access.'

  constructor() { }

  ngOnInit() {
  }

}

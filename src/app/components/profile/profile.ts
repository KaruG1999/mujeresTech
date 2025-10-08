import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardList } from '../ui/card-list/card-list';
import { Woman } from '../../../interface/woman';
import { Profileservice } from '../../service/profileservice';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, CardList],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  womenList: Woman[] = [];

  constructor(private profileService: Profileservice) {}

  ngOnInit() {
    this.womenList = this.profileService.getWomen();
  }
  
}



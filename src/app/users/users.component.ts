import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user-class';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

userList:User[] =[];

  constructor( private userService:UsersService) { }

  ngOnInit(): void {
    console.log(this.getUsersFromAPI());

  }

   getUsersFromAPI(){
    this.userService.getUsers().subscribe((resp:any)=>{
    console.log(typeof this.userList)
    console.log(resp);
  }) 
};  
  
}


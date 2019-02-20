import { Component, OnInit } from '@angular/core';
import { GithubUsersService } from '../../dashsboard/github-users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {
  searchResult;
  selectedUser;
  clickedUser;

  constructor(private githubService: GithubUsersService,private router: Router) { }

  ngOnInit() {
    this.githubService.getUsers().subscribe(
      res => {
        this.searchResult = res;
      }
    );
  }

  handleClick(e){
    this.selectedUser = e;
    // this.githubService.getSingleUser(this.selectedUser).subscribe(
    //   res => {
    //     this.clickedUser = res;
    //     console.log(this.clickedUser);
    //   }
    // )
    
  }

}

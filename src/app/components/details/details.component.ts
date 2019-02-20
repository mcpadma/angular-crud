import { Component, OnInit, Input } from '@angular/core';
import { GithubUsersService } from '../../dashsboard/github-users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() userId: number;
  clickedUser;
  constructor(private githubService: GithubUsersService) { }

  ngOnInit() {
    
  }
  moreDetails() {
    this.githubService.getSingleUser(this.userId).subscribe(
      res => {
        this.clickedUser = res;
        console.log(this.clickedUser);
      }
    )
    console.log("more details")
  }
}

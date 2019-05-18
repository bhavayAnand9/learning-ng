import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FetchResposService } from './../fetch-respos.service';

@Component({
  selector: 'app-allrepos',
  templateUrl: './allrepos.component.html',
  styleUrls: ['./allrepos.component.css']
})
export class AllreposComponent implements OnInit {

  public userHandle: string;
  public repos = [];
  public pickedRepos = new Set();
  constructor(private route: ActivatedRoute, private _repoService :FetchResposService) { }

  ngOnInit() {
    let handle = this.route.snapshot.paramMap.get('handle');
    this.userHandle = handle;
    this._repoService.getRepos(this.userHandle).subscribe(data => this.repos = data)
  }

  pickRepo(whichRepo){
    console.log(whichRepo);
    this.repos.forEach(repo => {
      if(repo.id === whichRepo){
        this.pickedRepos.add(repo);
      }
    })
  }

}

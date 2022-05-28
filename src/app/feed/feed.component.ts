import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BdServiceService } from '../bd-service.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(
    private http: HttpClient, 
    private db: BdServiceService, 
    private popover: PopoverController) { }

  ngOnInit(): void {
    this.db.getPosts().subscribe(res => {this.posts = res});
  }

  deletePost(){
  }

  isPopoverOpen : boolean = false;

  posts : any = []}
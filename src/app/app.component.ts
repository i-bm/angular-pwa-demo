import { Component, OnInit } from '@angular/core';
import { PostService } from './service/post.service';
import { RoomService } from './service/room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-pwa-demo';
  postData: any;
  roomData: any;


  constructor(private roomService: RoomService) { }
  ngOnInit(): void {
    this.onGetRooms();
  }

  // onGetPosts(): void {
  //   let result = this.postService.getPosts()
  //   result.subscribe((data: any) => this.postData = data)
  // }

  onGetRooms(): void {
    let result = this.roomService.getRooms();
    result.subscribe((data: any) => this.roomData = data)
  }
}

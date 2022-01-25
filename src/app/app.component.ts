import { Component, OnInit } from '@angular/core';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-pwa-demo';
  postData: any;

  constructor(private postService: PostService) { }
  ngOnInit(): void {
    this.onGetPosts();
  }

  onGetPosts(): void {
    // this.postService.getPosts().subscribe(
    //   (response) => console.log(response),
    //   (error: any) => console.log(error),
    //   () => console.log('Done getting posts!')
    // );
    let result = this.postService.getPosts()
    result.subscribe((data) => this.postData = data)
  }
}

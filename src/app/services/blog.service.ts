import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private db: AngularFirestore) { }

  createPost(post: Post) {
    return new Promise(() => null);
  }

  getAllPosts(): Observable<Post[]> {
    return new Observable<Post[]>();
  }

  getPostbyId(id: string): Observable<Post> {
    return new Observable<Post>();
  }

  updatePost(postId: string, post: Post) {
    return new Promise(() => null);
  }

  deletePost(postId: string) {
    return new Promise(() => null);
  }
}

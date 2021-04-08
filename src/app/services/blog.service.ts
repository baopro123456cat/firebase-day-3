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
    // TODO 4: Implement create post using Cloud Firestore

    return new Promise(() => null);
  }

  getAllPosts(): Observable<Post[]> {
    // TODO 5: Implement get all post using Cloud Firestore
    return new Observable<Post[]>();
  }

  getPostbyId(id: string): Observable<Post> {
    // TODO 6: Implement get post by id using Cloud Firestore
    return new Observable<Post>();
  }

  updatePost(postId: string, post: Post) {
    // TODO 7: Implement update post by id using Cloud Firestore
    return new Promise(() => null);
  }

  deletePost(postId: string) {
    // TODO 8: Implement delete post by id using Cloud Firestore
    return new Promise(() => null);
  }
}

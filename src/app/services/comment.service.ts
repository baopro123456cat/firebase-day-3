import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comments } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private db: AngularFirestore) { }

  saveComment(comment: Comments) {
    return new Promise(() => null);
  }

  getAllCommentsForBlog(blogId: string): Observable<Comments[]> {
    return new Observable<Comments[]>();
  }

  deleteAllCommentForBlog(blogId: string) {
    return new Promise(() => null);
  }

  deleteSingleComment(commentId: string) {
    return new Promise(() => null);
  }
}

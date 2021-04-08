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
    // TODO 9: Implement get save comment using Cloud Firestore

    return new Promise(() => null);
  }

  getAllCommentsForBlog(blogId: string): Observable<Comments[]> {
    // TODO 10: Implement get all comment using Cloud Firestore

    return new Observable<Comments[]>();
  }

  deleteAllCommentForBlog(blogId: string) {
    // TODO 11: Implement delete all comment using Cloud Firestore

    return new Promise(() => null);
  }

  deleteSingleComment(commentId: string) {
    // TODO 12: Implement delete comment by id using Cloud Firestore

    return new Promise(() => null);
  }
}

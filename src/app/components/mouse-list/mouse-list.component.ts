import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';
import { Mouse } from '../../services/mouse';

@Component({
  selector: 'app-mouse-list',
  templateUrl: './mouse-list.component.html',
  styleUrls: ['./mouse-list.component.css']
})
export class MouseListComponent implements OnInit {
  mice: Observable<Mouse[]>;

  constructor(private afs: AngularFirestore, private router: Router, private fireService: FirestoreService) { }

  ngOnInit() {
    this.mice = this.fireService.getMice();
  }

  redirect(id: string) {
    this.router.navigate(['mouse', id]);
  }
}

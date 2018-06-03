import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';
import { Mouse } from '../../services/mouse';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {
  mouse: Observable<Mouse>;

  constructor(private afs: AngularFirestore, private fireService: FirestoreService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.mouse = this.fireService.getMouse(id);
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';
import { Mouse } from '../../services/mouse';

@Component({
  selector: 'app-add-mouse',
  templateUrl: './add-mouse.component.html',
  styleUrls: ['./add-mouse.component.css']
})
export class AddMouseComponent implements OnInit {
  newMouse: AngularFirestoreDocument<Mouse>;
  mouse: Observable<Mouse>;

  ID: string;
  owner: string;
  birthday: Date;

  constructor(private afs: AngularFirestore, private fireService: FirestoreService, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  addMouse() {
    if (this.birthday) {
      this.birthday = new Date(this.birthday);
    }
    const tempMouse: Mouse = {
      ID: this.ID,
      owner: this.owner,
      birthday: this.birthday
    };
    this.fireService.addMouse(tempMouse);
  }

}

import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Mouse } from './mouse';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  mouseCollection: AngularFirestoreCollection<Mouse>;
  mice: Observable<Mouse[]>;
  mouseDoc: AngularFirestoreDocument<Mouse>;
  mouse: Observable<Mouse>;

  constructor(private afs: AngularFirestore) {
   }

   getMice() {
      this.mouseCollection = this.afs.collection('mice');
      this.mice = this.mouseCollection.snapshotChanges().map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Mouse;
          return data;
        });
      });
     return this.mice;
   }

   addMouse(mouse: Mouse) {
    this.afs.collection('mice').doc(mouse.ID).set({
      'ID': mouse.ID,
      'birthday': mouse.birthday,
      'owner': mouse.owner
    });
   }

   deleteMouse(mouse: Mouse) {
     this.mouseDoc = this.afs.doc(`mice/${mouse.ID}`);
     this.mouseDoc.delete();
   }

   updateMouse(mouse: Mouse) {
    this.mouseDoc = this.afs.doc(`mice/${mouse.ID}`);
    this.mouseDoc.update(mouse);
   }

   getMouse(mouseID) {
    this.mouseDoc = this.afs.doc('mice/' + mouseID);
    this.mouse = this.mouseDoc.valueChanges();
    return this.mouse;
   }
}

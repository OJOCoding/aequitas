import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StaticHeaderV2Component } from '../../../common/static-header-v2/static_header_v2.component';
import { StaticFooterV2Component } from '../../../common/static-footer-v2/static_footer_v2.component';
import { FormsModule, NgForm } from '@angular/forms';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, query, where, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth_service'
@Component({
  selector: 'simple-auth',
  standalone: true,
  imports: [
    RouterModule, CommonModule,
    StaticHeaderV2Component,
    StaticFooterV2Component,
    FormsModule,MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './simple_auth.component.html',
  styleUrl: './simple_auth.component.css'
})
export class SimpleAuthenticationComponent {
  hide = true;
  userData!: Observable<any>;
  constructor(private firestore: Firestore, private router: Router, private authService: AuthService) {
    this.getData();
  }
  
  simplelogin(f: NgForm): void {
    console.log('Submitting Form:', f.value);  // Check what is being submitted
    const collectionInstance = collection(this.firestore, 'users');
    addDoc(collectionInstance, f.value).then(() => {
      console.log('Data Saved Successfully');
    }).catch((err) => {
      console.error('Error saving data: ', err);
    });
  }
   
  getData() {
    const collectionInstance = collection(this.firestore, 'users');
    this.userData = collectionData(collectionInstance, { idField: 'id' });
    this.userData.subscribe(val => {
      console.log(val);
    });
  }

  updateData(id:string){
    const docInstance = doc(this.firestore, 'users', id);
    const updateData = {
      username: 'testr'
    }

    updateDoc(docInstance, updateData).then(() => {
      console.log('Data updated Successfully');
    }).catch((err) => {
      console.error('Error updating data: ', err);
    });

  }
  
  simpleloginform(f: NgForm): void {
    const username = f.value.username;
    const password = f.value.password;
    const usersCollection = collection(this.firestore, 'users');
    const q = query(usersCollection, where('username', '==', username), where('password', '==', password));

    getDocs(q).then((querySnapshot) => {
      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        const userId = userData['ID'];

        this.authService.login(userId);

        this.router.navigate(['/account']);
      } else {
        console.log('User not found or incorrect credentials');
      }
    }).catch((error) => {
      console.error('Error searching for user:', error);
    });
  }
}

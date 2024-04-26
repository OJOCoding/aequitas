import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicHeaderComponent } from '../../../../common/dynamic-header/dynamic_header.component';
import { StaticFooterV2Component } from '../../../../common/static-footer-v2/static_footer_v2.component';
import { AccountMenuComponent } from '../../../../common/menu/account_menu.component';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../../../../services/auth_service';
import { DocumentSnapshot, Firestore, collection, doc, getDoc, getDocs, query, updateDoc, where } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'profile-edit',
  standalone: true,
  imports: [RouterModule, CommonModule, DynamicHeaderComponent, StaticFooterV2Component, AccountMenuComponent,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl:'./profile_edit.component.html',
  styleUrl: './profile_edit.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})export class ProfileEditComponent implements OnInit {
  reqFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  userData: any;
  profileForm!: FormGroup; // Use '!' to indicate that profileForm will be initialized in ngOnInit

  constructor(private router: Router,private snackBar: MatSnackBar,private authService: AuthService, private firestore: Firestore) { }

  ngOnInit(): void {
    this.fetchUserData();
    this.initializeForm();
  }

  async fetchUserData(): Promise<void> {
    const userId = this.authService.getUserId();
  
    if (!userId) {
      console.error('User ID is null');
      return;
    }
  
    const userQuery = query(collection(this.firestore, 'customers'), where('ID', '==', userId));
  
    try {
      const userSnapshot = await getDocs(userQuery);
      if (!userSnapshot.empty) {
        userSnapshot.forEach(doc => {
          this.userData = { id: doc.id, ...doc.data() };
          this.populateForm();
        });
      } else {
        console.error('User data does not exist');
        // Handle the case where user data does not exist, such as displaying an error message to the user
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Handle the error, such as displaying an error message to the user
    }
  }

  initializeForm(): void {
    this.profileForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  populateForm(): void {
    if (this.userData) {
      this.profileForm.patchValue({
        fullName: this.userData.cust_name || '',
        address: this.userData.cust_address || '',
        phoneNumber: this.userData.cust_phone || '',
        email: this.userData.cust_email || ''
      });
    }
  }
  onSubmit(): void {
    if (this.profileForm?.valid) { 
      const userId = this.authService.getUserId();
      if (!userId) {
        console.error('User ID is null');
        return;
      }
  
      const userQuery = query(collection(this.firestore, 'customers'), where('ID', '==', userId));
  
      getDocs(userQuery).then(querySnapshot => {
        querySnapshot.forEach(queryDocumentSnapshot => {
          const userDocRef = doc(this.firestore, 'customers', queryDocumentSnapshot.id);
          const updatedData = {
            cust_name: this.profileForm.value.fullName,
            cust_address: this.profileForm.value.address,
            cust_phone: this.profileForm.value.phoneNumber,
            cust_email: this.profileForm.value.email
          };
  
        
          updateDoc(userDocRef, updatedData)
          .then(() => {
            console.log('Data updated successfully');
            this.openSnackBar('Profile updated successfully');
            this.router.navigate(['/profile']);
          })
          .catch((error) => {
            console.error('Error updating data:', error);
          });
      });
    }).catch(error => {
      console.error('Error fetching user document:', error);
    });
  }
}

openSnackBar(message: string): void {
  this.snackBar.open(message, 'Close', {
    duration: 2000, // Duration in milliseconds
    verticalPosition: 'top', // Position top
    horizontalPosition: 'center', // Center horizontally
  });
}}
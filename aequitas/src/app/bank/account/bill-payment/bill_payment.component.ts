import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicHeaderComponent } from '../../../common/dynamic-header/dynamic_header.component';
import { StaticFooterV2Component } from '../../../common/static-footer-v2/static_footer_v2.component';
import { AccountMenuComponent } from '../../../common/menu/account_menu.component';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TransactionService } from '../../../services/transfer';
import { AuthService } from '../../../services/auth_service';
import { Firestore, Timestamp, addDoc, collection } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'bill-payment',
  standalone: true,
  imports: [RouterModule, DynamicHeaderComponent, StaticFooterV2Component, AccountMenuComponent,FormsModule, MatFormFieldModule,CommonModule, MatInputModule, ReactiveFormsModule],
  templateUrl:'./bill_payment.component.html',
  styleUrl: './bill_payment.component.css'
})
export class BillPaymentComponent {
  amountFormControl = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  descriptionFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required]);
  accountIdFormControl = new FormControl('', [Validators.required]); // Account ID for recipient

  constructor(private firestore: Firestore, private authService: AuthService) {}

  async transfer(f: NgForm): Promise<void> {
    console.log('Submitting Form:', f.value);
    if (f.valid) {
      const userId = await this.authService.getUserId(); // Fetching user ID, assuming it returns a Promise
      if (!userId) {
        console.error('User ID is required but not available');
        return;
      }

      const transferData = {
        ID: userId,  // Sender's ID from AuthService
        Rec_ID: this.nameFormControl.value,  // Recipient ID from form input
        Amount: this.amountFormControl.value,
        Description: this.descriptionFormControl.value,
        Date: Timestamp.fromDate(new Date()),  // Current timestamp
        TR_ID: this.generateTransactionId()  // Generate transaction ID
      };

      const collectionInstance = collection(this.firestore, 'transfers');
      addDoc(collectionInstance, transferData).then(() => {
        console.log('Transfer recorded successfully');
        f.resetForm();  // Reset the form after successful submission
      }).catch((error) => {
        console.error('Error recording transfer:', error);
      });
    } else {
      console.error('Form is invalid');
    }
  }

  private generateTransactionId(): string {
    // Simple random ID generator; adapt as needed for your use case
    return 'TR_' + Math.floor(100000 + Math.random() * 900000);
  }
}
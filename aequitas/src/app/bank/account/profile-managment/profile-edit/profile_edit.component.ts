import { Component } from '@angular/core';
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
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'profile-edit',
  standalone: true,
  imports: [RouterModule, DynamicHeaderComponent, StaticFooterV2Component, AccountMenuComponent,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl:'./profile_edit.component.html',
  styleUrl: './profile_edit.component.css'
})
export class ProfileEditComponent {
  reqFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}

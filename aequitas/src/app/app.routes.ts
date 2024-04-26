// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/aequitas-landing/home.component';
import { WebAccComponent } from './home/aequitas-web-acc/web_acc.component';
import { WebFontComponent } from './home/aequitas-font-acc/web_font.component';
import { WebColorComponent } from './home/aequitas-colors-acc/web_color.component';
import { DigitalSignatureComponent } from './bank/login_forms/digital-signature-login/digital_s.component';
import { AccountComponent } from './bank/account/account/account.component';
import { HistoryComponent } from './bank/account/transfer-history/history.component';
import { MoneyTransferComponent } from './bank/account/transfer/transfer.component';
import { BillPaymentComponent } from './bank/account/bill-payment/bill_payment.component';
import { ProfileComponent } from './bank/account/profile-managment/profile/profile.component';
import { ProfileEditComponent } from './bank/account/profile-managment/profile-edit/profile_edit.component';
import { AEAIV2Component } from './bank/account/aeai/aeai_v2.component';
import { AEAIV1Component } from './home/aequitas-aeai/aeai_v1.component';
import { title } from 'process';
import { SimpleAuthenticationComponent } from './bank/login_forms/simple-login/simple_auth.component';
import { AuthGuard } from './services/auth_guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Aequitas Bank'
    },
    {
        path: 'web-acc',
        component: WebAccComponent,
        title: 'Web Accessibility'
    },
    {
        path: 'font-acc',
        component: WebFontComponent,
        title: 'Font Accessibility'
    },
    {
        path: 'colors-acc',
        component: WebColorComponent,
        title: 'Colors Accessibility'
    },
    {
        path: 'digital-s',
        component: DigitalSignatureComponent,
        title: 'Login Digital Signature Version'
    },
    {
        path: 'simple-auth',
        component: SimpleAuthenticationComponent,
        title: 'Login Simple Authentication Version'
    },
    {
        path: 'account',
        component: AccountComponent,
        title: 'Account Details', 
        canActivate: [AuthGuard]
    },
    {
        path: 'history',
        component: HistoryComponent,
        title: 'Transfer History', 
        canActivate: [AuthGuard]
    },
    {
        path: 'transfer',
        component: MoneyTransferComponent,
        title: 'Money Transfer', 
        canActivate: [AuthGuard]
    },
    {
        path: 'bill-payment',
        component: BillPaymentComponent,
        title: 'Bill Payment', 
        canActivate: [AuthGuard]
    },
    {
        path: 'aeai-v1',
        component: AEAIV1Component,
        title: 'AEAI'
    },
    {
        path: 'aeai-v2',
        component: AEAIV2Component,
        title: 'Account AEAI', 
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile', 
        canActivate: [AuthGuard]
    },
    {
        path: 'profile-edit',
        component: ProfileEditComponent,
        title: 'Profile Edit', 
        canActivate: [AuthGuard]
    }
];

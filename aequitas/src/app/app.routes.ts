// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebAccComponent } from './home/web_acc.component';
import { WebFontComponent } from './home/web_font.component';
import { WebColorComponent } from './home/web_color.component';
import { DualAuthenticationComponent } from './bank/login_forms/dual_auth.component';
import { DigitalSignatureComponent } from './bank/login_forms/digital_s.component';
import { AccountComponent } from './bank/account/account.component';
import { HistoryComponent } from './bank/account/history.component';
import { MoneyTransferComponent } from './bank/account/transfer.component';
import { BillPaymentComponent } from './bank/account/bill_payment.component';
import { ProfileComponent } from './bank/account/profile.component';
import { ProfileEditComponent } from './bank/account/profile_edit.component';
import { AEAIV2Component } from './bank/account/aeai_v2.component';
import { AEAIV1Component } from './home/aeai_v1.component';
import { title } from 'process';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        title:'Aequitas Bank'
    },
    {
        path:'web-acc',
        component: WebAccComponent,
        title:'Web Accessibility'
    },
    {
        path:'font-acc',
        component: WebFontComponent,
        title:'Font Accessibility'
    },
    {
        path:'colors-acc',
        component: WebColorComponent,
        title:'Colors Accessibility'
    },
    {
        path:'digital-s',
        component: DigitalSignatureComponent,
        title:'Login DS Version'
    },
    {
        path:'dual-auth',
        component: DualAuthenticationComponent,
        title:'Login DA Version'
    },
    {
        path:'account',
        component: AccountComponent,
        title:'Account Details'
    },
    {
        path:'history',
        component: HistoryComponent,
        title:'Transfer History'
    },
    {
        path:'transfer',
        component: MoneyTransferComponent,
        title:'Money Transfer'
    },
    {
        path:'bill-payment',
        component: BillPaymentComponent,
        title:'Bill Payment'
    },
    {
        path:'aeai-v1',
        component: AEAIV1Component,
        title:'AEAI'
    },
    {
        path:'aeai-v2',
        component: AEAIV2Component,
        title:'Account AEAI'
    },
    {
        path:'profile',
        component: ProfileComponent,
        title:'Profile'
    },
    {
        path:'profile-edit',
        component: ProfileEditComponent,
        title:'Profile Edit'
    }
];

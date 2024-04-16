// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebAccComponent } from './home/web_acc.component';
import { WebFontComponent } from './home/web_font.component';
import { WebColorComponent } from './home/web_color.component';
import { DualAuthenticationComponent } from './bank/login_forms/dual_auth.component';
import { DigitalSignatureComponent } from './bank/login_forms/digital_s.component';
import { AccountComponent } from './bank/account/account.component';


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
        title:'Account'
    }
];

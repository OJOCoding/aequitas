// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebAccComponent } from './home/web_acc.component';
import { WebFontComponent } from './home/web_font.component';
import { WebColorComponent } from './home/web_color.component';


export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        title:'Aequitas Bank'
    },
    {
        path:'web-acc',
        component:WebAccComponent,
        title:'Web Acc'
        

    }
];

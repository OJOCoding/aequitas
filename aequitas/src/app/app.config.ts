//app.config.ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from "./app.routes";
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"aequitas-thesis","appId":"1:231212109086:web:a2b790e4a8e76563bf8d0f","databaseURL":"https://aequitas-thesis-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"aequitas-thesis.appspot.com","apiKey":"AIzaSyDYkHo-AVcyUn963ZgBg-xfxVEr3nss-OM","authDomain":"aequitas-thesis.firebaseapp.com","messagingSenderId":"231212109086","measurementId":"G-R90NBZVHDW"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};

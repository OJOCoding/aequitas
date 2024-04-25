import { Injectable } from '@angular/core';
import { Firestore, collection, doc, getDoc, getDocs, query, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userId: string | null = null;

  constructor(private firestore: Firestore) { }

  login(userId: string) {
    this.userId = userId;
    localStorage.setItem('userId', userId);
  }
  
  logout() {
    this.userId = null;
    localStorage.removeItem('userId');
  }
  
  getUserId(): string | null {
    return this.userId || localStorage.getItem('userId');
  }
  async getUserDetailsById(userId: string | null): Promise<any> {
    try {
      if (!userId) {
        console.error('User ID is null');
        return null;
      }

      // Query the "customers" collection where the "ID" field matches the provided userId
      const q = query(collection(this.firestore, 'customers'), where('ID', '==', userId));
      const querySnapshot = await getDocs(q);

      // Assuming there's only one document that matches the query
      if (!querySnapshot.empty) {
        // Extract the user's name from the first document found
        const doc = querySnapshot.docs[0];
        return doc.data()['cust_name'];
      } else {
        console.error('User details not found');
        return null;
      }
    } catch (error) {
      console.error('Error getting user details:', error);
      return null;
    }
  }
  async getUserAccountDetailsById(userId: string | null): Promise<any[]> {
    try {
        if (!userId) {
            console.error('User ID is null');
            return [];
        }

        // Query the "accounts" collection where the "ID" field matches the provided userId
        const q = query(collection(this.firestore, 'account'), where('ID', '==', userId));
        const querySnapshot = await getDocs(q);

        // Extract account details from each document in the query snapshot
        const accountDetails: any[] = [];
        querySnapshot.forEach(doc => {
            const data = doc.data();
            accountDetails.push({
                id: doc.id,
                ...data
            });
        });

        if (accountDetails.length > 0) {
            return accountDetails;
        } else {
            console.error('Account documents not found');
            return [];
        }
    } catch (error) {
        console.error('Error getting account details:', error);
        return [];
    }
}

}
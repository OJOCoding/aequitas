import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private firestore: Firestore) {}

  // Function to generate transaction ID
  private generateTransactionId(): string {
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // Generates a random number between 100000 and 999999
    return `TR_${randomNumber}`;
  }

  // Function to perform a money transfer
  async transferMoney(accountId: string, recipientId: string, amount: number, description: string): Promise<any> {
    const transactionId = this.generateTransactionId(); // Generate a unique transaction ID
    const transferData = {
      Amount: amount,
      Date: new Date(), // Captures the current date and time
      Description: description,
      ID: accountId, // Sender's account ID
      Rec_ID: recipientId, // Recipient's account ID
      TR_ID: transactionId // Unique transaction ID
    };

    try {
      const docRef = await addDoc(collection(this.firestore, 'transfers'), transferData);
      console.log('Transfer recorded with ID:', docRef.id);
      return docRef;
    } catch (error) {
      console.error('Error adding document: ', error);
      throw error; // Re-throw the error to handle it in the component
    }
  }
}

# Aequitas: An Inclusive Online Banking Platform

## Overview
**Aequitas** is a groundbreaking project designed as part of a bachelor's thesis to optimize the online banking experience. The platform emphasizes inclusivity, accessibility, and security, offering an equitable digital banking environment for all users, including senior citizens and individuals with disabilities.

This thesis-driven project features an accessible user interface, robust security measures leveraging digital signatures, and a Machine Learning (ML)-powered chatbot to redefine user experience. The project is hosted at [Aequitas Banking Platform](https://aequitas-thesis.web.app/).

## Features
### Inclusivity and Accessibility
- **WCAG Compliance:** Adheres to Web Content Accessibility Guidelines to ensure universal access.
- **Assistive Features:** Includes ARIA tags, keyboard shortcuts, text-to-speech, and adaptable content for seamless navigation.
- **Accessible Design:** Designed using Figma with features that cater to users with visual, auditory, or motor impairments.

### Advanced Security
- **Digital Signatures:** Utilizes RSA-based digital signatures for user authentication.
- **Backup Authentication:** Provides a fallback login mechanism for additional security.
- **Encrypted Data:** Employs secure data transfer and storage practices to protect sensitive information.

### AI-Powered Chatbot
- **Dialogflow Integration:** Offers real-time, intelligent responses to user queries.
- **Custom FAQ Dataset:** Supports personalized assistance for common banking needs such as balance inquiries, transaction history, and bill payments.

### Modern Web Development
- **Framework:** Built with Angular and Angular Material.
- **Database:** Firebase Firestore ensures real-time synchronization and scalability.
- **Responsive Design:** Provides a seamless experience across all devices.

## Technologies Used
- **Frontend:** Angular, Angular Material
- **Backend:** Firebase Firestore
- **Chatbot:** Google Dialogflow
- **Security:** RSA-based digital signatures with Web Crypto API and Forge library
- **Design:** Figma, Fontjoy, Palett.es

## Project Structure
```plaintext
Aequitas/
├── src/
│   ├── app/                  # Angular components and services
│   ├── assets/               # Images and static files
│   ├── environments/         # Environment configuration
├── firebase.json             # Firebase configuration
├── README.md                 # Project documentation
└── LICENSE                   # License file
```

## Key Components
1. **Landing Page:** Provides an overview and navigation to various sections.
2. **Authentication:** Digital signature-based and fallback login mechanisms.
3. **Banking Features:**
   - Account management
   - Transaction history
   - Money transfers
   - Bill payments
4. **Chatbot Assistance:** Personalized guidance and query resolution.

## Testing and Evaluation
- **Accessibility Testing:** Conducted using Google Lighthouse and WAVE.
- **Security Validation:** Ensured through cryptographic analysis and system robustness tests.
- **User Feedback:** Surveys conducted with diverse user groups for qualitative insights.

## License
This project is licensed under the **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License**. For more information, see the [LICENSE](LICENSE) file.

## Contact
For inquiries and further information:
- **Author:** Oni Luca
- **Email:** [oniluca@ymail.com](mailto:oniluca@ymail.com)
- **Thesis Supervisor:** Mr. Christos Christodoulou, American College of Thessaloniki

---

Aequitas aims to bridge the digital divide by fostering inclusivity and security in online banking, making financial autonomy accessible to all.

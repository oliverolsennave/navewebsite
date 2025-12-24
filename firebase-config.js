// ==========================================================================
// Firebase Configuration
// ==========================================================================
// 
// INSTRUCTIONS:
// 1. Go to your Firebase Console: https://console.firebase.google.com/
// 2. Select your project (or create one)
// 3. Go to Project Settings > General > Your apps
// 4. If you haven't added a web app, click "Add app" and select Web
// 5. Copy your config values below
// 6. Make sure Firestore is enabled in your Firebase project
//
// ==========================================================================

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Your Firebase configuration
// TODO: Replace these placeholder values with your actual Firebase config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };


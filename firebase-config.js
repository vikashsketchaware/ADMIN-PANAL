// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAVnGsxVsDuiZnkyWoZE5mhl5DD0ubre7I",
  authDomain: "admin-project-f3876.firebaseapp.com",
  databaseURL: "https://admin-project-f3876-default-rtdb.firebaseio.com",
  projectId: "admin-project-f3876",
  storageBucket: "admin-project-f3876.firebasestorage.app",
  messagingSenderId: "445320042635",
  appId: "1:445320042635:web:86f74da33d1048e9f61c8e",
  measurementId: "G-SPEJN0P4T5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };
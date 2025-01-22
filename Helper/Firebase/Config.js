import { getDatabase } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAWPFMCKsAl19lcYON1phFSaEwph47Hv84",
  authDomain: "billing-statement-b8497.firebaseapp.com",
  databaseURL: "https://billing-statement-b8497-default-rtdb.firebaseio.com",
  projectId: "billing-statement-b8497",
  storageBucket: "billing-statement-b8497.firebasestorage.app",
  messagingSenderId: "721475696122",
  appId: "1:721475696122:web:7675a8fed8dff7b19ce043",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

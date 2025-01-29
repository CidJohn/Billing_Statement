import { getDatabase } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
import {
  initializeApp,
  getApps,
  getApp,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

let app;

const firebaseConfig = {
  apiKey: "AIzaSyAWPFMCKsAl19lcYON1phFSaEwph47Hv84",
  authDomain: "billing-statement-b8497.firebaseapp.com",
  databaseURL: "https://billing-statement-b8497-default-rtdb.firebaseio.com",
  projectId: "billing-statement-b8497",
  storageBucket: "billing-statement-b8497.firebasestorage.app",
  messagingSenderId: "721475696122",
  appId: "1:721475696122:web:7675a8fed8dff7b19ce043",
};

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const database = getDatabase(app);
const authFire = getAuth(app);

export { database, authFire };

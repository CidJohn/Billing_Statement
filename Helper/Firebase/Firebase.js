import {
  ref,
  push,
  set,
  onValue,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
import { database } from "./Config.js";

export const BillingStatement = (data, dbName) => {
  const stmtRef = ref(database, dbName);
  const newStmtRef = push(stmtRef);

  set(newStmtRef, data)
    .then(() => alert("Billing Statement Added Successfully!"))
    .catch((err) => console.error("Error Saving:", err));
};

export const getBillingStatement = (dbName) => {
  // const stmtRef = ref(database, dbName);

  // onValue(stmtRef, (snapshot) => {
  //   const data = snapshot.val();
  //   for (const [key, value] of Object.entries(data)) {
  //     getStorage.push(value);
  //   }
  // });
  // return getStorage
  return new Promise((resolve, reject) => {
    const stmtRef = ref(database, dbName);
    onValue(
      stmtRef,
      (response) => {
        const res = response.val();
        if (res) {
          const getStorage = [];
          for (const [key, value] of Object.entries(res)) {
            getStorage.push(value);
          }
          resolve(getStorage);
        } else {
          resolve([]);
        }
      },
      (err) => {
        reject(err);
      }
    );
  });
};

export function updateBillingStatement(id, dbName, updatedStatement) {
  const statementRef = ref(database, `${dbName}/${id}`);

  update(statementRef, updatedStatement)
    .then(() => alert("Billing statement updated successfully!"))
    .catch((error) => console.error("Error updating statement:", error));
}

export function deleteBillingStatement(id, dbName) {
  const statementRef = ref(database, `${dbName}/${id}`);
  remove(statementRef)
    .then(() => alert("Billing statement deleted successfully!"))
    .catch((error) => console.error("Error deleting statement:", error));
}

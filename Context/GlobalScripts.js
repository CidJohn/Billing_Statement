import { frmTexline } from "../Content/frmTexline.js";
import { loginTextline } from "../Content/loginTextline.js";
import { sampleTable } from "../Content/sampleTable.js";
import { authFire } from "../Helper/Firebase/Config.js";
import {
  BillingStatement,
  getBillingStatement,
} from "../Helper/Firebase/Firebase.js";
import LocalStore from "../Helper/Storage/LocalStore.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

let loginInput = {};
let formBilling = [];
let chkRemember = false;
let hdDetails = [];
let handleTableValue = [];
export const handleLoginText = (e) => {
  const id = e.target.id;
  const value = e.target.value;

  loginTextline.map((item) => {
    if (item.idName === id) loginInput[id] = value;
  });
};

export const handleRemember = (e) => {
  const checked = e.target.checked;
  chkRemember = checked;
};

export const handleFormLogin = async (e) => {
  e.preventDefault();
  try {
    const userCredential = await signInWithEmailAndPassword(
      authFire,
      loginInput.uname,
      loginInput.pass
    );
    const user = userCredential.user;

    const storage = new LocalStore("status", chkRemember);
    storage.Create("active");

    const userStorage = new LocalStore("userData", chkRemember);
    userStorage.Create({ uname: user.email, uid: user.uid });

    alert("Login successful!");
    window.location.reload();
    return;
  } catch (firebaseError) {
    console.error("Firebase login failed:", firebaseError.message);
  }
};

export const handleTextline = (e) => {
  const value = e.target.value;
  const id = e.target.id;

  frmTexline.forEach((item) => {
    if (item.text) {
      item.text.forEach((txtForms) => {
        if (txtForms.idName === id) {
          formBilling[id] = value;
        }
      });
    }
  });
};

export const handleFrmMngmt = (e) => {
  const dtFrom = $("#dtFrom").val();
  const dtTo = $("#dtTo").val();
  const noBilling = $("#noBilling").val();
  formBilling = { ...formBilling, dtFrom, dtTo, noBilling };
  BillingStatement(formBilling, "billingStatement");
  window.location.hash = "/statements";
};
let stateData = [];

export const handleOnEdit = async (item) => {
  $(".modal-cont").css({
    display: "flex",
  });
  hdDetails = {
    noBilling: item.noBilling,
    dtBilling: item.dtBilling,
    dtFrom: item.dtFrom,
    dtTo: item.dtTo,
    txtPlate: item.txtPlate,
    txtDriverName: item.txtDriverName,
    txtAssignedRoute: item.txtAssignedRoute,
  };
  const tableValue = await getBillingStatement("tableValue");
  const filterName = `${item.dtBilling}_${item.txtDriverName.replace(
    " ",
    "_"
  )}`;
  const keyValue =
    tableValue.find((item) => Object.keys(item)[0] === filterName) || [];

  const tableData = keyValue[filterName] ? keyValue[filterName] : [];
  if (tableData.length > 0) {
    stateData = tableData;
    setTimeout(() => {
      const btnSave = document.getElementById("btnSave");
      if (btnSave) {
        btnSave.innerText = "Update";
        btnSave.style.display = "none";
      }
    }, 1000);
  } else {
    let from = new Date(item.dtFrom);
    let to = new Date(item.dtTo);
    const daysDiff = Math.ceil((to - from) / (1000 * 60 * 60 * 24));

    for (let i = 0; i <= daysDiff; i++) {
      const currentDate = new Date(from);
      currentDate.setDate(from.getDate() + i);

      if (currentDate.getDay() !== 0) {
        const date = currentDate.toISOString().split("T")[0];
        const Data = {
          Date: date,
          Incoming: item.txtAssignedRoute,
          "Time In": item.txtTimeIn,
          Outgoing: item.txtAssignedRoute,
          "Time out": item.txtTimeOut,
          "No. of trip": item.txtTrip,
          Amount: item.txtAmount,
        };
        stateData.push(Data);
      }
    }
  }
};

export const stateRow = () => {
  return stateData;
};

export const handlePrint = () => {
  $("#btnClose").replaceWith("<div></div>");
  $(".navbar-ui").hide();
  $("#btnCont").hide();

  window.print();
};

export const handleOnDelete = (item) => {
  console.log(item);
};

export const details = () => {
  return hdDetails;
};

export const handleSave = (id) => {
  const { col } = sampleTable;
  const tableId = id.replace(/\s+/g, "_");
  const toSaveTable = [];
  $("tr").each(function (rowIndex) {
    let rowData = {};

    $(this)
      .find(".class-field-text")
      .each(function (colIndex) {
        const header = col[colIndex].replace(/\s+/g, "_").replace(".", "");
        const value = $(this).val() || "";
        rowData[header] = value;
      });

    if (Object.keys(rowData).length > 0) {
      handleTableValue.push(rowData);
    }
  });
  toSaveTable[tableId] = handleTableValue;
  BillingStatement(toSaveTable, "tableValue");
  // console.log(toSaveTable);
};

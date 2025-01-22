import { frmTexline } from "../Content/frmTexline.js";
import { defaultUsers, loginTextline } from "../Content/loginTextline.js";
import { BillingStatement } from "../Helper/Firebase/Firebase.js";
import LocalStore from "../Helper/Storage/LocalStore.js";

let loginInput = {};
let formBilling = [];
let chkRemember = false;

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

export const handleFormLogin = (e) => {
  const userLogin = defaultUsers.find(
    (item) => item.uname === loginInput.uname && item.pass === loginInput.pass
  );
  if (!userLogin) {
    return alert("Wrong Username or Password!");
  }
  const storage = new LocalStore("status", chkRemember);
  storage.Create("active");
  const userStorage = new LocalStore("userData", chkRemember);
  userStorage.Create(userLogin);
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
  // e.preventDefault();
  const dtFrom = $("#dtFrom").val();
  const dtTo = $("#dtTo").val();
  formBilling = { ...formBilling, dtFrom, dtTo };
  BillingStatement(formBilling, "billingStatement");
  window.location.hash = "/statements";
};

export const handleOnEdit = (item) => {
  console.log(item);
};

export const handleOnDelete = (item) => {
  console.log(item);
};

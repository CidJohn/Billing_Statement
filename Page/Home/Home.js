import DocCreate from "../../Helper/DocCreate.js";
import Local from "../../Helper/Storage/local.js";
import { handleFrmMngmt } from "../../Context/GlobalScripts.js";
import { frmTexline } from "../../Content/frmTexline.js";
import HomeScript from "./HomeScript.js";
import { getBillingStatement } from "../../Helper/Firebase/Firebase.js";
// import Table from "../../Components/Table/Table.js";
// import { sampleTable } from "../../Content/sampleTable.js";

function Home(container) {
  const userStorage = new Local("userData");
  const credetial = userStorage.Read();
  const username = credetial.map((item) => item.uname);
  const url = new URL(window.location.href);
  url.search = "";
  window.history.replaceState({}, document.title, url.toString());

  const home = new DocCreate(container, "div");
  const mainHome = home.div("home", "hd-home", " ");

  const header = new DocCreate(mainHome, "div");
  const formField = new DocCreate(mainHome, "div");

  header.div("", "hd-title", `Statement of Account Form`);
  header.div("", "hd-username", `Welcome User ${username}`);
  const frmField = formField.div("frmCont", "frm-cont", "");

  const frmInput = new DocCreate(frmField, "form");

  const form = frmInput.forms(
    "frmMngmt",
    "frm-mngmt",
    null,
    null,
    handleFrmMngmt
  );

  frmTexline.map((item) => {
    const frmGroup = new DocCreate(form, "div");
    const frmGroupOne = frmGroup.div("", item.div, "");
    const txtFormOne = new DocCreate(frmGroupOne, "input");
    const lblFormOne = new DocCreate(frmGroupOne, "div");
    const FormOne2 = new DocCreate(frmGroupOne, "div");
    const FormOne3 = new DocCreate(frmGroupOne, "div");

    if (item.text) {
      item.text.map((txtItem) => {
        lblFormOne.div("", "frms-label", `${txtItem.label}:`);
        txtFormOne.textline(
          txtItem.type,
          txtItem.idName,
          txtItem.classlist,
          txtItem.placeholder,
          txtItem.req,
          txtItem.value,
          txtItem.handleLoginText
        );
        if (txtItem.dateInput) {
          const date = FormOne2.div("", "frms-fromto", ``);
          const txtFormOne2 = new DocCreate(date, "input");
          const lblFormOne2 = new DocCreate(date, "div");

          txtItem.dateInput.map((dateItem) => {
            lblFormOne2.div("", "frms-label", `${dateItem.subLabel}:`);
            txtFormOne2.textline(
              dateItem.type,
              dateItem.idName,
              dateItem.classlist,
              dateItem.placeholder,
              dateItem.req,
              dateItem.value,
              dateItem.handleLoginText
            );
          });
        }
      });
      if (item.btn) {
        item.btn.map((btnItem) => {
          const btnDiv = FormOne3.div("", "frm-btn", "");
          const btn = new DocCreate(btnDiv, "button");
          btn.button(
            btnItem.type,
            btnItem.idName,
            btnItem.classList,
            "",
            btnItem.textContent
          );
        });
      }
    }
  });
  // const { col, row } = sampleTable[0];
  // const disCol = ["Date", "Incoming", "Outgoing"];
  // Table(frmField, col, row, disCol);
  //let row = [];
  getBillingStatement("billingStatement", (data) => {
    const i = new Date();
    for (const [key, value] of Object.entries(data)) {
      // let from = new Date(value.dtFrom);
      // let to = new Date(value.dtTo);
      // const daysDiff = Math.ceil((to - from) / (1000 * 60 * 60 * 24));
      // for (let i = 0; i <= daysDiff; i++) {
      //   const currentDate = new Date(from);
      //   currentDate.setDate(from.getDate() + i);
      //   //console.log(currentDate.toISOString().split("T")[0]);
      // }
    }
  });
 // console.log(row);

  HomeScript();
  return home.element;
}

export default Home;

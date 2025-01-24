import List from "../../Components/List/List.js";
import Modal from "../../Components/Modal/Modal.js";
import {
  handleOnDelete,
  handleOnEdit,
  stateRow,
  handlePrint,
  details,
} from "../../Context/GlobalScripts.js";
import DocCreate from "../../Helper/DocCreate.js";
import { getBillingStatement } from "../../Helper/Firebase/Firebase.js";
import Table from "../../Components/Table/Table.js";
import { sampleTable } from "../../Content/sampleTable.js";
import { FormatDate } from "../../Helper/CurrentDate.js";

async function Statement(container) {
  const url = new URL(window.location.href);
  url.search = "";
  window.history.replaceState({}, document.title, url.toString());
  const divState = new DocCreate(container, "div");

  const state = divState.div("state", "main-state");

  const titleDiv = new DocCreate(state, "div");
  titleDiv.div("", "hd-title", "Billing Statement List");

  // const { col, row } = sampleTable[0];
  // const disCol = ["Date", "Incoming", "Outgoing"];
  // Table(frmField, col, row, disCol);

  const row = await getBillingStatement("billingStatement");

  List(state, row, handleOnEdit, handleOnDelete);

  const body = Modal(state);
  const { col, disCol } = sampleTable;
  setTimeout(() => {
    if (stateRow.length > 0) {
      const {
        noBilling,
        dtBilling,
        dtFrom,
        dtTo,
        txtPlate,
        txtDriverName,
        txtAssignedRoute,
      } = details();
      const { fromToFormatted, billingDateFormatted } = FormatDate(
        dtBilling,
        dtFrom,
        dtTo
      );
      const detailsDiv = new DocCreate(body, "div");
      const infoDiv = detailsDiv.div("", "info-cont", "");
      const twrDiv = new DocCreate(infoDiv, "div");
      const col1 = twrDiv.div("", "header-info", "");
      const col2 = twrDiv.div("", "header-info2", "");

      const divs = new DocCreate(col1, "div");
      const billing = divs.div("", "billing-no", "");
      const billingDivs = new DocCreate(billing, "p");
      billingDivs.div("", "", "Billing No.: ");
      billingDivs.div("#billingNo", "", noBilling);
      const billingDate = divs.div("", "billing-date", "");
      const billingDivDate = new DocCreate(billingDate, "p");
      billingDivDate.div("", "", "Billing Date: ");
      billingDivDate.div("#billingDate", "", billingDateFormatted);
      const billingPrd = divs.div("", "billing-prd", "");
      const billingDivPrd = new DocCreate(billingPrd, "p");
      billingDivPrd.div("", "", "Billing Period: ");
      billingDivPrd.div("#billingPrd", "", fromToFormatted);

      const divs2 = new DocCreate(col2, "div");
      const plateNo = divs2.div("", "plate-no", "");
      const plateNoDiv = new DocCreate(plateNo, "p");
      plateNoDiv.div("", "", "Plate No: ");
      plateNoDiv.div("#plateNo", "", txtPlate);

      const dname = divs2.div("", "driver-name", "");
      const dnameDiv = new DocCreate(dname, "p");
      dnameDiv.div("", "", "Driver Name: ");
      dnameDiv.div("#dname", "", txtDriverName);

      const assignRoute = divs2.div("", "assign-route", "");
      const assignRouteDiv = new DocCreate(assignRoute, "p");
      assignRouteDiv.div("", "", "Assigned Route: ");
      assignRouteDiv.div("#assignRoute", "", txtAssignedRoute);

      Table(body, col, stateRow, disCol);

      const footer = new DocCreate(body, "div");
      footer.div("", "", "Prepared By:");
      footer.div("", "", txtDriverName);
      footer.div("", "", "Recieved By:");
      footer.div("", "", "_________________________");

      const btnDiv = new DocCreate(body, "div");
      const contBtn = btnDiv.div("btnCont", "btn-cont", "");
      const btn = new DocCreate(contBtn, "button");
      btn.button("button", "btnPrint", "btn-print", "", "Print", handlePrint);
    } else {
      const reload = new DocCreate(body, "div");
      reload.div("", "", "Please Reload!");
    }
  }, 2000);
}

export default Statement;

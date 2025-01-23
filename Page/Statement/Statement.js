import List from "../../Components/List/List.js";
import Modal from "../../Components/Modal/Modal.js";
import {
  handleOnDelete,
  handleOnEdit,
  stateRow,
} from "../../Context/GlobalScripts.js";
import DocCreate from "../../Helper/DocCreate.js";
import { getBillingStatement } from "../../Helper/Firebase/Firebase.js";
import Table from "../../Components/Table/Table.js";
import { sampleTable } from "../../Content/sampleTable.js";

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
      Table(body, col, stateRow, disCol);
      const btnDiv = new DocCreate(body, "div");
      const contBtn = btnDiv.div("btnCont", "btn-cont", "");
      const btn = new DocCreate(contBtn, "button");
      btn.button("button", "btnPrint", "btn-print", "", "Print");
    } else {
      const reload = new DocCreate(body, "div");
      reload.div("", "", "Please Reload!");
    }
  }, 2000);
}

export default Statement;

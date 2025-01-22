import List from "../../Components/List/List.js";
import { handleOnDelete, handleOnEdit } from "../../Context/GlobalScripts.js";
import DocCreate from "../../Helper/DocCreate.js";
import { getBillingStatement } from "../../Helper/Firebase/Firebase.js";

async function Statement(container) {
  const url = new URL(window.location.href);
  url.search = "";
  window.history.replaceState({}, document.title, url.toString());
  const divState = new DocCreate(container, "div");

  const state = divState.div("state", "main-state");

  const titleDiv = new DocCreate(state, "div")
  titleDiv.div("", "hd-title", "Billing Statement List");
  
  // const { col, row } = sampleTable[0];
  // const disCol = ["Date", "Incoming", "Outgoing"];
  // Table(frmField, col, row, disCol);

  const row = await getBillingStatement("billingStatement");

  List(state, row, handleOnEdit, handleOnDelete);
}

export default Statement;

import DocCreate from "../../Helper/DocCreate.js";
import TableScript from "./TableScript.js";
import TableStyle from "./TableStyle.js";
import { addComma,toNumber } from "../../Context/GlobalScripts.js";
let groupedData = [];

function Table(container, col, row, disCol = []) {
  const div = new DocCreate(container, "div");
  const tableDiv = div.div("tblList", "tbl-list", "");

  const table = new DocCreate(tableDiv, "table");
  const tbl = table.div("tblCont", "tbl-cont");

  const tblHeader = new DocCreate(tbl, "thead");
  const thead = tblHeader.div("", "", "");

  const tblHeaderRow = new DocCreate(thead, "tr");

  const theadrow = tblHeaderRow.div("", "", "");
  const th = new DocCreate(theadrow, "th");
  if (col) {
    col.forEach((header) => {
      th.div("", "", header);
    });
  }
  let totalAmount = 0;
  const tblBody = new DocCreate(tbl, "tbody");
  const tbody = tblBody.div("", "", "");

  if (row) {
    row.forEach((dataRow, indexrow) => {
      const tblRow = new DocCreate(tbody, "tr");
      const tbodyrow = tblRow.div("", "", "");
      const rowData = {};

      col.forEach((header, colIndex) => {
        const td = new DocCreate(tbodyrow, "td");

        const input = td.div("", "", "");
        const textline = new DocCreate(input, "input");

        const isDisabled = disCol.includes(header);
        const amountColumn = header === "Amount";
        const idInput = header.replace(/[^a-zA-Z0-9]/g, "");
        
        const noOfTrip = toNumber(dataRow["No_of_trip"]) > 0 ? toNumber(dataRow["No_of_trip"]): toNumber(dataRow["No. of trip"]);
        const rate = toNumber($("#txtAmtHdr").val()); 
        const amt = addComma(noOfTrip * rate);

        textline.textline(
          "text",
          `txt${idInput}`,
          amountColumn
            ? ["txtAmount", "class-field-text"]
            : [
                "class-field-text",
                "another-class",
                header.replace(/\s+/g, "-"),
                idInput
              ],
          "",
          false,
          dataRow[header]
            ? toNumber(dataRow["No_of_trip"]) > 0 ?  dataRow[header] : amountColumn ? amt : dataRow[header] 
            :  dataRow[header.replace(/\s+/g, "_").replace(".", "")] || "",
          null,
          isDisabled
        );
        rowData[header] = dataRow[header] || "";
      });
      const txtAmount = dataRow["Amount"];
      if (txtAmount !== undefined && !isNaN(txtAmount) && txtAmount !== 0) {
        totalAmount += parseFloat(txtAmount);
      }
      groupedData.push(rowData);
    });

    const totalRow = new DocCreate(tbody, "tr");
    const totalRowDiv = totalRow.div("", "tot-row", "");

    col.forEach((header) => {
      const td = new DocCreate(totalRowDiv, "td");
      if (header === "No. of trip") {
        td.div("", "txt-total", `Total: `);
      } else if (header === "Amount") {
        td.div("", "total-amount", ` ${addComma(totalAmount)}`);
      } else {
        td.div("", "", "");
      }
    });
  }

  TableScript();
  TableStyle();

  const data = { totalAmount };

  return groupedData;
}

export default Table;

import DocCreate from "../../Helper/DocCreate.js";
import TableScript from "./TableScript.js";
import TableStyle from "./TableStyle.js";

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
    row.forEach((dataRow) => {
      const tblRow = new DocCreate(tbody, "tr");
      const tbodyrow = tblRow.div("", "", "");
      col.forEach((header, colIndex) => {
        const td = new DocCreate(tbodyrow, "td");

        const input = td.div("", "", "");
        const textline = new DocCreate(input, "input");

        const isDisabled = disCol.includes(header);
        const amountColumn = header === "Amount";
        textline.textline(
          "text",
          `txt${header}`,
          amountColumn ? ["txtAmount"] : ["class-field-text", "another-class"],
          "",
          false,
          dataRow[header] || "",
          null,
          isDisabled
        );
      });
      const txtAmount = $("#txtAmount").val();
      if (txtAmount !== undefined && !isNaN(txtAmount)) {
        totalAmount += parseFloat(txtAmount);
      }
    });
    const totalRow = new DocCreate(tbody, "tr");
    const totalRowDiv = totalRow.div("", "", "");

    col.forEach((header) => {
      const td = new DocCreate(totalRowDiv, "td");

      if (header === "No. of trip") {
        td.div("", "txt-total", `Total: `);
      } else if (header === "Amount") {
        td.div("", "total-amount", ` ${totalAmount.toFixed(2)}`);
      } else {
        td.div("", "", "");
      }
    });
  }

  TableScript();
  TableStyle();

  const data = { totalAmount };

  return;
}

export default Table;

import DocCreate from "../../Helper/DocCreate.js";
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

        textline.textline(
          "text",
          "sample",
          "class-sample",
          "",
          false,
          dataRow[header] || "",
          null,
          isDisabled
        );
      });
      if (dataRow.Amount !== undefined && !isNaN(dataRow.Amount)) {
        totalAmount += parseFloat(dataRow.Amount);
      }
    });
    const totalRow = new DocCreate(tbody, "tr");
    const totalRowDiv = totalRow.div("", "", "");

    col.forEach((header) => {
      const td = new DocCreate(totalRowDiv, "td");
      
      if (header === "No. of trip") {
        td.div("", "total-amount", `Total: `);
      } else if (header === "Amount") {
        td.div("", "total-amount", ` ${totalAmount.toFixed(2)}`);
      } else {
        td.div("", "", "");
      }
    });
  }

  TableStyle();
}

export default Table;

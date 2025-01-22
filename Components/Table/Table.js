import DocCreate from "../../Helper/DocCreate.js";

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

  col.forEach((header) => {
    th.div("", "", header);
  });

  const tblBody = new DocCreate(tbl, "tbody");
  const tbody = tblBody.div("", "", "");

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
  });
}

export default Table;

import DocCreate from "../../Helper/DocCreate.js";
import ListStyle from "./ListStyle.js";

let toReturnVal = [];
function List(container, items, handleOnEdit, handleOnDelete) {
  let currentPage = 1;
  const itemsPages = 10;
  const sortItem = [...items].reverse();

  const div = new DocCreate(container, "div");
  const listDiv = div.div("listCont", "list-cont", "");
  const ulList = new DocCreate(listDiv, "ul");
  const ul = ulList.div("", "lst-ul", "");
  const li = new DocCreate(ul, "li");
  if (sortItem) {
    const hdlist = li.div("", "hd-lst-state", "");
    const hddiv2 = new DocCreate(hdlist, "div");
    const hdtitlediv = hddiv2.div("", "hd-data", ``);
    const hdtitle = new DocCreate(hdtitlediv, "span");

    const start = (currentPage - 1) * itemsPages;
    const end = start + itemsPages;
    const paginatedItems = sortItem.slice(start, end);

    hdtitle.div("", "hd-no", `No`);
    hdtitle.div("", "hd-date", ` Date`);
    hdtitle.div("", "hd-name", `Name`);

    paginatedItems.forEach((item, index) => {
      const list = li.div("", "lst-state", "");
      const div2 = new DocCreate(list, "div");
      const titlediv = div2.div("", "lst-data", ``);
      const title = new DocCreate(titlediv, "span");
      title.div("", "lst-index", `${index + 1}. `);
      title.div("", "lst-title", item.dtBilling);
      title.div("", "lst-title", item.txtDriverName);
      const btnDiv = div2.div("", "lst-btn", "");
      const btn = new DocCreate(btnDiv, "button");
      btn.button("button", "btnEdit", "btn-edit", "", "View Statement", () =>
        handleOnEdit(item)
      );
      btn.button("button", "btnDelete", "btn-delete", "", "Delete", () =>
        handleOnDelete(item)
      );
    });
  }

  ListStyle();

  return toReturnVal;
}

export default List;

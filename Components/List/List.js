import DocCreate from "../../Helper/DocCreate.js";

function List(container, items, handleOnEdit, handleOnDelete) {
  const div = new DocCreate(container, "div");
  const listDiv = div.div("listCont", "list-cont", "");
  const ulList = new DocCreate(listDiv, "ul");
  const ul = ulList.div("", "", "");
  const li = new DocCreate(ul, "li");
  if (items) {
    items.forEach((item, index) => {
      const list = li.div("", "lst-items", "");
      const div2 = new DocCreate(list, "div");
      div2.div("", "lst-data", `${index + 1} ${item.dtBilling}`);
      const btnDiv = div2.div("", "lst-btn", "");
      const btn = new DocCreate(btnDiv, "button");
      btn.button("button", "btnEdit", "btn-edit", "", "Edit", () =>
        handleOnEdit(item)
      );
      btn.button("button", "btnDelete", "btn-delete", "", "Delete", () =>
        handleOnDelete(item)
      );
    });
  }
}

export default List;

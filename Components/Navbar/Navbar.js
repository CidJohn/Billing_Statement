import DocCreate from "../../Helper/DocCreate.js";
import NavbarStyle from "./NavbarStyle.js";
import { navitems } from "./NavItems.js";

function Navbar(container) {
  const navbar = new DocCreate(container, "a");
  const list = navbar.div("navbar", "navbar-ui", "");

  const listItem = new DocCreate(list, "a");
  navitems.map((item) => {
    const nav = listItem.div("lstItem", "lst-items", item.name);
    nav.href = `#${item.to}`;
  });

  NavbarStyle();
}

export default Navbar;

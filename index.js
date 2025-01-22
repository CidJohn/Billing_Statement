import Navbar from "./Components/Navbar/Navbar.js";
import DocCreate from "./Helper/DocCreate.js";
import LocalStore from "./Helper/Storage/LocalStore.js";
import route from "./Routing/route.js";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const activate = new LocalStore("status");
  const activateRem = new LocalStore("status", true);
  const status = activate.Read();
  const statusRem = activateRem.Read();

  statusRem[0] || status[0] ? Navbar(root) : "";
  const main = new DocCreate(root, "div");
  const mainView = main.div("mainView", "main-view", "");

  const rem = statusRem.length > 0 ? statusRem : status;

  route(mainView, rem);
});

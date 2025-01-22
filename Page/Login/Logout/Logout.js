import Local from "../../../Helper/Storage/local.js";
import DocCreate from "../../../Helper/DocCreate.js";

const Logout = (main) => {
  const status = new Local("status");
  const statusRem = new Local("status", true);
  const userData = new Local("userData");
  const userDataRem = new Local("userData", true);
  status.DeleteStorage();
  userData.DeleteStorage();
  statusRem.DeleteStorage();
  userDataRem.DeleteStorage();

  const logout = new DocCreate(main, "h2");
  logout.div("", "txt-logout", "You have been logged out successfully!");

  setTimeout(() => {
    window.location.hash = "/";
    window.location.reload();
  }, 1000);
};

export default Logout;

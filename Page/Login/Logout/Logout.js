import DocCreate from "../../../Helper/DocCreate.js";
import LocalStore from "../../../Helper/Storage/LocalStore.js";

const Logout = (main) => {
  const status = new LocalStore("status");
  const statusRem = new LocalStore("status", true);
  const userData = new LocalStore("userData");
  const userDataRem = new LocalStore("userData", true);
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

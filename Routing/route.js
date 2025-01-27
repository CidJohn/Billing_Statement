import GlobalStyle from "../Context/GlobalStyle.js";
import About from "../Page/About/About.js";
import Contact from "../Page/Contact/Contact.js";
import Home from "../Page/Home/Home.js";
import Login from "../Page/Login/Login.js";
import Logout from "../Page/Login/Logout/Logout.js";
import Statement from "../Page/Statement/Statement.js";

function route(main, status) {
  const routes = {
    "/": () => (!status[0] ? Login(main) : Home(main)),
    "/about": () => About(main),
    "/contact": () => Contact(main),
    "/statements": () => Statement(main),
    "/logout": () => Logout(main),
  };

  function navigate() {
    const path = window.location.hash.replace("#", "") || "/";
    main.innerHTML = "";
    if (routes[path]) {
      routes[path]();
      GlobalStyle();
    } else {
      main.innerHTML = "<h2>404 - Page Not Found</h2>";
    }
  }

  window.addEventListener("hashchange", navigate);
  window.addEventListener("load", navigate);
}

export default route;

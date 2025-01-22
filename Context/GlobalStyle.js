import ListStyle from "../Components/List/ListStyle.js";
import NavbarStyle from "../Components/Navbar/NavbarStyle.js";
import TableStyle from "../Components/Table/TableStyle.js";
import { AboutStyle } from "../Page/About/AboutStyle.js";
import HomeStyle from "../Page/Home/HomeStyle.js";
import LoginStyle from "../Page/Login/LoginStyle.js";
import LogoutStyle from "../Page/Login/Logout/LogoutStyle.js";
import StatementStyle from "../Page/Statement/StatementStyle.js";

function GlobalStyle(selector) {
  const styles = {
    home: HomeStyle,
    navbar: NavbarStyle,
    about: AboutStyle,
    login: LoginStyle,
    logout: LogoutStyle,
    table: TableStyle,
    statements: StatementStyle,
  };

  if (selector && styles[selector]) {
    try {
      styles[selector]();
    } catch (error) {
      console.warn(`Error applying style for ${selector}:`, error);
    }
  } else {
    Object.values(styles).forEach((styleFunc) => {
      try {
        styleFunc();
      } catch (error) {
        console.warn("Error applying style:", error);
      }
    });
  }
}

export default GlobalStyle;

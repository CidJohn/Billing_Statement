import DocCreate from "../../Helper/DocCreate.js";
import { loginTextline } from "../../Content/loginTextline.js";
import {
  handleFormLogin,
  handleRemember,
} from "../../Context/GlobalScripts.js";

function Login(container) {
  const loginDiv = new DocCreate(container, "div");
  const div = loginDiv.div("loginDiv", "login-div", "");
  const labelHeader = new DocCreate(div, "div");
  labelHeader.div(
    "loginTitle",
    "login-title",
    "Billing Statement Management System"
  );

  const form = new DocCreate(div, "form");
  const formLogin = form.forms(
    "formLogin",
    "login-form",
    null,
    null,
    handleFormLogin
  );

  const textline = new DocCreate(formLogin, "input");
  const label = new DocCreate(formLogin, "div");
  const btn = new DocCreate(formLogin, "button");

  label.div("loginHeader", "login-header", "Sign in Account");
  loginTextline.map((item) => {
    label.div(`lbl${item.label}`, `lbl-login`, `${item.label}: `);
    textline.textline(
      item.type,
      item.idName,
      item.classlist,
      item.placeholder,
      item.req,
      item.value,
      item.handleLoginText
    );
  });

  btn.button("submit", "btnSubmit", "btn-submit", "", "Login");

  const remember = label.div("contRemember", "cont-remember", "");

  const txtRemember = new DocCreate(remember, "input");
  const label2 = new DocCreate(remember, "div");

  txtRemember.textline(
    "checkbox",
    "chkRemember",
    ["chk-remember"],
    "",
    false,
    "",
    handleRemember
  );
  label2.div("lblRemember", "lbl-remember", "Remember Me");
}

export default Login;

import { handleLoginText } from "../Context/GlobalScripts.js";

export const loginTextline = [
  {
    label: "Username",
    type: "email",
    idName: "uname",
    value: "",
    placeholder: "Enter Your Email",
    classlist: ["form-control"],
    req: true,
    handleLoginText: (e) => handleLoginText(e),
  },
  {
    label: "Password",
    type: "password",
    idName: "pass",
    value: "",
    placeholder: "Enter Your Password",
    classlist: ["form-control"],
    req: true,
    handleLoginText: (e) => handleLoginText(e),
  },
];

export const defaultUsers = [
  {
    uname: "cidjohn31@gmail.com",
    pass: "C1dj0hn31.",
  },
];

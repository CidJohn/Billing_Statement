import { handleLoginText } from "../Context/GlobalScripts.js";

export const loginTextline = [
  {
    label: "Username",
    type: "text",
    idName: "uname",
    value: "",
    placeholder: "Enter Username",
    classlist: ["form-control"],
    req: true,
    handleLoginText: (e) => handleLoginText(e),
  },
  {
    label: "Password",
    type: "password",
    idName: "pass",
    value: "",
    placeholder: "Enter Password",
    classlist: ["form-control"],
    req: true,
    handleLoginText: (e) => handleLoginText(e),
  },
];

export const defaultUsers = [
  {
    uname: "Cidjohn",
    pass: "Villanueva",
  },
];

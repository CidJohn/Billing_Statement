import { handleTextline } from "../Context/GlobalScripts.js";
import CurrentDate from "../Helper/CurrentDate.js";

export const frmTexline = [
  {
    div: "form-group-one",
    text: [
      {
        label: "Billing No",
        type: "number",
        idName: "noBilling",
        value: "",
        placeholder: "Number of Billing",
        classlist: "form-control",
        req: true,
        handleLoginText: (e) => handleTextline(e),
      },
      {
        label: "Billing Date",
        type: "date",
        idName: "dtBilling",
        value: CurrentDate(),
        placeholder: "mm/dd/yyyy",
        classlist: "form-control",
        req: true,
        handleLoginText: (e) => handleTextline(e),
      },
      {
        label: "Billing Period",
        dateInput: [
          {
            subLabel: "From",
            type: "date",
            idName: "dtFrom",
            value: "",
            placeholder: "mm/dd/yyyy",
            classlist: "form-control",
            req: true,
            handleLoginText: (e) => handleTextline(e),
          },
          {
            subLabel: "To",
            type: "date",
            idName: "dtTo",
            value: "",
            placeholder: "mm/dd/yyyy",
            classlist: "form-control",
            req: true,
            handleLoginText: (e) => handleTextline(e),
          },
        ],
      },
    ],
  },
  {
    div: "form-group-two",
    text: [
      {
        label: "Driver Name",
        type: "text",
        idName: "txtDriverName",
        value: "",
        placeholder: "Enter Full Name",
        classlist: "form-control",
        req: true,
        handleLoginText: (e) => handleTextline(e),
      },
      {
        label: "Plate No.",
        type: "text",
        idName: "txtPlate",
        value: "",
        placeholder: "Enter you Plate Number",
        classlist: "form-control",
        req: true,
        handleLoginText: (e) => handleTextline(e),
      },

      {
        label: "Assiged Route",
        type: "text",
        idName: "txtAssignedRoute",
        value: "",
        placeholder: "Enter Assigned Route",
        classlist: "form-control",
        req: true,
        handleLoginText: (e) => handleTextline(e),
      },
      {
        label: "No. of Trip",
        type: "number",
        idName: "txtTrip",
        value: "",
        placeholder: "Enter No. of Trip",
        classlist: "form-control",
        req: true,
        handleLoginText: (e) => handleTextline(e),
      },
    ],
  },
  {
    div: "form-group-three",
    text: [
      {
        label: "Time In",
        type: "time",
        idName: "txtTimeIn",
        value: "",
        classlist: "form-control",
        req: true,
        handleLoginText: (e) => handleTextline(e),
      },
      {
        label: "Time Out",
        type: "time",
        idName: "txtTimeOut",
        value: "",
        classlist: "form-control",
        req: true,
        handleLoginText: (e) => handleTextline(e),
      },
    ],
  },
  {
    div: "form-group-btn",
    text: [],
    btn: [
      {
        type: "submit",
        idName: "btnSubmit",
        classList: "btn-submit",
        textContent: "Add",
      },
    ],
  },
];

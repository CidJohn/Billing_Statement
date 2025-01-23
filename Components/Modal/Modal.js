import DocCreate from "../../Helper/DocCreate.js";
import ModalScript from "./ModalScript.js";
import ModalStyle from "./ModalStyle.js";

function Modal(container) {
  const div = new DocCreate(container, "div");
  const modalContent = div.div("mdlCont", "modal-cont", "");
  const div2 = new DocCreate(modalContent, "div");
  const headContent = div2.div("", "hd-modal-cont", "");
  const bodyContent = div2.div("", "body-modal-cont", "");
  const header = new DocCreate(headContent, "h1");
  header.div("mdlTitle", "mdl-title", "");
  header.div("btnClose", "btn-close", "X");

  const body = new DocCreate(bodyContent, "div");
  body.div("content", "cont", "body");

  ModalStyle();
  ModalScript();
}

export default Modal;

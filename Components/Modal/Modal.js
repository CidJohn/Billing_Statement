import DocCreate from "../../Helper/DocCreate.js";
import ModalScript from "./ModalScript.js";
import ModalStyle from "./ModalStyle.js";

function Modal(container) {
  const div = new DocCreate(container, "div");
  const modalContent = div.div("mdlCont", "modal-cont", "");
  const div2 = new DocCreate(modalContent, "div");
  const headContent = div2.div("", "hd-modal-cont", "");
  const bodyContent = div2.div("", "body-modal-cont", "");
  const header = new DocCreate(headContent, "h2");
  header.div("mdlTitle", "mdl-title", "");
  header.div("btnClose", "btn-close", "x");

  const body = new DocCreate(bodyContent, "div");
  const content = body.div("content", "body-cont", "");

  ModalStyle();
  ModalScript();

  return content;
}

export default Modal;

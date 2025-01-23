function ModalScript() {
  $(document).on("click", "#btnClose", () => {
    $("#mdlCont").css({
      display: "none",
    });
  });
}

export default ModalScript;

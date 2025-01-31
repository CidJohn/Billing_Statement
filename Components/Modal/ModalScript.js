function ModalScript() {
  $(document).on("click", "#btnClose", () => {
    // $("#mdlCont").css({
    //   display: "none",
    // });
    window.location.reload();
  });
}

export default ModalScript;

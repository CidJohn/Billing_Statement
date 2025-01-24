function ModalStyle() {
  $(".modal-cont").css({
    width: "98vw",
    position: "absolute",
    display: "none",
    height: "100vh",
    "flex-direction": "column",
    gap: "10px",
    background: "#ffff",
  });
  $(".mdl-title-hd").css({
    "font-family": "sans-serif",
  });

  $(".hd-modal-cont").css({
    display: "flex",
    "justify-content": "space-between",
    padding: "0 10px 0 10px",
  });

  $(".btn-close").css({
    cursor: "pointer",
    "font-family": "sans-serif",
    border: "1px solid #ccc",
    "border-radius": "50px",
    padding: "3px 10px 3px 10px",
    display: "flex",
    "align-item": "center",
    "justify-content": "center",
    "text-align": "center",
  });

  $(" .body-modal-cont").css({
    display: "flex",
    height: "90vh",
    "max-height": "100vh",
    "justify-content": "center",
  });

  $(".body-cont").css({
    width: "auto",
    display: "flex",
    "flex-direction": "column",
    gap: "1rem",
  });

  $(".btn-close").hover(
    function () {
      $(this).css({
        background: "#fa3123",
        color: "white",
      });
    },
    function () {
      $(this).css({
        background: "transparent",
        border: "1px solid #ccc",
        color: "black",
      });
    }
  );
}

export default ModalStyle;

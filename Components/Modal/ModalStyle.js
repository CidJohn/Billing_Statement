function ModalStyle() {
  $(".modal-cont").css({
    border: "1px solid black",
    width: "50%",
    padding: "10px",
    position: "absolute",
    top: "140px",
    left: "300px",
    display: "none",
    "flex-direction": "column",
    gap: "10px",
    background: "#ddd",
  });

  $(".hd-modal-cont").css({
    border: "1px solid black",
    display: "flex",
    "justify-content": "space-between",
    padding: "0 10px 0 10px",
  });
  $(".btn-close").css({
    cursor: "pointer",
    "font-family": "sans-serif",
  });

  $(" .body-modal-cont").css({
    border: "1px solid black",
    display: "flex",
    padding: "0 10px 0 10px",
    height: "40vh",
    "max-height": "40vh",
  });
}

export default ModalStyle;

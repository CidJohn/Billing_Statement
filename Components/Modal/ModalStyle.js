function ModalStyle() {
  $(".modal-cont").css({
    border: "1px solid black",
    width: "60%",
    padding: "10px",
    position: "absolute",
    top: "140px",
    margin: "0 20% 0 20%",
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
    height: "40vh",
    "max-height": "40vh",
    "justify-content": "center",
  });
  $(".body-cont").css({
    width: "auto",
    display: "flex",
    //"justify-content": "center",
    "overflow-y": "auto",
  });
}

export default ModalStyle;

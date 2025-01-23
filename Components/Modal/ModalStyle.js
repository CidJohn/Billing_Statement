function ModalStyle() {
  $(".modal-cont").css({
    border: "1px solid #ddd",
    "border-radius": "10px",
    "box-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "55%",
    padding: "10px",
    position: "absolute",
    top: "140px",
    margin: "0 22% 0 22%",
    display: "none",
    "flex-direction": "column",
    gap: "10px",
    background: "#ffff",
  });

  $(".hd-modal-cont").css({
    border: "1px solid #ddd",
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
    border: "1px solid #ddd",
    display: "flex",
    height: "40vh",
    "max-height": "40vh",
    "justify-content": "center",
  });

  $(".body-cont").css({
    width: "auto",
    display: "flex",
    "flex-direction": "column",
    //"justify-content": "center",
    "overflow-y": "auto",
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

function ListStyle() {
  $(".list-cont").css({
    padding: "10px 20px 10px 20px",
    // border: "1px solid black",
    display: "flex",
    "justify-content": "center",
  });
  $(".lst-ul").css({
    display: "flex",
    "flex-direction": "column",
    width: "80%",
    padding: "20px",
    border: "1px solid #ddd",
    "border-radius": "8px",
    "box-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)",
    height: "60vh",
    "overflow-y": "auto",
  });

  $(".lst-state, .hd-lst-state").css({
    display: "flex",
    "justify-content": "space-between",
    "border-bottom": "1px solid gray",
    padding: "5px 0 5px 0",
  });
  $(".hd-lst-state").css({
    "font-weight": "600",
  });
  $(".lst-data, .hd-data").css({
    display: "flex",
    gap: "10px",
    "align-items": "center",
  });

  $("span").css({
    "font-size": "14px",
    "font-family": "sans-serif",
  });
  $(".hd-data .hd-date, .hd-name").css({
    padding: "0 20px 0 15px",
  });
  $(".lst-btn").css({
    gap: "10px",
    display: "flex",
  });
  $(".btn-edit , .btn-delete").css({
    width: "150px",
    "font-size": "18px",
    padding: "5px",
    background: "transparent",
    border: "1px solid #ccc",
    "border-radius": "5px",
    "font-family": "sans-serif",
  });

  $(".lst-state").hover(
    function () {
      $(this).css({
        background: "#ddd",
      });
    },
    function () {
      $(this).css({
        background: "none",
      });
    }
  );

  $(".btn-edit").hover(
    function () {
      $(this).css({
        background: "#3af734",
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
  $(".btn-delete").hover(
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

export default ListStyle;

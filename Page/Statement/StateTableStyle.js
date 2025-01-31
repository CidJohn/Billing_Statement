function StateTableStyle() {
  $(".btn-cont").css({
    padding: "10px",
    width: "auto",
    display: "flex",
    "justify-content": "center",
    gap: "10px",
  });

  $(".btn-print, .btn-save").css({
    width: "150px",
    "font-size": "18px",
    padding: "5px",
    background: "transparent",
    border: "1px solid #ccc",
    "border-radius": "5px",
    "font-family": "sans-serif",
  });

  $(".btn-print").hover(
    function () {
      $(this).css({
        background: "#4281f5",
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
  $(".btn-save").hover(
    function () {
      $(this).css({
        background: "#2ce65d",
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
  $(".info-cont").css({
    display: "flex",
    "justify-content": "space-between",
    "font-family": "sans-serif",
    "margin-top": "15px",
  });
  $(
    ".billing-no, .billing-date, .billing-date, .billing-prd, .plate-no, .driver-name, .assign-route"
  ).css({
    display: "flex",
    gap: "10px",
  });
  $(".info-cont p").css({
    display: "flex",
    "font-family": "sans-serif",
    margin: "0px",
    "font-size": "14px",
  });
  $(".header-info, .header-info2").css({
    display: "flex",
    "flex-direction": "column",
    "font-family": "sans-serif",
    margin: "0px",
    "font-size": "12px",
  });
  $(".body-cont div").css({
    "font-family": "sans-serif",
    "font-size": "12px",
  });
  $(".p-item").css({
    "border-bottom": "1px solid",
  });
}

export default StateTableStyle;

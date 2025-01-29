function StatementStyle() {
  $(".main-state").css({
    width: "100%",
    height: "auto",
    display: "flex",
    "flex-direction": "column",
    padding: "20px 0 0 0",
  });

  $(".hd-title").css({
    "font-size": "32px",
    "font-family": "Arial, sans-serif",
    "font-weight": "600",
    color: "#333",
    "margin-bottom": "10px",
    "text-align": "center",
  });

  setTimeout(() => {
    $(".btn-cont").css({
      padding: "10px",
      width: "auto",
      display: "flex",
      "justify-content": "center",
    });

    $(".btn-print").css({
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
    });
    $(".header-info, .header-info2").css({
      display: "flex",
      "flex-direction": "column",
      "font-family": "sans-serif",
      margin: "0px",
      gap: "10px",
    });
    $(".body-cont div").css({
      "font-family": "sans-serif",
    });
  }, 3000);
}

export default StatementStyle;

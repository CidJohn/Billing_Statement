function TableStyle() {
  $(".tbl-cont").css({
    border: "1px solid #ddd",
    "border-radius": "5px",
    padding: "10px",
    "background-color": "#f9f9f9",
  });

  $(".tbl-list table").css({
    width: "auto",
    "border-collapse": "collapse",
  });

  $(".tbl-list th, .tbl-list td").css({
    border: "1px solid black",

    "text-align": "left",
  });

  $(".tbl-list th").css({
    //"background-color": "#4CAF50",
    //color: "white",
    "font-family": "sans-serif",
    padding: "5px",
    "font-size": "14px",
    "text-align": "center",
  });

  $(".tbl-list tr:nth-child(even)").css({
    "background-color": "#f2f2f2",
  });

  $(".tbl-list tr:hover").css({
    "background-color": "#ddd",
  });
  $(".class-field-text, .txtAmount").css({
    border: "none",
    background: "transparent",
    width: "75px",
    "text-align": "center",
    "font-family": "sans-serif",
    height: "24px",
    "font-size": "14px",
    color: "black",
  });
  $(".class-field-text").focus(
    function () {
      $(this).css({
        border: "none",
      });
    },
    function () {
      $(this).css({
        border: "none",
      });
    }
  );
  $(".class-field-text").hover(function () {
    $(this).css({
      border: "none",
      outline: "none",
    });
  });
  $(".total-amount").css({
    "font-family": "sans-serif",
    "font-size": "14px",
    "text-align": "center",
  });
  $(".txt-total").css({
    "font-size": "14px",
    "font-family": "sans-serif",
    "text-align": "center",
  });
}

export default TableStyle;

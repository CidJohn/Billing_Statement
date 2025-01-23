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
    border: "1px solid #ddd",
    padding: "8px",
    "text-align": "left",
  });

  $(".tbl-list th").css({
    //"background-color": "#4CAF50",
    //color: "white",
    "font-family": "sans-serif",
  });

  $(".tbl-list tr:nth-child(even)").css({
    "background-color": "#f2f2f2",
  });

  $(".tbl-list tr:hover").css({
    "background-color": "#ddd",
  });
  $(".class-sample").css({
    border: "none",
    background: "transparent",
    width: "70px",
    "text-align": "center",
    "font-family": "sans-serif",
  });
  $(".class-sample").focus(
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
  $(".class-sample").hover(function () {
    $(this).css({
      border: "none",
      outline: "none",
    });
  });
  
}

export default TableStyle;

function HomeStyle() {
  const home = $(".hd-home");
  const title = $(".hd-title");
  const welcome = $(".hd-username");
  const form = $(".frm-mngmt");
  const formCont = $(".frm-cont");
  const controlForm = $(".form-control");

  if (home.length) {
    home.css({
      cursor: "pointer",
      width: "100%",
      height: "auto",
      display: "flex",
      "flex-direction": "column",
      "align-items": "center",
      padding: "20px 0 0 0",
    });

    title.css({
      "font-size": "32px",
      "font-family": "sans-serif",
      "font-weight": "600",
      color: "#333",
      "margin-bottom": "10px",
    });

    welcome.css({
      "font-size": "16px",
      "font-family": "sans-serif",
      "text-align": "center",
      "font-weight": "400",
      color: "#666",
      "margin-bottom": "20px",
    });

    formCont.css({
      width: "auto",
      "max-width": "80%",
      "justify-content": "center",
      "align-items": "center",
      padding: "20px",
      border: "1px solid #ddd",
      "border-radius": "8px",
      "box-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)",
    });

    form.css({
      display: "flex",
      gap: "20px",
      width: "100%",
      "flex-wrap": "wrap",
      "justify-content": "center",
    });

    controlForm.css({
      width: "90%",
      padding: "10px",
      "border-radius": "5px",
      border: "1px solid #ccc",
      "font-size": "14px",
      "font-family": "sans-serif",
    });

    controlForm.hover(
      function () {
        $(this).css({
          outline: "1px solid #4CAF50",
          border: "1px solid #4CAF50",
        });
      },
      function () {
        $(this).css({
          outline: "none",
          border: "1px solid #ccc",
        });
      }
    );

    controlForm
      .focus(function () {
        $(this).css({
          outline: "1px solid #4CAF50",
          border: "1px solid #4CAF50",
        });
      })
      .blur(function () {
        $(this).css("outline", "none");
      });
  }

  $(".form-group-one, .form-group-two,  .form-group-three").css({
    padding: "15px",
    border: "1px solid #ccc",
    "border-radius": "8px",
    background: "#f9f9f9",
  });

  $(".form-group-one, .form-group-two,  .form-group-three").css({
    display: "flex",
    "flex-direction": "column",
    "flex-wrap": "wrap",
    gap: "5px",
    width: "25%",
  });

  $(".frms-label").css({
    "font-size": "14px",
    "font-weight": "500",
    color: "#333",
    margin: "5px 0",
    "font-family": "sans-serif",
  });

  $(".frms-sublabel").css({
    "font-size": "13px",
    "font-weight": "400",
    color: "#555",
    margin: "5px 0",
    "font-family": "sans-serif",
  });

  $(".frms-fromto").css({
    display: "flex",
    gap: "5px",
    "flex-direction": "column",
  });

  $(".form-group-btn").css({
    width: "100%",
    padding: "10px",
    display: "flex",
    "justify-content": "Center",
  });
  $(".btn-submit").css({
    width: "150px",
    "font-size": "20px",
    padding: "5px",
    background: "transparent",
    border: "1px solid #ccc",
    "border-radius": "5px",
    "font-family": "sans-serif",
  });

  $(".btn-submit").hover(
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
  $(window).resize(function () {
    const windowWidth = $(window).width();

    if (windowWidth <= 768) {
      // Adjust for mobile devices
      formCont.css({
        "max-width": "90%",
        padding: "15px",
      });

      form.css({
        gap: "10px",
        "flex-direction": "column",
      });

      $(".form-group-one, .form-group-two, .form-group-three").css({
        width: "100%",
      });

      $(".btn-submit").css({
        width: "100%",
        "font-size": "16px",
      });
    } else {
      // Revert to desktop styles
      formCont.css({
        "max-width": "80%",
        padding: "20px",
      });

      form.css({
        gap: "20px",
        "flex-direction": "row",
      });

      $(".form-group-one, .form-group-two, .form-group-three").css({
        width: "25%",
      });

      $(".btn-submit").css({
        width: "150px",
        "font-size": "20px",
      });
    }
  });

  $(".check-Sun-Box").css({
    border: "none",
    display: "flex",
    "flex-direction": "row-reverse",
  });
  $("#chkSunday  ").css({
    border: "none",
    padding: "0",
    "font-size": " 0px",
  });
}

export default HomeStyle;

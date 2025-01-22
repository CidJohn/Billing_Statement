function LoginStyle() {
  const loginstyling = $(".login-div");
  const loginTitle = $(".login-title");
  const formlogin = $(".login-form");
  const loginHeader = $(".login-header");
  const controlForm = $(".form-control");
  const lblLogin = $(".lbl-login");
  const btnLogin = $(".btn-submit");
  const chkRemember = $(".cont-remember");

  if (loginstyling.length) {
    loginstyling.css({
      width: "100%",
      height: "90vh",
      padding: "10px",
      display: "flex",
      "flex-direction": "column",
      "justify-content": "center",
      "align-items": "center",
    });

    loginTitle.css({
      "font-size": "32px",
      "font-size": "32px",
      "font-weight": "900",
      "font-family": "sans-serif",
      "text-align": "center",
      width: "40%",
      "text-shadow": "5px 5px 15px rgba(0,0,0,0.5)",
      padding: "10px",
      "margin-bottom": "40px",
    });

    loginHeader.css({
      "font-size": "32px",
      "font-weight": "900",
      "font-family": "sans-serif",
      "text-align": "center",
      "margin-bottom": "20px",
    });

    formlogin.css({
      width: "auto",
      height: "auto",
      "box-shadow": "5px 5px 15px rgba(0,0,0,0.5)",
      padding: "20px",
      "border-radius": "10px",
      display: "flex",
      "flex-direction": "column",
    });

    lblLogin.css({
      padding: "15px 0 3px 0",
      "font-size": "14px",
      "font-family": "sans-serif",
    });

    controlForm.css({
      width: "95%",
      padding: "5px",
      "border-radius": "5px",
      border: "1px solid gray",
    });

    btnLogin.css({
      width: "100%",
      "margin-top": "10px",
      padding: "5px",
      background: "transparent",
      "border-radius": "5px",
      border: "1px solid blue",
    });

    lblLogin.hover(
      function () {
        $(this).css({ "font-weight": "600" });
      },
      function () {
        $(this).css({ "font-weight": "100" });
      }
    );
    controlForm.hover(
      function () {
        $(this).css({ outline: "1px solid green", border: "1px solid green" });
      },
      function () {
        $(this).css({ outline: "1px solid gray", border: "1px solid gray" });
      }
    );

    chkRemember.css({
      display: "flex",
      "item-align": "center",
      padding: " 10px 0 0 0",
    });

    controlForm
      .focus(function () {
        $(this).css({
          outline: "1px solid green",
          border: "1px solid green",
        });
      })
      .blur(function () {
        $(this).css("outline", "none");
      });

    btnLogin.hover(
      function () {
        $(this).css({ "background-color": "blue", border: "none" });
      },
      function () {
        $(this).css({ "background-color": "", border: "1px solid blue" });
      }
    );
  }
}

export default LoginStyle;

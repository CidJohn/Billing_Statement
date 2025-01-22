function LogoutStyle() {
  const txtlogout = $(".txt-logout");
  if (txtlogout.length) {
    txtlogout.css({
      "text-align": "center",
      "font-family": "sans-serif",
      "item-align": "center",
    });
  }
}

export default LogoutStyle;

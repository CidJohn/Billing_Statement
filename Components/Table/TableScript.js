function TableScript() {
  $(document).on("change", ".txtAmount", function () {
    let total = 0;

    $(".txtAmount").each(function () {
      const value = parseFloat($(this).val()) || 0;
      total += value;
    });

    $(".total-amount").text(total.toFixed(2));
  });
}

export default TableScript;

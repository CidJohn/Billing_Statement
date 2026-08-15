function TableScript() {
  let total = 0;
  $(document).on("change", ".txtAmount", function () {
    total = 0;
    $(".txtAmount").each(function () {
      const value = parseFloat($(this).val()) || 0;
      total += value;
    });

    $(".total-amount").text(addComma(total));
  });

  $(document).on("change", ".Nooftrip", function () {
    total = 0;
    const $row = $(this).closest("tr");

    const noOfTrip = toNumber($(this).val());
    const hdrAmt = toNumber($("#txtAmtHdr").val());

    const result = noOfTrip * hdrAmt;

    $row.find(".txtAmount").val(result);

    $(".txtAmount").each(function () {
      const value = parseFloat($(this).val()) || 0;
      total += value;
    });

    $(".total-amount").text(addComma(total));
  });

  function toNumber(value) {
    return Number(String(value).replace(/,/g, ""));
  }
  function addComma(value) {
    return toNumber(value).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}

export default TableScript;

import { FromDate, ToDate } from "../../Helper/CurrentDate.js";
import { getBillingStatement } from "../../Helper/Firebase/Firebase.js";

async function HomeScript() {
  $(document).on("change", "#dtBilling", function (e) {
    const value = e.target.value;
    $("#dtFrom").val(FromDate(value));
    $("#dtTo").val(ToDate(value));
  });
  const row = await getBillingStatement("billingStatement");
  $(document).on("change", "#txtDriverName", function () {
    const driverName = $("#txtDriverName").val();
    const plateNo = $("#txtPlate");
    const route = $("#txtAssignedRoute");
    const noTrip = $("#txtTrip");
    const amount = $("#txtAmount");

    const filteredRows = row.filter(
      (item) => item.txtDriverName === driverName
    );

    if (filteredRows.length > 0) {
      filteredRows.sort(
        (a, b) => new Date(b.dtBilling) - new Date(a.dtBilling)
      );

      const latest = filteredRows[0];

      plateNo.val(latest.txtPlate);
      route.val(latest.txtAssignedRoute);
      noTrip.val(latest.txtTrip);
      amount.val(latest.txtAmount);

      $("#noBilling").val(parseInt(latest.noBilling) + 1);
    } else {
      plateNo.val("");
      route.val("");
      noTrip.val("");
      amount.val("");
      $("#noBilling").val("");
    }
  });

}

export default HomeScript;

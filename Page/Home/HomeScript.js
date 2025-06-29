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
    let lastNumber = 0;
    row.map((item, index) => {
      if (item.txtDriverName == driverName) {
        lastNumber = item.noBilling;
      }
    });
    $("#noBilling").val(parseInt(lastNumber) + 1);
  });
}

export default HomeScript;

import { FromDate, ToDate } from "../../Helper/CurrentDate.js";
import { getBillingStatement } from "../../Helper/Firebase/Firebase.js";

async function HomeScript() {
  $(document).on("change", "#dtBilling", function (e) {
    const value = e.target.value;
    $("#dtFrom").val(FromDate(value));
    $("#dtTo").val(ToDate(value));
  });
  const row = await getBillingStatement("billingStatement");

  $("#noBilling").val(row.length + 1);
}

export default HomeScript;

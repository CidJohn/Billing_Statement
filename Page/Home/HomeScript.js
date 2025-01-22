import { FromDate, ToDate } from "../../Helper/CurrentDate.js";

function HomeScript() {
  $(document).on("change", "#dtBilling", function (e) {
    const value = e.target.value;
    $("#dtFrom").val(FromDate(value));
    $("#dtTo").val(ToDate(value));
  });
}

export default HomeScript;

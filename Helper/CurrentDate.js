function CurrentDate() {
  const date = new Date();
  return date.toISOString().split("T")[0];
}

export const FromDate = (billingDate) => {
  const date = new Date(billingDate);
  date.setDate(date.getDate() - 14);
  return date.toISOString().split("T")[0];
};

export const ToDate = (billingDate) => {
  const date = new Date(billingDate);
  date.setDate(date.getDate());
  return date.toISOString().split("T")[0];
};

export const FormatDate = (dtBilling, dtFrom, dtTo) => {
  let billingDateFormatted;
  let fromToFormatted;
  const billingDate = new Date(dtBilling);
  const fromDate = new Date(dtFrom);
  const toDate = new Date(dtTo);

  billingDateFormatted = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(billingDate);

  const shortMonthFormatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
  });
  const fromDateDay = fromDate.getDate();
  const toDateDay = toDate.getDate();
  const monthShort = shortMonthFormatter.format(fromDate);
  const year = fromDate.getFullYear();

  fromToFormatted = `${monthShort} ${fromDateDay}-${toDateDay}, ${year}`;

  return { fromToFormatted, billingDateFormatted };
};

export default CurrentDate;

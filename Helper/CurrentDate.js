function CurrentDate() {
  const date = new Date();
  return date.toISOString().split("T")[0];
}

export const FromDate = (billingDate) => {
  const date = new Date(billingDate);
  date.setDate(date.getDate() - 16);
  return date.toISOString().split("T")[0];
};

export const ToDate = (billingDate) => {
  const date = new Date(billingDate);
  date.setDate(date.getDate() - 1);
  return date.toISOString().split("T")[0];
};

export default CurrentDate;

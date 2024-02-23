const PriceFormat = ({ price }) => {
  return Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(price / 100);
};

export default PriceFormat;

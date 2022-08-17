const formatNumber = ({ q, locale, currency }) => {
  return q.toLocaleString(locale, {
    style: 'currency',
    currency,
  });
};

export { formatNumber }
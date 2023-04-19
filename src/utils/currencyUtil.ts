export const formatCurrency = (value: number): string =>
  `$${new Intl.NumberFormat().format(value)}`;

export const currencyFormatter = (num: any) => {
  return (num ? num.toLocaleString('de-DE', { minimumFractionDigits: 2 }) : 0);
}
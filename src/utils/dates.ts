export const ISOtoString = (input: string | null | undefined): string => {
  const date = new Date(input || "");
  if (!input || isNaN(date.getTime())) {
    return "";
  }
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return `${month}-${day}-${year}`;
};

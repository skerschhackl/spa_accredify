import { format } from 'date-fns';

export const formatDate = (date: string | number | Date | null | undefined) => {
  if (!date) return '-';
  const dateObj = new Date(date);
  return !isNaN(dateObj.getTime()) ? format(dateObj, 'dd MMM yyyy') : '-';
};

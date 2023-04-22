import { format } from 'date-fns';

export const formatDate = (date: string | number | Date | null | undefined) => {
  return date ? format(new Date(date),'dd MMM yyyy') : '-';
};

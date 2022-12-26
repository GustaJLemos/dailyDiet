import { format } from 'date-fns';

export const ddMM = (date: Date) => {
  return format(new Date(date), 'dd/MM');
};

export const hhmm = (date: Date) => {
  return format(new Date(date), 'HH:mm');
};

export const datetimePtBr = (date: Date) => {
  return format(new Date(date), 'dd/MM/yyyy HH:mm');
};

export const datePtBr = (date: Date) => {
  return format(new Date(date), 'dd/MM/yyyy');
};

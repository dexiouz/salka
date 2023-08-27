import dayjs from 'dayjs';

export const date1 = date => dayjs(date).format('YYYY-MM-DD');

export const date2 = date => dayjs(date).format('DD-MM-YYYY');

export const date = date => dayjs(date).format('YYYY/MM/DD');

export const date4 = date => dayjs(date).format('DD/MM/YYYY');

export const date5 = date => dayjs(date).format('DD-MM-YYYY HH:mm:ss');

export const date6 = date => dayjs(date).format('YYYY-MM-DD HH:mm:ss');

export const date7 = date => dayjs(date).format('ddd, MMM D, YYYY');

export const date8 = date => dayjs(date).format('D-MM-YYYY, HH:mm');

export const date9 = date => dayjs(date).format('YYYY-MM-DD');

export const date10 = date => dayjs(date).format('DD/MM/YYYY, HH:mm');

export const date11 = date => dayjs(date).format('HH:mm a');

import moment from 'moment-timezone';

export function formateDate(date: Date) {
  return moment.tz(date, 'Asia/Shanghai').format();
}

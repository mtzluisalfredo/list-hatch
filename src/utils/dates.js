import moment from 'moment';
import 'moment/locale/es';
moment.locale('es'); // aca ya esta en es

export function dateLocale(date = '', format = 'lll') {
  return moment(date).format(format);
}

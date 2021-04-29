/* eslint-disable no-bitwise */
import moment from 'moment';

export function hexToRgbA(hex, nivel = '1') {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return (
      'rgba(' +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
      ',' +
      nivel +
      ')'
    );
  }
  throw new Error('Error');
}

export function labelStatus(status) {
  let label = '';
  switch (status) {
    case 'active':
      label = 'Activo';
      break;
    case 'completed':
      label = 'Completado';
      break;
    case 'cancel':
      label = 'Cancelado';
      break;
    default:
      label = '';
  }

  return label;
}

export function orderListTask(list = []) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list
    .sort((a, b) => {
      return moment(a.createdAt).diff(b.createdAt);
    })
    .filter((e) => e.status !== 'cancel');
}

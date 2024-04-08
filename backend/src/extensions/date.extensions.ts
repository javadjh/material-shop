const moment = require('jalali-moment');
export {};

declare global {
  interface Date {
    toJalali(): string;
    toJalaliWithoutTime(): string;
    toTime(): string;
  }
}

Date.prototype.toJalali = function (): string {
  try {
    return moment(this, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD (HH:m)');
  } catch (err) {
    return '';
  }
};
Date.prototype.toTime = function (): string {
  try {
    return moment(this, 'YYYY/MM/DD').locale('fa').format('HH:m');
  } catch (err) {
    return '';
  }
};

Date.prototype.toJalaliWithoutTime = function (): string {
  try {
    return moment(this, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
  } catch (err) {
    return '';
  }
};

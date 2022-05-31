import { NativeModules } from 'react-native';

export const getRoundItem = (a: number) => {
  return a.toFixed().toString();
};

export const getPressure = (a: number) => {
  return a * 0.75;
};

const daysEn = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const daysRu = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

export const getWeekDay = (language: string) => {
  const date = new Date();

  if (language === 'en') {
    return daysEn[date.getDay()];
  }

  return daysRu[date.getDay()];
};

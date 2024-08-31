export function getRandomDate(startDate: Date, endDate: Date): Date {
  const timeDiff = endDate.getTime() - startDate.getTime();
  const randomTime = Math.floor(Math.random() * timeDiff) + startDate.getTime();
  return new Date(randomTime);
}

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getQueryDate(): Date[] {
  const dateUTC = new Date();
  const dateMMT = new Date(dateUTC.getTime() + 6.5 * 60 * 60 * 1000);
  const startOfDayMMT = new Date(dateMMT.getTime() - 24 * 60 * 60 * 1000);
  const endOfDayMMT = dateMMT;
  return [startOfDayMMT, endOfDayMMT];
}

type DataPoint<T> = {
  date: Date;
  [key: string]: T | Date;
};

type HourMap<T> = {
  [key: string]: { [property: string]: number };
};

type HourMapResult<T> = {
  hourMap: HourMap<T>;
  labels: string[];
};

export function generateHourMap<T>(
  allData: DataPoint<T>[],
  endOfDayMMT: Date,
  properties: Array<keyof Omit<DataPoint<T>, "date">>
): HourMapResult<T> {
  const hourMap: HourMap<T> = {};
  const labels: string[] = [];

  for (let i = 0; i < 24; i++) {
    const hourMMT = new Date(endOfDayMMT.getTime() - i * 60 * 60 * 1000);
    const hourKey = `${hourMMT.toISOString().slice(0, 10)} ${hourMMT
      .getUTCHours()
      .toString()
      .padStart(2, "0")}:00`;
    const hourString = `${hourMMT
      .getUTCHours()
      .toString()
      .padStart(2, "0")}:00`;

    hourMap[hourKey] = properties.reduce((acc, property) => {
      acc[property as string] = 0;
      return acc;
    }, {} as { [key: string]: number });

    labels.push(hourString);
  }

  allData.forEach((data) => {
    const dateMMT = new Date(data.date);
    const hourKey = `${dateMMT.toISOString().slice(0, 10)} ${dateMMT
      .getUTCHours()
      .toString()
      .padStart(2, "0")}:00`;

    if (hourMap[hourKey]) {
      properties.forEach((property) => {
        const value = data[property as string];
        if (typeof value === "number") {
          hourMap[hourKey][property as string] += value;
        }
      });
    }
  });

  return { hourMap, labels };
}

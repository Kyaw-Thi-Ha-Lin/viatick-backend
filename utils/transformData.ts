type DataObject<T> = {
  [key: string]: T;
};

type TransformedData = {
  label: string;
  data: number[];
};

export function transformData<T>(
  data: DataObject<T>,
  keys: Array<keyof T>,
  labels: string[]
): TransformedData[] {
  return keys.map((key, index) => ({
    label: labels[index],
    data: Object.keys(data).map((k) => data[k][key] as unknown as number),
  }));
}

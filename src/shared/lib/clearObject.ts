type Params = {
  [key: string]: string | number | string[];
};

export const clearObject = <T extends Params>(obj: T): Partial<T> => {
  const result: Partial<T> = {};
  for (const key in obj) {
    const value = obj[key];

    if (value) {
      result[key] = value;
    }
    
    if (!result.sortField) {
      delete result.sortType;
    }
  }
  return result;
};

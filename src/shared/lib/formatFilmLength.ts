export const formatFilmLength = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (minutes === 0) {
    return `${hours}ч`;
  }

  return `${hours}ч ${minutes} мин`;
};

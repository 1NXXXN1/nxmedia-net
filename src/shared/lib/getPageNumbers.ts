export const getPageNumbers = (currentPage: number, totalPages: number, delta: number) => {
  const pages = [];

  for (
    let i = Math.max(1, currentPage - delta);
    i <= Math.min(totalPages, currentPage + delta);
    i++
  ) {
    pages.push(i);
  }

  return pages;
};

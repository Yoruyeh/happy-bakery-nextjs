interface dynamicPageGeneratorProps {
  currentPage: number;
  totalPage: number;
  maxVisiblePage: number;
}

export function dynamicPageGenerator({
  currentPage,
  totalPage,
  maxVisiblePage,
}: dynamicPageGeneratorProps) {
  // 總頁數
  const pageArray = Array.from({ length: totalPage }, (_, i) => i + 1);

  // 現在頁前後顯示的頁數間隔
  const interval = (maxVisiblePage - 3) / 2;

  //  如果小於最大顯示頁數，直接回傳頁數陣列
  if (totalPage <= maxVisiblePage) {
    return pageArray;
  }

  let pages: (number | string)[] = [];
  // 第一頁永遠顯示
  pages.push(1);

  // 第二頁與現在頁往前間隔最小顯示頁數，回傳較大的值當顯示起點
  const start = Math.max(2, currentPage - interval);

  // 最後一頁的前一頁與現在頁往後間隔最大顯示頁數，回傳較小的值當顯示終點
  const end = Math.min(totalPage - 1, currentPage + interval);

  // 當起始頁超過2才插入...
  if (start > 2) {
    pages.push('...');
  }

  // 根據顯示間隔的起點頁到終點頁
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  // 當終點頁小於倒數第二頁時才插入...
  if (end < totalPage - 1) {
    pages.push('...');
  }

  // 最後一頁永遠顯示
  pages.push(totalPage);

  return pages;
}

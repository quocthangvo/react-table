import { useTranslation } from "react-i18next";

type Props = {
  page: {
    pages: number;
    pageSize: number;
    total: number | null;
  };
  setCurrentPage: (page: number) => void;
};

const Pagination = ({ page, setCurrentPage }: Props) => {
  const [t] = useTranslation("global");
  const { pages, pageSize, total } = page;
  let showPageNext = pages === 1 ? 1 : (pages - 1) * pageSize;
  let showPageLast = pages * pageSize;

  let totalPages =
    total === null
      ? 1
      : total % pageSize === 0
      ? total / pageSize
      : Math.floor(total / pageSize) + 1;

  let active = `flex items-center justify-center px-3 h-8 text-cyan-600 border border-gray-300 bg-cyan-50 hover:bg-cyan-100 hover:text-cyan-700 cursor-pointer dark:bg-[#1a2035] dark:text-cyan-700 dark:border-slate-300`;
  let noActive = `flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer dark:bg-[#1a2035] dark:text-white dark:border-slate-300`;

  const onPrevious = () => {
    if (pages !== 1) {
      setCurrentPage(pages - 1);
    }
  };

  const onNext = () => {
    if (pages !== totalPages && total !== 0) {
      setCurrentPage(pages + 1);
    }
  };

  const onPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <nav
      className="flex items-center sm:flex-column sm:flex-wrap md:flex-row justify-between pt-5 pb-1 px-3"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 md:mb-0 block w-full md:inline md:w-auto dark:text-white">
        {t("table.showing")}{" "}
        <span className="font-semibold text-gray-900 dark:text-cyan-700">
          {showPageNext} - {showPageLast}
        </span>{" "}
        {t("table.of")}{" "}
        <span className="font-semibold text-gray-900 dark:text-cyan-700">
          {total}
        </span>
      </span>
      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
        <li>
          <div
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer whitespace-nowrap dark:bg-[#1a2035] dark:text-white dark:border-slate-300"
            onClick={() => onPrevious()}
          >
            {t("table.previous")}
          </div>
        </li>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber, index) => (
            <li key={index}>
              <div
                className={pageNumber === pages ? active : noActive}
                onClick={() => onPage(pageNumber)}
              >
                {pageNumber}
              </div>
            </li>
          )
        )}
        <li>
          <div
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer whitespace-nowrap dark:bg-[#1a2035] dark:text-white dark:border-slate-300"
            onClick={() => onNext()}
          >
            {t("table.next")}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

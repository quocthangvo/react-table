import { useState, useEffect } from "react";
import type { TableProps } from "../../utils/interfaces/Table";

import TableHeader from "./Table/TableHeader";
import TableBody from "./Table/TableBody";
import Pagination from "./Table/Pagination";

type Props = {
  header: TableProps[];
  data: Array<Record<string, any>>;
  setData: (data: any) => void;
  page: {
    pages: number;
    pageSize: number;
    total: number | null;
  };
  setCurrentPage: (page: number) => void;
  getDataSingle: (data: any) => void;
  setClicked?: any;
  setPoints?: any;
};

const Table = ({
  header,
  data,
  page,
  setCurrentPage,
  getDataSingle,
  setData,
  setClicked,
  setPoints,
}: Props) => {
  const [activeRow, setActiveRow] = useState<null | number | undefined>(null);
  const [initialKey, setInitialKey] = useState<number | null>(null);

  const [activeSort, setActiveSort] = useState({
    sortField: header[0].state,
    sortOrder: "asc",
  });

  const onActiveRow = (key: number, data: any) => {
    // if (initialKey === key) {
    //   setActiveRow(null);
    //   getDataSingle({});
    //   setInitialKey(null);
    // } else {
    //   setActiveRow(key);
    //   getDataSingle(data);
    //   setInitialKey(key);
    // }
    if (initialKey === key) {
      setActiveRow(key);
      getDataSingle(data);
      setInitialKey(key);
    } else {
      setActiveRow(key);
      getDataSingle(data);
      setInitialKey(key);
    }
  };

  useEffect(() => {
    setActiveRow(null);
    getDataSingle({});

    handleSorting(activeSort.sortField, activeSort.sortOrder);
  }, [page]);

  const handleSorting = (sortField: string, sortOrder: string): void => {
    if (sortField) {
      const sorted = [...data].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setData(sorted);
      setActiveSort({ sortField, sortOrder });
    }
  };

  return (
    <>
      <div className="overflow-x-auto shadow rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <TableHeader
            header={header}
            activeSort={activeSort}
            handleSorting={handleSorting}
          />
          <TableBody
            header={header}
            data={data}
            activeRow={activeRow}
            onActiveRow={onActiveRow}
            setPoints={setPoints}
            setClicked={setClicked}
          />
        </table>
      </div>

      <Pagination page={page} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Table;

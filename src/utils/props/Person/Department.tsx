import type { IPerson } from "../../interfaces/Person/Person";
import type { TableProps } from "../../interfaces/Table";

type pageProps = {
  pages: number;
  pageSize: number;
  total: number;
};

export type PersonSearchProps = {
  page: pageProps;
  setPage: (page: pageProps) => void;
  departmentList: IPerson[];
  setDepartmentList: (item: IPerson[]) => void;
  currentPage: number;
  activeSort: {
    sortField: string;
    sortOrder: string;
  };
  getChoose: IPerson | any;
  refeshKey: number;
  setRefreshKey: (key: number | any) => void;
  setCheckFunction: (item: string | null) => void;
  setModal: (item: boolean | any) => void;
};

export type PersonTableProps = {
  header: TableProps[];
  activeSort: {
    sortField: string;
    sortOrder: string;
  };
  setActiveSort: (data: any) => void;
  setGetChooseRow?: (data: IPerson | any) => void;
  data: IPerson[];
  page: pageProps;
  setPage: (page: pageProps) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  refeshKey: number;
};

export type PersonTableHeaderProps = {
  header: TableProps[];
  activeSort: {
    sortField: string;
    sortOrder: string;
  };
  handleSorting: (sortField: string, sortOrder: string) => void;
};

export type PersonTablePagiantionProps = {
  page: pageProps;
  setPage: (page: pageProps) => void;
  currentPage: number;
  setCurrentPage: (page: number | any) => void;
};

export type PersonTableBodyProps = {
  header: TableProps[];
  data: IPerson[];
  activeRow: null | number | undefined;
  onActiveRow: (key: number, data: any) => void;
  setGetChooseRow?: (data: IPerson | any) => void;
};

export type PersonFormProps = {
  modal: boolean;
  setModal: (item: boolean | any) => void;
  checkFunction: string | any;
  data: IPerson;
  setRefreshKey: (key: number | any) => void;
};

import type { IDepartment } from "../../interfaces/Department/Department";
import type { TableProps } from "../../interfaces/Table";

type pageProps = {
  pages: number;
  pageSize: number;
  total: number;
};

export type DepartmentSearchProps = {
  page: pageProps;
  setPage: (page: pageProps) => void;
  departmentList: IDepartment[];
  setDepartmentList: (item: IDepartment[]) => void;
  currentPage: number;
  activeSort: {
    sortField: string;
    sortOrder: string;
  };
  getChoose: IDepartment | any;
  refeshKey: number;
  setRefreshKey: (key: number | any) => void;
  setCheckFunction: (item: string | null) => void;
  setModal: (item: boolean | any) => void;
};

export type DepartmentTableProps = {
  header: TableProps[];
  activeSort: {
    sortField: string;
    sortOrder: string;
  };
  setActiveSort: (data: any) => void;
  setGetChooseRow?: (data: IDepartment | any) => void;
  data: IDepartment[];
  page: pageProps;
  setPage: (page: pageProps) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  refeshKey: number;
};

export type DepartmentTableHeaderProps = {
  header: TableProps[];
  activeSort: {
    sortField: string;
    sortOrder: string;
  };
  handleSorting: (sortField: string, sortOrder: string) => void;
};

export type DepartmentTablePagiantionProps = {
  page: pageProps;
  setPage: (page: pageProps) => void;
  currentPage: number;
  setCurrentPage: (page: number | any) => void;
};

export type DepartmentTableBodyProps = {
  header: TableProps[];
  data: IDepartment[];
  activeRow: null | number | undefined;
  onActiveRow: (key: number, data: any) => void;
  setGetChooseRow?: (data: IDepartment | any) => void;
};

export type DepartmentFormProps = {
  modal: boolean;
  setModal: (item: boolean | any) => void;
  checkFunction: string | any;
  data: IDepartment;
  setRefreshKey: (key: number | any) => void;
};

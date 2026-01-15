// import { IVideoViewQuiz } from "../../../../interfaces/E-Learning/Report/VideoViewQuiz";
// import { ITimeUsage } from "../../../../interfaces/E-Learning/Report/VideoViewQuiz/TimeUsage";
// import { TableProps } from "../../../../interfaces/Table";

// type pageProps = {
//   pages: number;
//   pageSize: number;
//   total: number;
// };

// export type TimeUsageSearchProps = {
//   filter: IVideoViewQuiz;
//   page: pageProps;
//   setPage: (page: pageProps) => void;
//   timeUsageList: ITimeUsage[];
//   setTimeUsageList: (item: ITimeUsage[]) => void;
//   currentPage: number;
//   activeSort: {
//     sortField: string;
//     sortOrder: string;
//   };
//   getChoose: ITimeUsage | any;
//   refeshKey: number;
//   setRefreshKey: (key: number | any) => void;
// };
// export type TimeUsageTableProps = {
//   header: TableProps[];
//   data: ITimeUsage[];
//   activeSort: {
//     sortField: string;
//     sortOrder: string;
//   };
//   setActiveSort: (data: any) => void;
//   setGetChooseRow?: (data: ITimeUsage | any) => void;
//   page: pageProps;
//   setPage: (page: pageProps) => void;
//   currentPage: number;
//   setCurrentPage: (page: number) => void;
//   refeshKey: number;
// };

// export type TimeUsageTableHeaderProps = {
//   header: TableProps[];
//   activeSort: {
//     sortField: string;
//     sortOrder: string;
//   };
//   handleSorting: (sortField: string, sortOrder: string) => void;
// };

// export type TimeUsageTableBodyProps = {
//   header: TableProps[];
//   data: ITimeUsage[];
//   activeRow: null | number | undefined;
//   onActiveRow: (key: number, data: any) => void;
//   setGetChooseRow?: (data: ITimeUsage | any) => void;
// };

// export type TimeUsageTablePagiantionProps = {
//   page: pageProps;
//   setPage: (page: pageProps) => void;
//   currentPage: number;
//   setCurrentPage: (page: number | any) => void;
// };

// export type VideoViewQuizTimeUsageProps = {
//   query: IVideoViewQuiz;
//   refeshQuery: number;
// };

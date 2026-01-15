// import { TableProps } from "../../../../interfaces/Table";
// import { IQuizList } from "../../../../interfaces/E-Learning/Report/VideoViewQuiz/QuizList";
// import { IVideoViewQuiz } from "../../../../interfaces/E-Learning/Report/VideoViewQuiz";

// type pageProps = {
//   pages: number;
//   pageSize: number;
//   total: number;
// };

// export type QuizListSearchProps = {
//   filter: IVideoViewQuiz;
//   page: pageProps;
//   setPage: (page: pageProps) => void;
//   quizList: IQuizList[];
//   setQuizList: (item: IQuizList[]) => void;
//   currentPage: number;
//   activeSort: {
//     sortField: string;
//     sortOrder: string;
//   };
//   getChoose: IQuizList | any;
//   refeshKey: number;
//   setRefreshKey: (key: number | any) => void;
// };
// export type QuizListTableProps = {
//   header: TableProps[];
//   data: IQuizList[];
//   activeSort: {
//     sortField: string;
//     sortOrder: string;
//   };
//   setActiveSort: (data: any) => void;
//   setGetChooseRow?: (data: IQuizList | any) => void;
//   page: pageProps;
//   setPage: (page: pageProps) => void;
//   currentPage: number;
//   setCurrentPage: (page: number) => void;
//   refeshKey: number;
// };

// export type QuizListTableHeaderProps = {
//   header: TableProps[];
//   activeSort: {
//     sortField: string;
//     sortOrder: string;
//   };
//   handleSorting: (sortField: string, sortOrder: string) => void;
// };

// export type QuizListTableBodyProps = {
//   header: TableProps[];
//   data: IQuizList[];
//   activeRow: null | number | undefined;
//   onActiveRow: (key: number, data: any) => void;
//   setGetChooseRow?: (data: IQuizList | any) => void;
// };

// export type QuizListTablePagiantionProps = {
//   page: pageProps;
//   setPage: (page: pageProps) => void;
//   currentPage: number;
//   setCurrentPage: (page: number | any) => void;
// };

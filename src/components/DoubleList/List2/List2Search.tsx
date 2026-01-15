// import React, { useEffect } from "react";
// import { Toast } from "../../../../../utils/helper/Toasts";
// import { QuizListSearchProps } from "../../../../../utils/props/E-Learning/Report/VideoViewQuiz/QuizList";

// import ReportApi from "../../../../../api/Report/Report";

// const QuizListSearch = ({
//   filter,
//   page,
//   setPage,
//   setQuizList,
//   currentPage,
//   activeSort,
//   refeshKey,
// }: QuizListSearchProps) => {
//   const languageStorage = JSON.parse(localStorage.getItem("language") as any);

//   // FETCH
//   const fetchQuizList = async (
//     currentPage: number,
//     pageSize: number,
//     activeSort: any,
//     language: string
//   ) => {
//     try {
//       const response = await ReportApi.getQuizList(
//         currentPage,
//         pageSize,
//         {
//           ...filter,
//           sort: activeSort,
//         },
//         language
//       );
//       if (response.status === 201) {
//         setQuizList(response.data.data);
//         setPage({
//           ...page,
//           pages: response.data.page,
//           pageSize: response.data.pageSize,
//           total: response.data.total,
//         });
//       }
//     } catch (error: any) {
//       Toast.fire({
//         icon: "error",
//         title: error.response.data.message,
//       });
//     }
//   };

//   useEffect(() => {
//     fetchQuizList(
//       currentPage,
//       Number(page.pageSize),
//       activeSort,
//       languageStorage
//     );
//   }, [
//     currentPage,
//     Number(page.pageSize),
//     activeSort,
//     refeshKey,
//     languageStorage,
//   ]);

//   useEffect(() => {
//     fetchQuizList(1, Number(page.pageSize), activeSort, languageStorage);
//   }, [filter]);
//   // FETCH
//   return <React.Fragment></React.Fragment>;
// };

// export default QuizListSearch;

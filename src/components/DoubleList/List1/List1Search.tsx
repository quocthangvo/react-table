// import React, { useEffect } from "react";
// import { Toast } from "../../../../../utils/helper/Toasts";
// import { TimeUsageSearchProps } from "../../../../../utils/props/E-Learning/Report/VideoViewQuiz/TimeUsageQuiz";

// import ReportApi from "../../../../../api/Report/Report";

// const TimeUsageSearch = ({
//   filter,
//   page,
//   setPage,
//   setTimeUsageList,
//   currentPage,
//   activeSort,
//   refeshKey,
// }: TimeUsageSearchProps) => {
//   const languageStorage = JSON.parse(localStorage.getItem("language") as any);

//   // FETCH
//   const fetchTimeUsage = async (
//     currentPage: number,
//     pageSize: number,
//     activeSort: any,
//     language: string
//   ) => {
//     try {
//       const response = await ReportApi.getTimeUsage(
//         currentPage,
//         pageSize,
//         {
//           ...filter,
//           sort: activeSort,
//         },
//         language
//       );
//       if (response.status === 201) {
//         setTimeUsageList(response.data.data);
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
//     fetchTimeUsage(
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
//     fetchTimeUsage(1, Number(page.pageSize), activeSort, languageStorage);
//   }, [filter]);

//   // FETCH

//   return <React.Fragment></React.Fragment>;
// };

// export default TimeUsageSearch;

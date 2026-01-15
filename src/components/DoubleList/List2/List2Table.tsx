// import { QuizListTableProps } from "../../../../../utils/props/E-Learning/Report/VideoViewQuiz/QuizList";
// import { useEffect, useRef, useState } from "react";

// import QuizListTableHeader from "./QuizListTable/QuizListTableHeader";
// import QuizListTableBody from "./QuizListTable/QuizListTableBody";
// import QuizListTablePagination from "./QuizListTable/QuizListTablePagination";

// const QuizListTable = ({
//   header,
//   data,
//   activeSort,
//   setActiveSort,
//   setGetChooseRow,
//   page,
//   setPage,
//   currentPage,
//   setCurrentPage,
//   refeshKey,
// }: QuizListTableProps) => {
//   const tableRef = useRef<HTMLDivElement>(null);
//   const [activeRow, setActiveRow] = useState<null | number | undefined>(null);
//   const [initialKey, setInitialKey] = useState<number | null>(null);

//   const onActiveRow = (key: number, data: any) => {
//     if (initialKey === key) {
//       setActiveRow(null);
//       if (setGetChooseRow) {
//         setGetChooseRow({});
//       }
//       setInitialKey(null);
//     } else {
//       setActiveRow(key);
//       if (setGetChooseRow) {
//         setGetChooseRow(data);
//       }

//       setInitialKey(key);
//     }
//   };

//   const handleSorting = (sortField: string, sortOrder: string): void => {
//     setActiveSort({ sortField, sortOrder });
//   };

//   useEffect(() => {
//     setActiveRow(null);
//     if (setGetChooseRow) {
//       setGetChooseRow({});
//     }
//     setInitialKey(null);
//   }, [refeshKey]);
//   return (
//     <div>
//       <div className="relative mt-6">
//         <div ref={tableRef} className="overflow-x-auto shadow rounded-lg">
//           <table className="w-full min-w-max text-left">
//             <QuizListTableHeader
//               header={header}
//               activeSort={activeSort}
//               handleSorting={handleSorting}
//             />
//             <QuizListTableBody
//               header={header}
//               data={data}
//               activeRow={activeRow}
//               onActiveRow={onActiveRow}
//             />
//           </table>
//         </div>
//         <QuizListTablePagination
//           page={page}
//           setPage={setPage}
//           currentPage={currentPage}
//           setCurrentPage={setCurrentPage}
//         />
//       </div>
//     </div>
//   );
// };

// export default QuizListTable;

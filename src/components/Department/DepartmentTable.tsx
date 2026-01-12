// import { useEffect, useRef, useState } from "react";
// import { DepartmentTableProps } from "../../../../utils/props/E-Learning/AdministratorPaner/Department";

// import DepartmentTableHeader from "./DepartmentTable/DepartmentTableHeader";
// import DepartmentTablePagination from "./DepartmentTable/DepartmentTablePagination";
// import DepartmentTableBody from "./DepartmentTable/DepartmentTableBody";

// const DepartmentTable = ({
//   header,
//   activeSort,
//   setActiveSort,
//   setGetChooseRow,
//   data,
//   page,
//   setPage,
//   currentPage,
//   setCurrentPage,
//   refeshKey,
// }: DepartmentTableProps) => {
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
//     <div className="relative mt-6">
//       <div ref={tableRef} className="overflow-x-auto shadow rounded-lg">
//         <table className="w-full min-w-max text-left">
//           <DepartmentTableHeader
//             header={header}
//             activeSort={activeSort}
//             handleSorting={handleSorting}
//           />

//           <DepartmentTableBody
//             header={header}
//             data={data}
//             activeRow={activeRow}
//             onActiveRow={onActiveRow}
//           />
//         </table>
//       </div>
//       <DepartmentTablePagination
//         page={page}
//         setPage={setPage}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       />
//     </div>
//   );
// };

// export default DepartmentTable;

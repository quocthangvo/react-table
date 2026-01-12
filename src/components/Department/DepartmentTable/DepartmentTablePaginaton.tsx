// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { DepartmentTablePagiantionProps } from "../../../../../utils/props/E-Learning/AdministratorPaner/Department";
// import { PAGE_SIZE } from "../../../../../utils/constants/Common";
// import {
//   MdKeyboardArrowLeft,
//   MdKeyboardArrowRight,
//   MdOutlineKeyboardDoubleArrowLeft,
//   MdOutlineKeyboardDoubleArrowRight,
// } from "react-icons/md";

// const DepartmentTablePagination = ({
//   page,
//   setPage,
//   setCurrentPage,
// }: DepartmentTablePagiantionProps) => {
//   const [t] = useTranslation("global");
//   const { pages, pageSize, total } = page;
//   const [enterPage, setEnterPage] = useState(1);
//   let totalPages =
//     total === null
//       ? 1
//       : total % pageSize === 0
//       ? total / pageSize
//       : Math.floor(total / pageSize) + 1;

//   const onFirst = () => {
//     setCurrentPage(1);
//     setEnterPage(1);
//   };

//   const onPrevious = () => {
//     if (pages !== 1) {
//       setCurrentPage(pages - 1);
//       setEnterPage(pages - 1);
//     }
//   };

//   const onChangeEnterPage = (e: any) => {
//     if (Number(e.target.value) <= totalPages) {
//       setEnterPage(e.target.value);
//     }
//   };

//   const onGo = () => {
//     setCurrentPage(enterPage);
//   };

//   const onNext = () => {
//     if (pages !== totalPages && total !== 0) {
//       setCurrentPage(pages + 1);
//       setEnterPage(pages + 1);
//     }
//   };

//   const onLast = () => {
//     setCurrentPage(totalPages);
//     setEnterPage(totalPages);
//   };

//   useEffect(() => {
//     setEnterPage(pages);
//   }, [page]);

//   const onChangePageSize = (event: any) => {
//     setPage({ ...page, pageSize: event.target.value });
//   };

//   return (
//     <div className="flex md:flex-col items-center justify-between mt-3">
//       <div className="flex flex-row gap-2 items-center">
//         {t("pagination.show")}
//         <select
//           className="w-[75px] border-[#a8b3bd] dark:bg-[#1a2035] dark:border-transparent"
//           value={pageSize}
//           onChange={(event: any) => onChangePageSize(event)}
//         >
//           {PAGE_SIZE.map((item, index) => (
//             <option value={item.value} key={index}>
//               {item.name}
//             </option>
//           ))}
//         </select>
//         {t("pagination.entries")}
//       </div>
//       <div className="px-2 py-3">
//         <ol className="flex items-center text-sm text-[#6e6a69] dark:text-white">
//           <li>
//             <button
//               type="button"
//               className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-[#6e6a69]/5 focus:bg-[#6e6a69]/10 focus:ring-2 focus:ring-[#6e6a69] dark:hover:bg-[#6e6a69]/5 transition text-[#6e6a69]"
//               aria-label="First"
//               rel="first"
//               onClick={() => onFirst()}
//             >
//               <MdOutlineKeyboardDoubleArrowLeft className="dark:text-white" />
//             </button>
//           </li>
//           <li>
//             <button
//               type="button"
//               className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-[#6e6a69]/5 focus:bg-[#6e6a69]/10 focus:ring-2 focus:ring-[#6e6a69] dark:hover:bg-[#6e6a69]/5 transition text-[#6e6a69]"
//               aria-label="Previous"
//               rel="prev"
//               onClick={() => onPrevious()}
//             >
//               <MdKeyboardArrowLeft className="dark:text-white" />
//             </button>
//           </li>
//           <li>
//             <input
//               type="text"
//               name="Page"
//               className="w-[70px] border-[#a8b3bd] dark:bg-[#1a2035] dark:border-transparent"
//               value={enterPage}
//               onChange={(e) => onChangeEnterPage(e)}
//             />
//             <span className="ml-2">
//               {t("pagination.of")} {totalPages}
//             </span>
//           </li>
//           <li>
//             <button
//               type="button"
//               className="text-white bg-[#0e7490] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-[#0e7490] font-medium px-5 py-2.5 text-center transition-all duration-300 ease-in-out hover:bg-[#0e7490]/80 mx-2"
//               aria-label="Next"
//               rel="next"
//               onClick={() => onGo()}
//             >
//               {t("pagination.go")}
//             </button>
//           </li>
//           <li>
//             <button
//               type="button"
//               className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-[#4a4543]/5 focus:bg-[#4a4543]/10 focus:ring-2 focus:ring-[#4a4543] dark:hover:bg-gray-[#4a4543]/5 transition text-[#4a4543]"
//               aria-label="Next"
//               rel="next"
//               onClick={() => onNext()}
//             >
//               <MdKeyboardArrowRight className="dark:text-white" />
//             </button>
//           </li>
//           <li>
//             <button
//               type="button"
//               className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-[#4a4543]/5 focus:bg-[#4a4543]/10 focus:ring-2 focus:ring-[#4a4543] dark:hover:bg-gray-[#4a4543]/5 transition text-[#4a4543]"
//               aria-label="Next"
//               rel="next"
//               onClick={() => onLast()}
//             >
//               <MdOutlineKeyboardDoubleArrowRight className="dark:text-white" />
//             </button>
//           </li>
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default DepartmentTablePagination;

// import React from "react";

// const CategoryTableHeader = () => {
//   return <div>CategoryTableHeader</div>;
// };

// export default CategoryTableHeader;
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { DepartmentTableHeaderProps } from "../../../../../utils/props/E-Learning/AdministratorPaner/Department";

// const DepartmentTableHeader = ({
//   header,
//   activeSort,
//   handleSorting,
// }: DepartmentTableHeaderProps) => {
//   return (
//     <thead className="text-xs text-white uppercase bg-cyan-700">
//       <tr>
//         {header?.map((item, index) => (
//           <th scope="col" className="px-6 py-6" key={index}>
//             <div className="flex gap-2 justify-between items-center">
//               <div className="whitespace-nowrap">{item.name}</div>
//               <div>
//                 <div
//                   className={`cursor-pointer ${
//                     activeSort.sortField === item.state &&
//                     activeSort.sortOrder === "asc"
//                       ? "text-stone-700"
//                       : ""
//                   } `}
//                   onClick={() => handleSorting(item.state, "asc")}
//                 >
//                   {item.state !== "Action" ? <IoIosArrowUp size={13} /> : ""}
//                 </div>
//                 <div
//                   className={`cursor-pointer ${
//                     activeSort.sortField === item.state &&
//                     activeSort.sortOrder === "desc"
//                       ? "text-stone-700"
//                       : ""
//                   } `}
//                   onClick={() => handleSorting(item.state, "desc")}
//                 >
//                   {item.state !== "Action" ? <IoIosArrowDown size={13} /> : ""}
//                 </div>
//               </div>
//             </div>
//           </th>
//         ))}
//       </tr>
//     </thead>
//   );
// };

// export default DepartmentTableHeader;

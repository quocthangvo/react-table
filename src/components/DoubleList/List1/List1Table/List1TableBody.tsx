// import { useTranslation } from "react-i18next";
// import { TimeUsageTableBodyProps } from "../../../../../../utils/props/E-Learning/Report/VideoViewQuiz/TimeUsageQuiz";
// import Typography from "../../../../../common/Typography";

// const TimeUsageTableBody = ({
//   header,
//   data,
//   activeRow,
//   onActiveRow,
// }: TimeUsageTableBodyProps) => {
//   const [t] = useTranslation("global");
//   return (
//     <tbody>
//       {data?.length === 0 ? (
//         <tr>
//           <td colSpan={header?.length} className="text-center px-4">
//             <div className="relative my-2">
//               <Typography
//                 className="text-center px-6 py-4"
//                 name={t("table.no_data")}
//               />
//             </div>
//           </td>
//         </tr>
//       ) : (
//         data.map((item, index) => {
//           return (
//             <tr
//               key={index}
//               className={`${
//                 index % 2 === 0
//                   ? activeRow === index
//                     ? "bg-cyan-600/90 text-white"
//                     : "bg-white dark:bg-[#202940] dark:text-white"
//                   : activeRow === index
//                   ? "bg-cyan-600/90 text-white"
//                   : "bg-slate-50 dark:bg-[#202940] dark:text-white"
//               }
//             transition-all ease-linear duration-100 border-b dark:border-none cursor-pointer`}
//               onClick={() => onActiveRow(index, item)}
//             >
//               <td className="p-4">{item.UserID}</td>
//               <td className="p-4">{item.Name}</td>
//               <td className="p-4">{item.Factory}</td>
//               <td className="p-4">{item.Department_Name}</td>
//               <td className="p-4">{item.Duration}</td>
//             </tr>
//           );
//         })
//       )}
//     </tbody>
//   );
// };

// export default TimeUsageTableBody;

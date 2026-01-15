// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { TypeProps } from "../../../../utils/interfaces/Select";
// import { IDepartment } from "../../../../utils/interfaces/E-Learning/AdministratorPaner/Department";
// import { useFormik } from "formik";
// import { useAppSelector } from "../../../../utils/hook/useAppSelector";
// import { RootState } from "../../../../store";
// import { Toast } from "../../../../utils/helper/Toasts";

// import { VideoViewQuizSearchProps } from "../../../../utils/props/E-Learning/Report/VideoViewQuiz";

// import Input from "../../../common/Input";
// import Button from "../../../common/Button";
// import Select from "../../../common/Select";
// import SelectedMultiple from "../../../common/SelectedMultiple";

// import ReportApi from "../../../../api/Report/Report";
// import ImageExcel from "../../../../assets/images/excel.png";

// const VideoViewQuizSearch = ({ setFilter }: VideoViewQuizSearchProps) => {
//   const [t] = useTranslation("global");
//   const languageStorage = JSON.parse(localStorage.getItem("language") as any);
//   const { user } = useAppSelector((state: RootState) => state.authState);

//   const [department, setDepartment] = useState<TypeProps[]>([]);
//   const [employee, setEmployee] = useState<TypeProps[]>([]);

//   // ACTION
//   const exportExcel = async () => {
//     let data = {
//       department: formik.values.department,
//       employee: formik.values.employee,
//     };
//     const response = await ReportApi.exportExcelCourseCompletion(data);
//     const url = window.URL.createObjectURL(new Blob([response.data]));
//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download", "E Learning report.xls");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     window.URL.revokeObjectURL(url);
//   };

//   const formik = useFormik({
//     initialValues: {
//       date: new Date().toISOString().slice(0, 10),
//       date_to: new Date().toISOString().slice(0, 10),
//       department: user.showAll ? "" : user.department,
//       employee: "",
//       refresh_key: 0,
//     },
//     onSubmit: async (data) => {
//       try {
//         setFilter({
//           ...data,
//           refresh_key: data.refresh_key + 1,
//         });
//       } catch (error: any) {
//         Toast.fire({
//           icon: "error",
//           title: error.response.data.message,
//         });
//       }
//     },
//   });
//   // ACTION

//   // FETCH
//   const fetchAllDepartment = async (language: string) => {
//     try {
//       const response = await ReportApi.getDepartment(language);
//       if (response.status === 200) {
//         const data = response.data.data?.map((item: IDepartment) => {
//           return {
//             name: item.Department_Name,
//             value: item.ID,
//           };
//         });
//         setDepartment(data);
//       }
//     } catch (error: any) {
//       Toast.fire({
//         icon: "error",
//         title: error.response.data.message,
//       });
//     }
//   };

//   const fetchEmployeeByDepartment = async (
//     department: any,
//     language: string
//   ) => {
//     try {
//       const response = await ReportApi.getEmployeeByDepartment(
//         department,
//         language
//       );
//       if (response.status === 200) {
//         const data = response.data.data?.map((item: any) => {
//           return {
//             label: item.Name,
//             value: item.UserID,
//           };
//         });
//         setEmployee(data);
//       }
//     } catch (error: any) {
//       Toast.fire({
//         icon: "error",
//         title: error.response.data.message,
//       });
//     }
//   };

//   useEffect(() => {
//     fetchAllDepartment(languageStorage);
//   }, [languageStorage]);

//   useEffect(() => {
//     if (department.length > 0) {
//       fetchEmployeeByDepartment(department[0].value, languageStorage);
//     }
//   }, [department, languageStorage]);

//   useEffect(() => {
//     if (formik.values.department) {
//       fetchEmployeeByDepartment(formik.values.department, languageStorage);
//     } else {
//       setEmployee([]);
//     }
//   }, [formik.values.department, languageStorage]);
//   // FETCH

//   return (
//     <div className="flex flex-row lg:flex-col gap-2 justify-between mb-8">
//       <form onSubmit={formik.handleSubmit}>
//         <div className="w-full grid grid-cols-8 xl:grid-cols-4 md:grid-cols-1 gap-2 items-end">
//           <div>
//             <Input
//               label={t("report.date_form")}
//               type="date"
//               name="date"
//               value={formik.values.date}
//               onChange={formik.handleChange}
//             />
//           </div>
//           <div>
//             <Input
//               // label={t("report.date_to")}
//               label={""}
//               type="date"
//               name="date_to"
//               value={formik.values.date_to}
//               onChange={formik.handleChange}
//             />
//           </div>
//           <div>
//             <Select
//               label={t("report.department")}
//               name="department"
//               options={department}
//               value={formik.values.department}
//               onChange={(e) => {
//                 formik.setFieldValue("department", e.target.value);
//                 formik.setFieldValue("employee", "");
//                 fetchEmployeeByDepartment(e.target.value, languageStorage);
//               }}
//               showAllSelect={true}
//               isShowAllSelect={false}
//             />
//           </div>
//           <div>
//             <SelectedMultiple
//               label={t("report.employee")}
//               name="employee"
//               options={employee}
//               value={formik.values.employee}
//               onChange={formik.handleChange}
//               checkNoAll={false}
//             />
//           </div>

//           <div className="flex flex-row sm:flex-row items-center md:items-start gap-2">
//             <Button
//               label={t("action.search")}
//               type="submit"
//               className="bg-cyan-700 hover:bg-cyan-700/80 focus:ring-cyan-700/60 whitespace-nowrap"
//             />
//             <Button
//               imgSrc={ImageExcel}
//               label={t("action.excel")}
//               type="button"
//               onClick={exportExcel}
//               className="bg-green-700 hover:bg-green-700/80 focus:ring-green-700/60 whitespace-nowrap flex justify-center items-center gap-1"
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default VideoViewQuizSearch;

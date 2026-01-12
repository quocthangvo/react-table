// import { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import { useTranslation } from "react-i18next";
// import {
//   swalWithBootstrapButtons,
//   Toast,
// } from "../../../../utils/helper/Toasts";
// import { DepartmentSearchProps } from "../../../../utils/props/E-Learning/AdministratorPaner/Department";

// import SelectedSearch from "../../../common/SelectedSearch";
// import Button from "../common/Button";

// const DepartmentSearch = ({
//   page,
//   setPage,
//   departmentList,
//   setDepartmentList,
//   currentPage,
//   activeSort,
//   getChoose,
//   refeshKey,
//   setRefreshKey,
//   setCheckFunction,
//   setModal,
// }: DepartmentSearchProps) => {
//   const [t] = useTranslation("global");
//   const languageStorage = JSON.parse(localStorage.getItem("language") as any);

//   const [departmentFilter, setDepartmentFilter] = useState([
//     { label: "", value: 0 },
//   ]);

//   // ACTION
//   const formik = useFormik({
//     initialValues: {
//       department: {
//         label: "",
//         value: "",
//       },
//     },
//     onSubmit: async (data) => {
//       try {
//         const response = await DepartmentApi.getDepartmentList(
//           1,
//           page.pageSize,
//           {
//             department:
//               data.department === null
//                 ? ""
//                 : data.department.value === null ||
//                   data.department.value === "null"
//                 ? ""
//                 : data.department.value,
//             sort: activeSort,
//           },
//           languageStorage
//         );

//         if (response.status === 201) {
//           setDepartmentList(response.data.data);
//           setPage({
//             ...page,
//             pages: response.data.page,
//             pageSize: response.data.pageSize,
//             total: response.data.total,
//           });
//         }
//       } catch (error: any) {
//         Toast.fire({
//           icon: "error",
//           title: error.response.data.message,
//         });
//       }
//     },
//   });
//   const addDepartment = () => {
//     setCheckFunction("add");
//     setModal((prev: any) => !prev);
//   };

//   const editDepartment = () => {
//     if (Object.keys(getChoose).length !== 0) {
//       setCheckFunction("edit");
//       setModal((prev: any) => !prev);
//     } else {
//       Toast.fire({
//         icon: "error",
//         title: t("info.choose_a_row"),
//       });
//     }
//   };

//   const deleteDepartment = () => {
//     if (Object.keys(getChoose).length !== 0) {
//       swalWithBootstrapButtons
//         .fire({
//           title: t("action.are_you_sure"),
//           text: t("action.are_you_sure_info"),
//           icon: "warning",
//           showCancelButton: true,
//           confirmButtonText: t("action.yes_delete_it"),
//           cancelButtonText: t("action.no_cancel"),
//           reverseButtons: true,
//         })
//         .then(async (result) => {
//           if (result.isConfirmed) {
//             const response = await DepartmentApi.deleteDepartment(
//               getChoose.ID,
//               languageStorage
//             );

//             if (response.status === 200) {
//               swalWithBootstrapButtons.fire({
//                 title: t("action.delete"),
//                 text: response.data.message,
//                 icon: "success",
//               });

//               setRefreshKey((oldKey: any) => oldKey + 1);
//             }
//           }
//         });
//     } else {
//       Toast.fire({
//         icon: "error",
//         title: t("info.choose_a_row"),
//       });
//     }
//   };
//   // ACTION

//   // FECTH
//   const fetchDepartmentFilter = async (language: string) => {
//     try {
//       const response = await DepartmentApi.getDepartment(language);

//       if (response.status === 200) {
//         const formatData = response.data.data.map((itemDepartment: any) => {
//           return {
//             label: itemDepartment.Department_Name,
//             value: itemDepartment.ID,
//           };
//         });

//         setDepartmentFilter(formatData);
//       }
//     } catch (error: any) {
//       Toast.fire({
//         icon: "error",
//         title: error.response.data.message,
//       });
//     }
//   };

//   const fetchDepartmentList = async (
//     pageSize: number,
//     currentPage: number,
//     activeSort: any,
//     language: string
//   ) => {
//     try {
//       const response = await DepartmentApi.getDepartmentList(
//         currentPage,
//         pageSize,
//         {
//           department:
//             formik.values.department === null
//               ? ""
//               : formik.values.department.value === null ||
//                 formik.values.department.value === "null"
//               ? ""
//               : formik.values.department.value,
//           sort: activeSort,
//         },
//         language
//       );

//       if (response.status === 201) {
//         setDepartmentList(response.data.data);
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
//     fetchDepartmentFilter(languageStorage);
//   }, [languageStorage]);

//   useEffect(() => {
//     fetchDepartmentList(
//       Number(page.pageSize),
//       currentPage,
//       activeSort,
//       languageStorage
//     );
//   }, [
//     Number(page.pageSize),
//     currentPage,
//     activeSort,
//     refeshKey,
//     languageStorage,
//   ]);

//   useEffect(() => {
//     if (departmentList.length === 0 && currentPage !== 1) {
//       fetchDepartmentList(
//         Number(page.pageSize),
//         currentPage - 1,
//         activeSort,
//         languageStorage
//       );
//     }
//   }, [departmentList]);
//   // FECTH

//   return (
//     <div className="flex flex-row lg:flex-col gap-2 justify-between mb-8">
//       <form
//         className="w-full grid grid-cols-8 xl:grid-cols-4 md:grid-cols-1 gap-2"
//         onSubmit={formik.handleSubmit}
//       >
//         <div>
//           <SelectedSearch
//             label={t("department.department_name")}
//             name="department"
//             options={departmentFilter}
//             value={formik.values.department}
//             onChange={formik.handleChange}
//             classNameLabel="mb-2"
//           />
//         </div>
//         <div className="flex flex-row md:flex-col items-center md:items-start gap-2">
//           <Button
//             label={t("action.search")}
//             type="submit"
//             className="bg-cyan-700 hover:bg-cyan-700/80 focus:ring-cyan-700/60 mt-7 md:mt-0"
//           />
//         </div>
//       </form>
//       <div className="flex flex-row mt-5 items-center lg:items-start gap-2">
//         <Button
//           label={t("action.add")}
//           type="button"
//           className="bg-[#1c63f0]  hover:bg-[#1c63f0] /80 focus:ring-[#1c63f0]/60"
//           onClick={addDepartment}
//         />
//         <Button
//           label={t("action.edit")}
//           type="button"
//           className="bg-[#f7c600]  hover:bg-[#f7c600]/80 focus:ring-[#f7c600]/60"
//           onClick={editDepartment}
//         />
//         <Button
//           label={t("action.remove")}
//           type="button"
//           className="bg-[#e02424]  hover:bg-[#e02424]/90 focus:ring-[#e02424]/60"
//           onClick={deleteDepartment}
//         />
//       </div>
//     </div>
//   );
// };

// export default DepartmentSearch;

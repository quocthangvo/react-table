// import React, { useState } from "react";

// import { useTranslation } from "react-i18next";
// import Card from "../components/common/Card";
// import Typography from "../components/common/Typography";

// const Department = () => {
//   const [t] = useTranslation("global");
//   const [departmentList, setDepartmentList] = useState<IDepartment[] | any>([]);
//   const [getOneDepartment, setGetOneDepartment] = useState<IDepartment | any>(
//     {}
//   );
//   const [page, setPage] = useState({ pages: 1, pageSize: 5, total: 0 });
//   const [activeSort, setActiveSort] = useState(DEPARTMENT_FILTER);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [refeshKey, setRefreshKey] = useState<number>(1);
//   const [checkFunction, setCheckFunction] = useState<string | null>(null);
//   const [modalDepartment, setModalDepartment] = useState<boolean>(false);

//   return (
//     <React.Fragment>
//       <Card>
//         <Typography
//           name={t("department.department")}
//           className={"text-2xl font-bold subpixel-antialiased mb-5"}
//         />

//         <DepartmentSearch
//           page={page}
//           setPage={setPage}
//           departmentList={departmentList}
//           setDepartmentList={setDepartmentList}
//           currentPage={currentPage}
//           activeSort={activeSort}
//           getChoose={getOneDepartment}
//           refeshKey={refeshKey}
//           setRefreshKey={setRefreshKey}
//           setCheckFunction={setCheckFunction}
//           setModal={setModalDepartment}
//         />

//         <DepartmentTable
//           header={DEPARTMENT_TABLE(t)}
//           activeSort={activeSort}
//           setActiveSort={setActiveSort}
//           setGetChooseRow={setGetOneDepartment}
//           data={departmentList}
//           page={page}
//           setPage={setPage}
//           currentPage={currentPage}
//           setCurrentPage={setCurrentPage}
//           refeshKey={refeshKey}
//         />
//       </Card>

//       <DepartmentForm
//         modal={modalDepartment}
//         setModal={setModalDepartment}
//         checkFunction={checkFunction}
//         data={getOneDepartment}
//         setRefreshKey={setRefreshKey}
//       />
//     </React.Fragment>
//   );
// };

// export default Department;

import type { TableProps } from "../../interfaces/Table";

type TranslationFunction = (
  key: string,
  options?: Record<string, any>
) => string;

export const DEPARTMENT_TABLE = (t: TranslationFunction) => {
  const tableHeader: TableProps[] = [
    // {
    //   name: t("department.ID"),
    //   state: "ID",
    // },
    {
      name: t("department.department_name"),
      state: "Department_Name",
    },
    {
      name: t("department.department_name_vn"),
      state: "Department_Name_VN",
    },
    {
      name: t("department.department_name_cn"),
      state: "Department_Name_CN",
    },
    {
      name: t("department.department_name_mm"),
      state: "Department_Name_MY",
    },
    {
      name: t("department.password"),
      state: "Password",
    },
    {
      name: t("department.created_user"),
      state: "Created_User",
    },
    {
      name: t("department.dated_user"),
      state: "Dated_User",
    },
  ];

  return tableHeader;
};

export const DEPARTMENT_FILTER = {
  sortField: DEPARTMENT_TABLE((t) => t)[0].state,
  sortOrder: "asc",
};

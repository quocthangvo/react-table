import type { TableProps } from "../../interfaces/Table";

export const PERSON_TABLE = () => {
  const tableHeader: TableProps[] = [
    {
      name: "ID",
      state: "ID",
    },
    {
      name: "Name",
      state: "Department_Name",
    },
    {
      name: "Profession",
      state: "Department_Name_VN",
    },
    {
      name: "Accomplishment",
      state: "Department_Name_CN",
    },
    {
      name: "ImageId",
      state: "Department_Name_MY",
    },
    {
      name: "Created_Date",
      state: "Password",
    },
  ];

  return tableHeader;
};

export const PERSON_FILTER = {
  sortField: PERSON_TABLE()[0].state,
  sortOrder: "asc",
};

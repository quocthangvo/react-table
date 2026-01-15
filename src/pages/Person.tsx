import React, { useState } from "react";

import Card from "../components/common/Card";
import Typography from "../components/common/Typography";
import type { IPerson } from "../utils/interfaces/Person/Person";
import {
  PERSON_FILTER,
  PERSON_TABLE,
} from "../utils/constants/Person/Department";
import PersonSearch from "../components/Person/PersonSearch";

const Person = () => {
  const [personList, setPersonList] = useState<IPerson[] | any>([]);
  const [getOnePerson, setGetOnePerson] = useState<IPerson | any>({});
  const [page, setPage] = useState({ pages: 1, pageSize: 5, total: 0 });
  const [activeSort, setActiveSort] = useState(PERSON_FILTER);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [refeshKey, setRefreshKey] = useState<number>(1);
  const [checkFunction, setCheckFunction] = useState<string | null>(null);
  const [modalDepartment, setModalDepartment] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Card>
        <Typography
          name={"Person"}
          className={"text-2xl font-bold subpixel-antialiased mb-5"}
        />

        <PersonSearch
          page={page}
          setPage={setPage}
          personList={personList}
          setDepartmentList={setPersonList}
          currentPage={currentPage}
          activeSort={activeSort}
          getChoose={setGetOnePerson}
          refeshKey={refeshKey}
          setRefreshKey={setRefreshKey}
          setCheckFunction={setCheckFunction}
          setModal={setModalDepartment}
        />

        {/* <PersonTable
          header={PERSON_TABLE()}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
          setGetChooseRow={setGetOnePerson}
          data={personList}
          page={page}
          setPage={setPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          refeshKey={refeshKey}
        /> */}
      </Card>

      {/* <DepartmentForm
        modal={modalDepartment}
        setModal={setModalDepartment}
        checkFunction={checkFunction}
        data={getOneDepartment}
        setRefreshKey={setRefreshKey}
      /> */}
    </React.Fragment>
  );
};

export default Person;
